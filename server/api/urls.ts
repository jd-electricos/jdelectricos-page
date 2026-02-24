
export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig();
  const API_BASE = config.public.apiBase;

  // --------------------------------------------------
  // Fetch simple (endpoints NO paginados)
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Fetch con paginación (BLOG)
  // --------------------------------------------------
  const fetchAllPages = async (endpoint: string) => {
    let page = 1;
    const limit = 50;
    let allData: any[] = [];

    while (true) {
      try {
        const response = await fetch(
          `${API_BASE}${endpoint}?page=${page}&limit=${limit}`,
        );

        if (!response.ok) break;

        const json = await response.json();
        const data = Array.isArray(json?.data) ? json.data : [];

        if (data.length === 0) break;

        allData = allData.concat(data);
        page++;
      } catch (error) {
        console.error("Error paginando:", endpoint, error);
        break;
      }
    }

    return allData;
  };

  // --------------------------------------------------
  // Limpieza de slug SEO
  // --------------------------------------------------
  const cleanSlug = (slug: string) =>
    slug
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  // --------------------------------------------------
  // Obtener datos
  // --------------------------------------------------
  const products = await fetchData("/api/products");
  const categories = await fetchData("/api/categories");
  const subcategories = await fetchData("/api/subcategories");
  const blog = await fetchAllPages("/api/blog");

  // --------------------------------------------------
  // Validaciones
  // --------------------------------------------------
  const safeProducts = Array.isArray(products) ? products : [];
  const safeCategories = Array.isArray(categories?.items)
    ? categories.items
    : [];

  const safeSubcategories = Array.isArray(subcategories?.items)
    ? subcategories.items
    : [];
  const safeBlog = Array.isArray(blog) ? blog : [];

  // --------------------------------------------------
  // Rutas de productos
  // --------------------------------------------------
  const productRoutes = safeProducts
    .filter((p) => p.slugProduct)
    .map((p) => `/${cleanSlug(p.slugProduct)}`);

  // --------------------------------------------------
  // Rutas de categorías
  // --------------------------------------------------
  const categoryRoutes = safeCategories
    .filter((c) => c.slug)
    .map((c) => `/${cleanSlug(c.slug)}`);

  // --------------------------------------------------
  // Rutas de subcategorías (sin duplicados)
  // --------------------------------------------------
  const subcategoryRoutes = [
    ...new Set(
      safeSubcategories
        .filter((s) => s.slug)
        .map((s) => `/${cleanSlug(s.slug)}`),
    ),
  ];

  // --------------------------------------------------
  // Rutas de blog (TODAS)
  // --------------------------------------------------
  const blogRoutes = safeBlog
    .filter((b) => b.slug)
    .map((b) => `/${cleanSlug(b.slug)}`);

  // --------------------------------------------------
  // Rutas finales
  // --------------------------------------------------
  const allRoutes = [
    "/",
    ...categoryRoutes,
    ...subcategoryRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];

  // --------------------------------------------------
  // Formato sitemap
  // --------------------------------------------------
  return allRoutes.map((route) => ({
    loc: route,
    lastmod: new Date().toISOString(),
  }));
});
