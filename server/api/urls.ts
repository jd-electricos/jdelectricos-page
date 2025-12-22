export default defineSitemapEventHandler(async () => {
  const API_BASE = "https://clownfish-app-xjood.ondigitalocean.app";

  const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`);
      if (!response.ok) throw new Error(endpoint);
      return await response.json();
    } catch (error) {
      console.error(`Error en ${endpoint}:`, error);
      return [];
    }
  };

  const cleanSlug = (slug: string) =>
    slug
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const products = await fetchData("/api/products");
  const categories = await fetchData("/api/categories");
  const subcategories = await fetchData("/api/subcategories");
  const blog = await fetchData("/api/blog");

  const safeProducts = Array.isArray(products) ? products : [];
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeSubcategories = Array.isArray(subcategories) ? subcategories : [];
  const safeBlog = Array.isArray(blog) ? blog : [];

  const productRoutes = safeProducts
    .filter(p => p.slugProduct)
    .map(p => `/producto/${cleanSlug(p.slugProduct)}`);

  const categoryRoutes = safeCategories
    .filter(c => c.slug)
    .map(c => `/categoria/${cleanSlug(c.slug)}`);

  const subcategoryRoutes = [
    ...new Set(
      safeSubcategories
        .filter(s => s.slug)
        .map(s => `/categoria/${cleanSlug(s.slug)}`)
    ),
  ];

  const blogRoutes = safeBlog
    .filter(b => b.slug)
    .map(b => `/blog/${cleanSlug(b.slug)}`);

  const allRoutes = [
    "/",
    "/tienda",
    "/blog",
    "/contacto",
    ...categoryRoutes,
    ...subcategoryRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];

  return allRoutes.map(route => ({
    loc: route,
    lastmod: new Date().toISOString(),
  }));
});
