import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";

const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL } = {}
) => {
  if (!baseURL) {
    baseURL = useRuntimeConfig().public.baseURL;
  }

  return {
    url: joinURL(baseURL, "/img/", src),
  };
};

export default {
  getImage,
};