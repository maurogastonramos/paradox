<template>
  <div
    :class="[
      {
        'text-white bg-black ': currentSeccion % 2 === 0,
      },
      {
        'text-black bg-white ': currentSeccion % 2 !== 0,
      },
      'transition duration-500  relative',
    ]"
  >
    <div
      v-for="(seccion, indexSeccion) in secciones"
      :key="indexSeccion"
      :id="indexSeccion"
      class="text-left px-10 mb-40 seccion"
    >
      <Title :title="seccion.titulo" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 md:gap-x-10 md:mt-20">
        <div class="hidden md:block col-span-1 md:col-span-2 relative">
          <div class="block md:sticky top-20 z-40">
            <div class="relative h-80v">
              <div
                v-for="(texto, indexTexto) in seccion.textos"
                :key="'a' + indexTexto"
                :class="[
                  {
                    'md:opacity-100':
                      current === `texto-${indexSeccion}-${indexTexto}`,
                  },
                  {
                    'md:opacity-0':
                      current !== `texto-${indexSeccion}-${indexTexto}`,
                  },
                  'transition h-80v duration-500 w-full block md:absolute top-0 bottom-0 left-0 right-0',
                ]"
              >
                <img
                  :src="
                    texto.foto
                      ? require('../assets/secciones/' + texto.foto)
                      : require('../assets/secciones/1.jpeg')
                  "
                  class="w-full h-full object-cover"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 md:mt-20 col-span-2 md:col-span-1">
          <div
            v-for="(texto, indexTexto) in seccion.textos"
            :key="indexTexto"
            :id="`texto-${indexSeccion}-${indexTexto}`"
            :class="[
              {
                'md:opacity-100':
                  current === `texto-${indexSeccion}-${indexTexto}`,
              },
              {
                'md:opacity-10':
                  current !== `texto-${indexSeccion}-${indexTexto}`,
              },
              'transition duration-500 parrafo md:pt-4v md:pb-40v',
            ]"
          >
            <div>
              <div class="w-full h-80 mt-8 pb-5 md:hidden">
                <img
                  :src="
                    texto.foto
                      ? require('../assets/secciones/' + texto.foto)
                      : require('../assets/secciones/1.jpeg')
                  "
                  class="w-full h-full object-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <p class="font-bold text-xl md:text-4xl break-words">
                {{ texto.titulo }}
              </p>
              <p class="text-md md:text-2xl break-words">{{ texto.texto }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Title from "./Title.vue";
export default {
  components: { Title },
  setup() {
    let current = ref("texto-0-0");
    let currentSeccion = ref("0");

    onMounted(() => {
      const parrafos = document.querySelectorAll(".parrafo");
      const secciones = document.querySelectorAll(".seccion");

      window.addEventListener("scroll", () => {
        parrafos.forEach((parrafo) => {
          const sectionTop = parrafo.offsetTop;
          if (pageYOffset - window.innerHeight >= sectionTop) {
            current.value = parrafo.getAttribute("id");
            return;
          }
        });
        secciones.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset - window.innerHeight >= sectionTop) {
            currentSeccion.value = section.getAttribute("id");
            return;
          }
        });
      });
    });

    const getIndexSeccion = () => {
      return parseInt(current.value.charAt(current.value.length - 3));
    };
    const secciones = [
      {
        id: "gestion",
        titulo: "Sistemas de Gestión",
        theme: "light",
        textos: [
          {
            titulo: "Tu negocio, en la palma de tu mano.",
            texto:
              "Manejá tu negocio desde donde estés, con cualquier dispositivo (desktop o mobile).",
            foto: "1.jpeg",
          },
          {
            titulo: "Sistemas que se adaptan a tu negocio (y no al revés)",
            texto:
              "¿Tu sistema actual no acompaña el crecimiento de tu empresa? Lo reemplazamos o complementamos en función de tus necesidades.",
            foto: "2.jpeg",
          },
          {
            titulo: "Inversiones que rinden",
            texto:
              "Nuestros sistemas de gestión te permiten automatizar procesos, evitar errores y ahorrar tiempo y recursos. Poné a tu equipo a trabajar en lo que verdaderamente importa.",
            foto: "3.jpeg",
          },
          {
            titulo: "Sistemas integrales y modulares",
            texto:
              "Stock, pedidos, personal, ventas... Podés empezar por uno, y vas a terminar manejando todo tu negocio en un mismo sistema.",
            foto: "4.jpeg",
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
            foto: "5.jpeg",
          },
          {
            titulo: "Diseño UX",
            texto:
              "Diseños pensados en la facilidad de navegación, tanto en desktop como en mobile. Si algo no es fácil de encontrar, está mal diseñado.",
            foto: "1.jpeg",
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
    return { secciones, current, getIndexSeccion, currentSeccion };
  },
};
</script>


<style scoped>
a.current {
  background: red;
}
</style>