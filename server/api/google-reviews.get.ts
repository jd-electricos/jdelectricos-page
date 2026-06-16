export default defineCachedEventHandler(
  async () => {
    const config = useRuntimeConfig();

    const apiKey = config.public.googleMapsApiKey;
    const placeId = config.public.googlePlaceId;

    if (!apiKey || !placeId) {
      throw createError({
        statusCode: 500,
        message: "Faltan GOOGLE_MAPS_API_KEY o GOOGLE_PLACE_ID",
      });
    }

    try {
      const response: any = await $fetch(
        `https://places.googleapis.com/v1/places/${placeId}`,
        {
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": [
              "id",
              "displayName",
              "rating",
              "userRatingCount",
              "googleMapsUri",
              "reviews",
              "reviews.rating",
              "reviews.text",
              "reviews.originalText",
              "reviews.relativePublishTimeDescription",
              "reviews.publishTime",
              "reviews.authorAttribution.displayName",
              "reviews.authorAttribution.photoUri",
              "reviews.authorAttribution.uri",
            ].join(","),
          },
          query: {
            languageCode: "es-419",
          },
        },
      );

      const businessName =
        response.displayName?.text || "JD Eléctricos | materiales eléctricos";

      const fallbackGoogleUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        businessName,
      )}&query_place_id=${placeId}`;

      return {
        id: response.id,
        name: businessName,
        rating: response.rating || null,
        totalReviews: response.userRatingCount || 0,
        googleUrl: fallbackGoogleUrl,
        googleMapsUri: response.googleMapsUri || null,
        reviews: (response.reviews || []).map((review: any) => ({
          author: review.authorAttribution?.displayName || "Cliente de Google",
          profilePhoto: review.authorAttribution?.photoUri || null,
          url: review.authorAttribution?.uri || null,
          rating: review.rating || 5,
          text: review.text?.text || review.originalText?.text || "",
          time: review.relativePublishTimeDescription || "",
          publishTime: review.publishTime || null,
        })),
      };
    } catch (error: any) {
      console.error("Google Places API error:", error?.data || error);

      throw createError({
        statusCode: error?.statusCode || 500,
        message:
          error?.data?.error?.message || "Error consultando Google Places API",
      });
    }
  },
  {
    maxAge: 60 * 60 * 12,
  },
);
