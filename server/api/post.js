// server/api/posts.js
export default defineEventHandler(() => {
    return [
      {
        id: 1,
        slug: "post-numero-uno",
        title: "Post número uno",
        content: [
          { type: "image", src: "https://jdelectricos.com.co/wp-content/uploads/2024/12/energia-renovable-1.webp", alt: "Primera imagen" },
          { type: "text", text: "Primer párrafo del post número uno." },
          { type: "text", text: "Segundo párrafo del post número uno." },
          { type: "image", src: "https://jdelectricos.com.co/wp-content/uploads/2024/12/energia-renovable-1.webp", alt: "Segunda imagen" },
          { type: "text", text: "Tercer párrafo del post número uno." }
        ]
      },
      {
        id: 2,
        slug: "post-numero-dos",
        title: "Post número dos",
        content: [
          { type: "image", src: "/img/post2-img1.jpg", alt: "Imagen principal" },
          { type: "text", text: "Primer párrafo del segundo post." },
          { type: "image", src: "/img/post2-img2.jpg", alt: "Otra imagen" },
          { type: "text", text: "Segundo párrafo del segundo post." }
        ]
      }
    ]
  })
  