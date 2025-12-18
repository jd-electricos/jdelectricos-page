export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  if (path.startsWith("/img/") || path.startsWith("/logo/") || path.startsWith("/carousel-customers/")) {
    setHeader(event, "Cache-Control", "public, max-age=31536000, immutable")
  }
})
