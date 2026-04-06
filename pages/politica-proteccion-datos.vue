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
            class="font-display text-2xl font-bold tracking-tight text-yellow-400"
          >
            POLÍTICA DE TRATAMIENTO DE DATOS
          </h1>
        </div>

        <div
          class="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 leading-relaxed"
        >
          <p>
            En JD ELÉCTRICOS E INDUSTRIA S.A.S nos comprometemos a proteger la
            privacidad y los datos personales de nuestros clientes, usuarios y
            visitantes del sitio web
            <a
              href="http://www.jdelectricos.com.co"
              class="text-brand-yellow hover:underline"
            >
              www.jdelectricos.com.co </a
            >. Esta política describe cómo recolectamos, almacenamos, usamos y
            protegemos la información personal, en cumplimiento con la Ley 1581
            de 2012 y demás normas aplicables en Colombia.
          </p>
          <p class="mt-4 font-medium text-white">
            Al acceder y utilizar nuestro sitio web o contactarnos a través de
            cualquier canal de atención, usted acepta los términos de esta
            política y consiente el tratamiento de sus datos conforme a lo aquí
            establecido.
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
  UserCheck,
  BookOpen,
  FileText,
  Shield,
  ClipboardList,
  Database,
  Key,
  Lock,
  Mail,
  Cookie,
  LifeBuoy,
  CheckCircle,
  Users,
  AlertTriangle,
  Calendar,
} from "lucide-vue-next";

defineProps({
  onBack: Function,
});

const sections = [
  {
    id: 1,
    title: "1. RESPONSABLE DEL TRATAMIENTO",
    icon: UserCheck,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S, identificada con NIT 900131054, con domicilio en Bogotá D.C., CR 12 # 15-95 OF 506, es responsable del tratamiento de los datos personales y comerciales recolectados a través de su sitio web www.jdelectricos.com.co y demás canales de atención.\n\nCorreo electrónico: sistemas@jdelectricos.com.co\nTeléfono: 310 8023277",
  },
  {
    id: 2,
    title: "2. MARCO LEGAL",
    icon: BookOpen,
    content:
      "La presente política se rige por:\n\n• Artículo 15 de la Constitución Política de Colombia\n• Ley 1581 de 2012\n• Decreto 1377 de 2013\n• Decreto 1074 de 2015\n• Circular Única de la Superintendencia de Industria y Comercio",
  },
  {
    id: 3,
    title: "3. DEFINICIONES",
    icon: FileText,
    content:
      "Para efectos de esta política se entenderá por:\n\n• Dato Personal: Información que permite identificar a una persona natural.\n• Dato Comercial: Información que identifica o representa a una persona jurídica, incluyendo RUT y datos de contacto.\n• Tratamiento: Recolección, almacenamiento, uso, circulación o supresión de datos.\n• Titular: Persona natural cuyos datos son objeto de tratamiento o representante de una persona jurídica que suministra información para fines comerciales.\n• Autorización: Consentimiento previo, expreso e informado del titular.\n• Dato Sensible: Información que afecta la intimidad del titular.",
  },
  {
    id: 4,
    title: "4. PRINCIPIOS",
    icon: Shield,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S garantiza el tratamiento de datos bajo los siguientes principios:\n\n• Legalidad\n• Finalidad\n• Libertad\n• Veracidad\n• Transparencia\n• Seguridad\n• Confidencialidad",
  },
  {
    id: 5,
    title: "5. FINALIDADES DEL TRATAMIENTO",
    icon: ClipboardList,
    content:
      "Los datos recolectados serán utilizados para:\n\n• Gestionar procesos comerciales y ventas mediante asesores\n• Contactar a clientes y representantes de empresas vía WhatsApp, teléfono o correo electrónico\n• Generar facturación y gestionar pagos (incluyendo pasarela Wompi)\n• Enviar información comercial, promociones y novedades\n• Realizar seguimiento a pedidos, entregas y servicio al cliente\n• Evaluar la calidad del servicio\n• Prevenir fraude y cumplir obligaciones legales\n\nAdemás, se podrán utilizar herramientas como Google Analytics y Search Console para analizar el comportamiento de los usuarios, mejorar la experiencia de navegación y optimizar los servicios.",
  },
  {
    id: 6,
    title: "6. DATOS RECOLECTADOS",
    icon: Database,
    content:
      "Se podrán recolectar datos como:\n\n• Personas naturales: nombre y apellidos, número de identificación, correo electrónico, teléfono, dirección, fecha de nacimiento.\n• Personas jurídicas: razón social, RUT, correo corporativo, teléfono de contacto, representante legal, dirección de la empresa.\n• Información de facturación y pagos",
  },
  {
    id: 7,
    title: "7. DERECHOS DE LOS TITULARES",
    icon: Key,
    content:
      "El titular de los datos tiene derecho a:\n\n• Conocer, actualizar y rectificar sus datos\n• Solicitar prueba de la autorización\n• Revocar la autorización\n• Solicitar la eliminación de sus datos\n• Presentar quejas ante la Superintendencia de Industria y Comercio\n\nLos representantes legales podrán ejercer estos derechos sobre los datos que suministran en nombre de la empresa.",
  },
  {
    id: 8,
    title: "8. DEBERES DEL RESPONSABLE",
    icon: Lock,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S se compromete a:\n\n• Garantizar la seguridad de la información\n• Usar los datos solo para las finalidades autorizadas\n• Informar al titular sobre el uso de sus datos\n• Atender consultas y reclamos",
  },
  {
    id: 9,
    title: "9. RECOLECCIÓN DE DATOS",
    icon: Mail,
    content:
      "Los datos podrán ser recolectados mediante:\n\n• Formularios web\n• Contacto por WhatsApp\n• Llamadas telefónicas\n• Correos electrónicos\n• Facturación y procesos comerciales",
  },
  {
    id: 10,
    title: "10. COOKIES",
    icon: Cookie,
    content:
      "El sitio web utiliza cookies para:\n\n• Mejorar la experiencia del usuario\n• Analizar el comportamiento de navegación\n• Optimizar el funcionamiento del sitio\n\nEstas cookies no almacenan información financiera ni sensible.",
  },
  {
    id: 11,
    title: "11. PROCEDIMIENTO PARA CONSULTAS Y RECLAMOS",
    icon: LifeBuoy,
    content:
      "El titular podrá presentar solicitudes al correo sistemas@jdelectricos.com.co\n\nLas solicitudes serán atendidas en los términos establecidos por la ley:\n\n• Consultas: máximo 10 días hábiles\n• Reclamos: máximo 15 días hábiles",
  },
  {
    id: 12,
    title: "12. AUTORIZACIÓN DEL TITULAR",
    icon: CheckCircle,
    content:
      "El titular autoriza de manera previa, expresa e informada el tratamiento de sus datos personales y comerciales al:\n\n• Usar el sitio web\n• Contactar a la empresa\n• Aceptar los términos y condiciones\n\nEsto incluye datos de personas naturales y de representantes legales de personas jurídicas.",
  },
  {
    id: 13,
    title: "13. TRANSFERENCIA DE DATOS",
    icon: Users,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S podrá compartir datos con:\n\n• Nuestros asesores comerciales\n\nSiempre garantizando niveles adecuados de protección de la información y cumpliendo con la normativa vigente.",
  },
  {
    id: 14,
    title: "14. SEGURIDAD DE LA INFORMACIÓN",
    icon: AlertTriangle,
    content:
      "La empresa adopta medidas técnicas, humanas y administrativas para proteger los datos personales y comerciales contra pérdida, uso indebido o acceso no autorizado.",
  },
  {
    id: 15,
    title: "15. VIGENCIA",
    icon: Calendar,
    content:
      "La presente política rige a partir de su publicación y podrá ser modificada en cualquier momento.",
  },
  {
    id: 16,
    title: "16. DISPOSICIONES FINALES",
    icon: FileText,
    content:
      "JD ELÉCTRICOS E INDUSTRIA S.A.S podrá conservar la información por el tiempo necesario para cumplir con obligaciones legales, comerciales y contables.\n\nAl aceptar esta política, el titular reconoce haber leído y entendido el tratamiento de sus datos personales y comerciales.",
  },
];
useHead({
  title: "Política de Tratamiento de Datos - JD ELÉCTRICOS",
  meta: [
    {
      name: "description",
      content:
        "Conoce la política de protección de datos de JD ELÉCTRICOS e INDUSTRIA S.A.S. Información sobre recolección, tratamiento, transferencia y derechos de titulares de datos personales y comerciales.",
    },
    {
      name: "keywords",
      content:
        "Política de datos, protección de datos personales, JD ELÉCTRICOS, privacidad, seguridad, transferencia de datos, consentimiento",
    },
    { name: "robots", content: "index, follow" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.jdelectricos.com.co/politica-proteccion-datos",
    },
  ],
});
</script>
