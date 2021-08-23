<template>
  <seccion
    v-for="(seccion, index) in secciones"
    :key="index"
    :id="seccion.id"
    :seccion="seccion"
    :last="index + 1 == secciones.length"
  >
  </seccion>
</template>

<script>
import Seccion from "./Seccion.vue";
export default {
  components: { Seccion },
  setup() {
    const secciones = [
      {
        id: "gestion",
        titulo: "Sistemas de Gestión",
        theme: "dark",
        textos: [
          {
            titulo: "Tu negocio, en la palma de tu mano.",
            texto:
              "Manejá tu negocio desde donde estés, con cualquier dispositivo (desktop o mobile).",
          },
          {
            titulo: "Sistemas que se adaptan a tu negocio (y no al revés)",
            texto:
              "¿Tu sistema actual no acompaña el crecimiento de tu empresa? Lo reemplazamos o complementamos en función de tus necesidades.",
          },
          {
            titulo: "Inversiones que rinden",
            texto:
              "Nuestros sistemas de gestión te permiten automatizar procesos, evitar errores y ahorrar tiempo y recursos. Poné a tu equipo a trabajar en lo que verdaderamente importa.",
          },
          {
            titulo: "Sistemas integrales y modulares",
            texto:
              "Stock, pedidos, personal, ventas... Podés empezar por uno, y vas a terminar manejando todo tu negocio en un mismo sistema.",
          },
        ],
      },
      {
        id: "web",
        titulo: "Páginas web",
        theme: "light",
        textos: [
          {
            titulo: "No hay segunda oportunidad para una primera impresión.",
            texto:
              "Tu sitio web es tu carta de presentación. Enamorá / atraé a los usuarios contándoles qué tenés para ofrecerles.",
          },
          {
            titulo: "Diseño UX",
            texto:
              "Diseños pensados en la facilidad de navegación, tanto en desktop como en mobile. Si algo no es fácil de encontrar, está mal diseñado.",
          },
          {
            titulo: "Autoadministrables (si querés, y si no, no)",
            texto:
              "Sitios web llave en mano: una vez que está listo, modificás el contenido cuando vos quieras, de manera sencilla. Y si preferís, lo hacemos nosotros. ",
          },
        ],
      },
      {
        id: "marketing",
        titulo: "Marketing de contenido",
        theme: "dark",
        textos: [
          {
            titulo: "Sé referente de tu comunidad",
            texto:
              "Aunque no lo creas, lo mejor que podés darles a tus clientes no son tus productos. Creamos y curamos contenido de calidad, que ofrece valor y fideliza a tus usuarios.",
          },
        ],
      },
      {
        id: "comunicacion",
        titulo: "Comunicación digital",
        theme: "light",
        textos: [
          {
            titulo:
              "Hacé que los usuarios se sientan acompañados mientras recorren tu sitio web",
            texto:
              "Anticipar sus dudas y las respuestas que necesitan es una gran estrategia para lograr más ventas.",
          },
          {
            titulo: "La voz / personalidad de tu empresa, en todos los canales",
            texto:
              "Redes sociales, newsletters, mailing, formularios... Que se note en todos lados quiénes son ustedes.",
          },
        ],
      },
    ];
    return { secciones };
  },
};
</script>
