<template>
  <div
    :class="[
      'transition duration-500 relative text-white bg-black grid grid-cols-10',
    ]"
  >
    <!-- Menu flotante izquierda -->
    <div class="hidden lg:col-span-2 lg:flex justify-center select-none">
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
        <div
          v-for="(seccion, indexSeccion) in secciones"
          :key="indexSeccion"
          class="text-left"
        >
          <a
            :href="`#${seccion.id}`"
            :class="[
              { 'text-gray-500': getIndexSeccion() !== indexSeccion },
              'transition duration-500 font-title',
            ]"
          >
            <span class="select-none"> {{ seccion.titulo }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-12 lg:col-span-8 relative">
      <div
        v-for="(seccion, indexSeccion) in secciones"
        :key="indexSeccion"
        class="text-left md:px-10 mb-10 md:mb-30 seccion"
      >
        <div
          class="
            grid grid-cols-1
            md:grid-cols-5
            gap-x-5
            md:gap-x-12
            md:pt-20
            pt-8
          "
          :id="seccion.id"
        >
          <!-- Col 1 - Desktop: Titulo y Foto de sección Sticky - Mobile: Hidden -->
          <div class="hidden md:block col-span-1 md:col-span-3 relative">
            <div class="block md:sticky top-16 z-40">
              <div class="flex">
                <Title class="text-xl block" :title="seccion.titulo" />
              </div>

              <!-- Foto de Sección -->
              <div class="relative mt-6 lg:mt-0 h-72v md:h-80v font-texto">
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
                    'transition h-72v md:h-80v md:p-9 duration-500 w-full block md:absolute top-0 bottom-0 left-0 right-0',
                  ]"
                >
                  <div class="w-full h-full absolute"></div>
                  <img
                    :src="getFoto(parrafo)"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Col 2 - Desktop: Texto - Mobile: Foto + Texto -->
          <div class="mt-8 md:mt-20 col-span-2 md:col-span-2 z-50">
            <!--  font-texto -->
            <Title :title="seccion.titulo" class="md:hidden px-10 md:px-0" />
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
                {
                  'md:pt-35v': indexParrafo === 0,
                  'md:pt-4v': indexParrafo !== 0,
                },
                'parrafo md:pb-40v transition duration-500 ',
              ]"
            >
              <div>
                <div
                  class="
                    mt-8
                    pb-5
                    w-full
                    h-auto
                    max-h-80
                    md:h-80
                    md:hidden
                    relative
                  "
                >
                  <img
                    :src="getFoto(parrafo)"
                    class="
                      w-full
                      h-auto
                      max-h-80
                      md:h-full
                      object-contain
                      md:object-cover
                    "
                  />
                </div>
                <p
                  class="
                    px-10
                    md:px-0
                    text-xl
                    md:text-2xl
                    font-bold
                    break-words
                    mb-4
                  "
                >
                  {{ parrafo.titulo }}
                </p>
                <p
                  class="
                    px-10
                    md:px-0
                    pb-2
                    text-md
                    md:text-md
                    break-words
                    leading-6
                    whitespace-pre-line
                  "
                  v-for="(parrafoText, indexp) in parrafo.parrafos"
                  :key="indexp"
                >
                  <!-- {{ formatParrafo(parrafo.parrafo) }} -->
                  {{ parrafoText }}
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
        titulo: "Sistemas de gestión",
        theme: "light",
        parrafos: [
          {
            titulo: "Tu negocio, en la palma de tu mano.",
            parrafos: [
              "Manejá tu negocio desde donde estés, con cualquier dispositivo (desktop o mobile).",
            ],
            foto: "1",
          },
          {
            titulo: "Sistemas creados para tu negocio",
            parrafos: [
              "¿Tu sistema actual no acompaña el crecimiento de tu empresa?",
              "Lo reemplazamos o complementamos en función de tus necesidades.",
            ],

            foto: "3",
          },
          {
            titulo: "Inversiones que rinden",
            parrafos: [
              "Desarrollamos sistemas de gestión que te permitan automatizar procesos, evitar errores y ahorrar tiempo y recursos.",
              "Poné a tu equipo a trabajar en lo que verdaderamente importa.",
            ],
            foto: "5",
          },
          {
            titulo: "Sistemas integrales y modulares",
            parrafos: [
              "Stock, pedidos, personal, ventas...",
              "Podés empezar por uno, y vas a terminar manejando todo tu negocio en un mismo sistema.",
            ],
            foto: "7",
          },
          {
            titulo: "Descubrí lo que tus datos tienen para contarte",
            parrafos: [
              "Nuestros tableros interactivos te permiten aprovechar la información de tu empresa.",
              "Medí, analizá, anticipá y tomá las decisiones más redituables.",
            ],

            foto: "16",
          },
        ],
      },
      {
        id: "web",
        titulo: "Páginas web",
        theme: "light",
        parrafos: [
          {
            titulo: "No hay segunda oportunidad para una primera impresión",
            parrafos: [
              "Tu sitio web es tu carta de presentación.",
              "Atraé a los usuarios contándoles qué tenés para ofrecerles.",
            ],
            foto: "9",
          },
          {
            titulo: "Diseño UX",
            parrafos: [
              "Diseños pensados en la facilidad de navegación, tanto en desktop como en mobile.",
              "Si algo no es fácil de encontrar, está mal diseñado.",
            ],
            foto: "12",
          },
          {
            titulo: "Autoadministrables (si querés, y si no, no)",
            parrafos: [
              "Sitios web llave en mano: una vez que está listo, modificás el contenido cuando vos quieras, de manera sencilla.",
              "Y si preferís, lo hacemos nosotros.",
            ],
            foto: "14",
          },
        ],
      },
      {
        id: "comunicacion",
        titulo: "Contenido digital",
        theme: "light",
        parrafos: [
          {
            titulo: "Sé referente de tu comunidad",
            parrafos: [
              "Pensá más allá de tus productos: acompañá a tus clientes antes, durante y después de cada compra.",
              "Te ayudamos a crear y curar contenido de calidad, que ofrece valor y fideliza a tus usuarios.",
            ],
            foto: "13",
          },
          {
            titulo: "Acompañá a los usuarios mientras recorren tu sitio web ",
            parrafos: [
              "Anticipar sus dudas y las respuestas que necesitan es una gran estrategia para lograr más ventas.",
              "Repensamos los textos de tu web hasta que queden perfectos.",
            ],
            foto: "18",
          },
          {
            titulo: "La personalidad de tu empresa, en todos los canales",
            parrafos: [
              "Redes sociales, newsletters, mailing, formularios...",
              "Que se note en todos lados quiénes son ustedes.",
            ],
            foto: "20",
          },
          {
            titulo: "Publicitate en la web",
            parrafos: [
              "Diseñamos estrategias focalizadas en los usuarios a los que te interesa llegar.",
              "Creamos anuncios digitales para que te encuentren quienes realmente te necesitan.",
            ],
            foto: "19",
          },
        ],
      },
    ];

    const getFoto = (parrafo) => {
      return require("../assets/secciones/" + parrafo.foto + ".jpeg");
    };

    const formatParrafo = (texto) => {
      const regex = /(\.)\s/g;
      return texto.replace(regex, ".\n");
    };
    return {
      secciones,
      currentParrafo,
      getIndexSeccion,
      currentSeccion,
      getFoto,
      formatParrafo,
    };
  },
};
</script>

