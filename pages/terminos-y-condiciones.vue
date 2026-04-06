<template>
  <div class="min-h-screen pt-20 pb-20 bg-gray-900">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center">
            <FileText :size="32" class="text-yellow-400" />
          </div>
          <h1
            class="font-display text-3xl lg:text-4xl font-bold tracking-tight text-yellow-400"
          >
            Términos y Condiciones de Uso
          </h1>
        </div>

        <div
          class="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 leading-relaxed"
        >
          <p class="mb-4">
            <strong>JD ELÉCTRICOS E INDUSTRIA S.A.S</strong>
          </p>
          <p>
            El presente documento establece los Términos y Condiciones de Uso
            del sitio web
            <a
              href="http://www.jdelectricos.com.co"
              class="text-brand-yellow hover:underline"
            >
              www.jdelectricos.com.co </a
            >, propiedad de JD ELÉCTRICOS E INDUSTRIA S.A.S, sociedad legalmente
            constituida conforme a las leyes de la República de Colombia,
            identificada con NIT 900131054, con domicilio en la ciudad de Bogotá
            D.C., en la dirección CR 12 # 15-95 OF 506.
          </p>
          <p class="mt-4 font-medium text-white">
            El acceso y uso del Sitio Web implica la aceptación plena y sin
            reservas de los presentes Términos y Condiciones.
          </p>
        </div>
      </div>

      <!-- Sections -->
      <div class="space-y-8">
        <div
          v-for="section in sections"
          :key="section.id"
          class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-yellow/20 transition-all group"
        >
          <div class="flex items-start gap-6">
            <div
              class="shrink-0 p-3 rounded-xl bg-brand-yellow/5 group-hover:bg-brand-yellow/10 transition-colors"
            >
              <component
                :is="section.icon"
                class="text-yellow-400"
                :size="24"
              />
            </div>
            <div>
              <h3
                class="font-display font-bold text-xl mb-4 text-white group-hover:text-brand-yellow transition-colors"
              >
                {{ section.title }}
              </h3>
              <div
                class="text-gray-400 text-sm leading-relaxed whitespace-pre-line"
              >
                {{ section.content }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="mt-16 p-8 rounded-3xl bg-yellow-400 text-center font-bold">
        Al utilizar este Sitio Web, el usuario declara haber leído, entendido y
        aceptado los presentes Términos y Condiciones.
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  FileText,
  Target,
  ShoppingCart,
  Tag,
  CreditCard,
  Truck,
  XCircle,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Copyright,
  Database,
  Cookie,
  Gavel,
  RefreshCw,
  Mail,
  ArrowLeft,
} from "lucide-vue-next";

defineProps({
  onBack: Function,
});

const sections = [
  {
    id: 1,
    title: "1. OBJETO DEL SITIO WEB",
    icon: Target,
    content:
      "El Sitio Web tiene como finalidad proporcionar información sobre los productos eléctricos de media, baja y alta tensión comercializados por JD ELÉCTRICOS E INDUSTRIA S.A.S.\n\nLas ventas no se realizan directamente a través del Sitio Web, sino mediante contacto con asesores comerciales a través de canales como WhatsApp, via telefonica o correo electronico, donde se formaliza la negociación.",
  },
  {
    id: 2,
    title: "2. PROCESO DE COMPRA",
    icon: ShoppingCart,
    content:
      "El proceso de compra se realiza de la siguiente manera:\n\n• El usuario consulta productos en el Sitio Web.\n• Se contacta con un asesor comercial.\n• Se realiza la cotización y negociación.\n• La venta se formaliza únicamente en el momento en que se genera la factura correspondiente.\n\nLa generación de la factura constituye la aceptación de la oferta y el perfeccionamiento del contrato de compraventa.",
  },
  {
    id: 3,
    title: "3. PRECIOS Y DISPONIBILIDAD",
    icon: Tag,
    content:
      "Los precios publicados en el Sitio Web son de carácter informativo y pueden cambiar en cualquier momento sin previo aviso.\n\nLa disponibilidad de los productos está sujeta a inventario o condiciones de pedido bajo fabricación o importación.",
  },
  {
    id: 4,
    title: "4. FORMAS DE PAGO",
    icon: CreditCard,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S permite el pago de facturas a través de la pasarela de pagos Wompi y otros medios acordados con el asesor comercial.\n\nLos pagos realizados corresponden exclusivamente a facturas previamente generadas y no constituyen compras directas en el Sitio Web.",
  },
  {
    id: 5,
    title: "5. ENVÍOS Y ENTREGA",
    icon: Truck,
    content:
      "• Se realizan envíos a todo el territorio colombiano.\n• Los tiempos de entrega estimados son de 1 a 5 días hábiles, dependiendo de la ubicación y disponibilidad del producto.\n• Los envíos pueden realizarse mediante transportadoras externas o mediante transporte propio de la empresa.\n\nEl costo del envío será definido en cada negociación. El riesgo sobre el producto se transfiere al cliente en el momento de la entrega.",
  },
  {
    id: 6,
    title: "6. CANCELACIONES",
    icon: XCircle,
    content:
      "El cliente podrá solicitar la cancelación del pedido, siempre que lo comunique oportunamente al asesor comercial antes del despacho del producto.",
  },
  {
    id: 7,
    title: "7. DERECHO DE RETRACTO Y DEVOLUCIONES",
    icon: RotateCcw,
    content:
      "El cliente podrá ejercer el derecho de retracto dentro de los cuatro (4) días calendario siguientes a la entrega del producto.\n\nCondiciones:\n• El producto debe estar en perfecto estado.\n• No debe haber sido usado ni instalado.\n• Debe conservar su empaque original.\n\nLos costos de devolución serán asumidos según lo acordado entre las partes. No se aceptarán devoluciones de productos manipulados, instalados o que presenten daños por uso indebido.",
  },
  {
    id: 8,
    title: "8. GARANTÍA",
    icon: ShieldCheck,
    content:
      "Los productos cuentan con garantía por defectos de fabricación o calidad conforme a la normativa colombiana.\n\nLa garantía no aplicará en casos de:\n• Uso indebido\n• Instalación incorrecta\n• Manipulación inadecuada",
  },
  {
    id: 9,
    title: "9. USO DE PRODUCTOS ELÉCTRICOS",
    icon: AlertTriangle,
    content:
      "Los productos comercializados deben ser instalados y manipulados exclusivamente por personal técnico calificado.\n\nJD ELÉCTRICOS E INDUSTRIA S.A.S no se hace responsable por daños, accidentes o perjuicios derivados del uso inadecuado, instalación incorrecta o manipulación indebida de los productos.",
  },
  {
    id: 10,
    title: "10. LIMITACIÓN DE RESPONSABILIDAD",
    icon: Lock,
    content:
      "El uso del Sitio Web se realiza bajo responsabilidad del usuario.\n\nJD ELÉCTRICOS E INDUSTRIA S.A.S no garantiza que el Sitio Web esté libre de errores o interrupciones, ni será responsable por daños derivados del uso de la información contenida en el mismo.",
  },
  {
    id: 11,
    title: "11. PROPIEDAD INTELECTUAL",
    icon: Copyright,
    content:
      "Todos los contenidos del Sitio Web (textos, imágenes, logos, diseños) son propiedad de JD ELÉCTRICOS E INDUSTRIA S.A.S.\n\nQueda prohibida su reproducción, distribución o uso sin autorización previa.",
  },
  {
    id: 12,
    title: "12. PROTECCIÓN DE DATOS PERSONALES",
    icon: Database,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S recolecta y trata datos personales conforme a la Ley 1581 de 2012.\n\nLos datos recolectados se utilizan para:\n• Gestión comercial\n• Atención al cliente\n• Mejora del servicio\n• Análisis mediante herramientas como Google Analytics y Search Console\n\nEl usuario podrá ejercer sus derechos de acceso, actualización o eliminación mediante solicitud al correo: sistemas@jdelectricos.com.co",
  },
  {
    id: 13,
    title: "13. COOKIES",
    icon: Cookie,
    content:
      "El Sitio Web utiliza cookies para mejorar la experiencia del usuario, facilitar la navegación y analizar el comportamiento del usuario. El usuario puede configurar su navegador para rechazar cookies si así lo desea.",
  },
  {
    id: 14,
    title: "14. LEGISLACIÓN APLICABLE",
    icon: Gavel,
    content:
      "Estos Términos y Condiciones se rigen por las leyes de la República de Colombia, en especial la Ley 1480 de 2011 (Estatuto del Consumidor).",
  },
  {
    id: 15,
    title: "15. MODIFICACIONES",
    icon: RefreshCw,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S podrá modificar estos Términos y Condiciones en cualquier momento sin previo aviso.",
  },
  {
    id: 16,
    title: "16. CONTACTO",
    icon: Mail,
    content:
      "Para consultas, el usuario puede comunicarse a:\n\nCorreo: sistemas@jdelectricos.com.co\nTeléfono: 310 8023277",
  },
];

useHead({
  title: "Términos y Condiciones de Uso - JD ELÉCTRICOS",
  meta: [
    {
      name: "description",
      content:
        "Consulta los términos y condiciones de uso de JD ELÉCTRICOS e INDUSTRIA S.A.S. Información sobre responsabilidades, obligaciones y derechos de usuarios y clientes.",
    },
    {
      name: "keywords",
      content:
        "Términos y condiciones, JD ELÉCTRICOS, uso sitio web, responsabilidades, derechos del usuario, políticas comerciales",
    },
    { name: "robots", content: "index, follow" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.jdelectricos.com.co/terminos-y-condiciones",
    },
  ],
});
</script>
