<template>
  <div
    :class="[
      'transition duration-500 relative text-white bg-black grid grid-cols-10',
    ]"
  >
    <!-- Menu flotante izquierda -->
    <div class="hidden lg:col-span-2 md:flex justify-center select-none">
      <div
        class="
          h-72v
          px-4
          sticky
          top-16
          flex
          items-start
          justify-center
          flex-col
          gap-y-3
          transition
          duration-500
          leading-5
          z-50
        "
      >
        <div v-for="(seccion, indexSeccion) in secciones" :key="indexSeccion" class="text-left">
          <a
            :href="`#${seccion.id}`"
            :class="[{ 'text-gray-500': getIndexSeccion() !== indexSeccion}, 'transition duration-500 font-title']"
          >
            {{ seccion.titulo }}
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-12 lg:col-span-8 relative">
      <div
        v-for="(seccion, indexSeccion) in secciones"
        :key="indexSeccion"
        :id="seccion.id"
        class="text-left px-10 mb-40 seccion"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-x-5 md:gap-x-10 md:pt-20"
        >
          <!-- Col 1 - Desktop: Titulo y Foto de sección Sticky - Mobile: Hidden -->
          <div :class="['hidden md:block col-span-1 md:col-span-2 relative']">
            <div class="block md:sticky top-16 z-40">
              <div class="flex">
                <Title class="text-xl block lg:hidden" :title="seccion.titulo" />
              </div>

              <!-- Foto de Sección -->
              <div class="relative mt-6 h-72v md:h-80v font-texto">
                <div
                  v-for="(parrafo, indexParrafo) in seccion.parrafos"
                  :key="indexParrafo"
                  :class="[
                    {
                      'md:opacity-100':
                        currentParrafo ===
                        `parrafo-${indexSeccion}-${indexParrafo}`,
                    },
                    {
                      'md:opacity-0':
                        currentParrafo !==
                        `parrafo-${indexSeccion}-${indexParrafo}`,
                    },
                    'transition h-72v md:h-80v duration-500 w-full block md:absolute top-0 bottom-0 left-0 right-0',
                  ]"
                >
                  <img
                    :src="getFoto(parrafo)"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Col 2 - Desktop: Texto - Mobile: Foto + Texto -->
          <div class="mt-8 md:mt-20 col-span-2 md:col-span-1 z-50">
            <!--  font-texto -->
            <Title :title="seccion.titulo" class="md:hidden" />
            <div
              v-for="(parrafo, indexParrafo) in seccion.parrafos"
              :key="indexParrafo"
              :id="`parrafo-${indexSeccion}-${indexParrafo}`"
              :class="[
                {
                  'md:opacity-100':
                    currentParrafo ===
                    `parrafo-${indexSeccion}-${indexParrafo}`,
                },
                {
                  'md:opacity-10':
                    currentParrafo !==
                    `parrafo-${indexSeccion}-${indexParrafo}`,
                },
                'parrafo md:pt-4v md:pb-40v transition duration-500 ',
              ]"
            >
              <div>
                <div class="mt-8 pb-5 w-full h-80 md:hidden">
                  <img
                    :src="getFoto(parrafo)"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-xl md:text-2xl font-bold break-words mb-4">
                  {{ parrafo.titulo }}
                </p>
                <p class="text-md md:text-md break-words leading-6">
                  {{ parrafo.parrafo }}
                </p>
              </div>
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
    let currentParrafo = ref("parrafo-0-0");
    let currentSeccion = ref("0");

    onMounted(() => {
      // Guarda la sección y el parráfo actualmente visible
      window.addEventListener("scroll", () => {
        const secciones = document.querySelectorAll(".seccion");
        secciones.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset - window.innerHeight >= sectionTop) {
            currentSeccion.value = section.getAttribute("id");
            return;
          }
        });
        const parrafos = document.querySelectorAll(".parrafo");
        parrafos.forEach((parrafo) => {
          const sectionTop = parrafo.offsetTop;
          if (pageYOffset - window.innerHeight >= sectionTop) {
            currentParrafo.value = parrafo.getAttribute("id");
            return;
          }
        });
      });
    });

    const getIndexSeccion = () => {
      return parseInt(
        currentParrafo.value.charAt(currentParrafo.value.length - 3)
      );
    };
    const secciones = [
      {
        id: "gestion",
        titulo: "Sistemas de Gestión",
        theme: "light",
        parrafos: [
          {
            titulo: "Tu negocio, en la palma de tu mano.",
            parrafo:
              "Manejá tu negocio desde donde estés, con cualquier dispositivo (desktop o mobile).",
            foto: "1",
          },
          {
            titulo: "Sistemas que se adaptan a tu negocio (y no al revés)",
            parrafo:
              "¿Tu sistema actual no acompaña el crecimiento de tu empresa? Lo reemplazamos o complementamos en función de tus necesidades.",
            foto: "3",
          },
          {
            titulo: "Inversiones que rinden",
            parrafo:
              "Nuestros sistemas de gestión te permiten automatizar procesos, evitar errores y ahorrar tiempo y recursos. Poné a tu equipo a trabajar en lo que verdaderamente importa.",
            foto: "5",
          },
          {
            titulo: "Sistemas integrales y modulares",
            parrafo:
              "Stock, pedidos, personal, ventas... Podés empezar por uno, y vas a terminar manejando todo tu negocio en un mismo sistema.",
            foto: "7",
          },
        ],
      },
      {
        id: "web",
        titulo: "Páginas web",
        theme: "light",
        parrafos: [
          {
            titulo: "No hay segunda oportunidad para una primera impresión.",
            parrafo:
              "Tu sitio web es tu carta de presentación. Enamorá / atraé a los usuarios contándoles qué tenés para ofrecerles.",
            foto: "9",
          },
          {
            titulo: "Diseño UX",
            parrafo:
              "Diseños pensados en la facilidad de navegación, tanto en desktop como en mobile. Si algo no es fácil de encontrar, está mal diseñado.",
            foto: "12",
          },
          {
            titulo: "Autoadministrables (si querés, y si no, no)",
            parrafo:
              "Sitios web llave en mano: una vez que está listo, modificás el contenido cuando vos quieras, de manera sencilla. Y si preferís, lo hacemos nosotros. ",
            foto: "14",
          },
        ],
      },
      {
        id: "marketing",
        titulo: "Marketing de contenido",
        theme: "dark",
        parrafos: [
          {
            titulo: "Sé referente de tu comunidad",
            parrafo:
              "Aunque no lo creas, lo mejor que podés darles a tus clientes no son tus productos. Creamos y curamos contenido de calidad, que ofrece valor y fideliza a tus usuarios.",
            foto: "16",
          },
        ],
      },
      {
        id: "comunicacion",
        titulo: "Comunicación digital",
        theme: "light",
        parrafos: [
          {
            titulo:
              "Hacé que los usuarios se sientan acompañados mientras recorren tu sitio web",
            parrafo:
              "Anticipar sus dudas y las respuestas que necesitan es una gran estrategia para lograr más ventas.",
            foto: "18",
          },
          {
            titulo: "La voz / personalidad de tu empresa, en todos los canales",
            parrafo:
              "Redes sociales, newsletters, mailing, formularios... Que se note en todos lados quiénes son ustedes.",
            foto: "20",
          },
        ],
      },
    ];

    const getFoto = (parrafo) => {
      return require("../assets/secciones/" + parrafo.foto + ".jpeg");
    };
    return {
      secciones,
      currentParrafo,
      getIndexSeccion,
      currentSeccion,
      getFoto,
    };
  },
};
</script>


<style scoped>
a.current {
  background: red;
}
</style>