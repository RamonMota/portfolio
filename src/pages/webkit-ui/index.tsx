import { ScrollTopContent } from "../../components/atoms/scroll-top-content";
import { Footer } from "../../components/organisms/footer";
import { ProjectNavigation } from "../../components/organisms/project-navigation";
import { PipelineUi } from "../../components/templates/webkit-ui/pipeline-ui";
import dashboardPreview from "./img/dashboard.webp";
import storybook_v1 from "./img/storybook_v1.webp";
import terminal from "./img/terminal.png";
import screen from "./img/screen.png";

const metrics = [
  {
    value: "50+",
    title: "Componentes documentados",
    description: "Componentes documentados e versionados para uso em produtos React e Next.js",

  },
  {
    value: "3+",
    title: "Projetos consumindo a lib",
    description: "Repositorios configurados via automação IA para consumir os componentes do WebKit UI",
  },
  {
    value: "100%",
    title: "Pipeline de build e publicacao",
    description: "Automação de testes unitários para garantir qualidade e consistência na publicação de pacotes",
  },
];

const componentGroups = [
  "Buttons",
  "Forms",
  "Tables",
  "Navigation",
  "Feedback",
  "Overlays",
  "Charts",
  "Layout",
];

const practices = [
  "Arquitetura escalavel para Next.js e React",
  "Testes unitarios e validacao automatizada em CI",
  "Versionamento dos pacotes com releases rastreaveis",
  "Code review orientado por acessibilidade e reuso",
];

export const WebkitUi = () => {
  return (
    <div className="m-auto max-w-[1440px]">
      <div className="relative m-auto flex h-[100dvh] w-full max-w-[1440px] items-center justify-center p-4 transition-none">
        <ScrollTopContent className="absolute inset-4 m-auto flex h-auto flex-col-reverse items-start justify-center overflow-hidden rounded-lg bg-[var(--color-gray)] p-4 transition-none min-[960px]:inset-12 min-[960px]:flex-row min-[960px]:items-center min-[960px]:gap-[5vw]">
          <div className="z-[2] flex w-full flex-col justify-center gap-lg pb-4 transition-none min-[960px]:max-w-[calc(50%_-_3rem_-_5vw)] min-[960px]:flex-1 min-[960px]:pb-0">
            <h1 className="whitespace-nowrap text-[min(4.5vmax,60px)] font-extrabold leading-[min(4.7vmax,70px)] text-white max-[520px]:text-[13vw] max-[520px]:leading-[13vw]">
              WebKit UI
            </h1>
            <h2 className="text-[2.6vh] font-extralight leading-[3.4vh] text-white/50 opacity-70 min-[960px]:text-[3.2vh] min-[960px]:leading-[4vh]">
              Design System baseado em componentes individuais no estilo
              shadcn, baixados via terminal para acelerar produtos, padronizar
              interfaces e conectar design e codigo.
            </h2>
          </div>
          <div className="flex h-full w-full items-center md:justify-start justify-center min-[960px]:max-w-[calc(50%_-_3rem_-_5vw)] min-[960px]:flex-1">
            <img
              src={storybook_v1}
              alt="Dashboard construido com componentes do WebKit UI"
              className="h-auto md:w-[60vw] w-full object-cover m-auto rounded-md"
            />
          </div>
        </ScrollTopContent>
      </div>

      <main className="flex flex-col gap-10 px-4 pb-24 pt-4">
        <section className="m-auto flex flex-col items-center gap-sm py-5xl">
          <div className="flex flex-col gap-2 m-auto max-w-[1000px]">
            <h2 className="text-center text-[22px] font-thin text-white min-[600px]:text-[35px]">
              Lideranca tecnica na criacao, documentacao e evolucao de Design System adotado por squads diferentes, com foco em consistencia, qualidade e velocidade de entrega.
            </h2>
            <p className="text-center text-md font-thin text-white">
              entregando performance no desenvolvimento, consistencia e padronização
            </p>
          </div>
          <div className="grid grid-cols-1 gap-md min-[760px]:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.title}
                className="flex flex-col items-center gap-2.5 p-2xl"
              >
                <strong className="text-[70px] font-semibold leading-none text-[var(--color-principal)]">
                  {metric.value}
                </strong>
                <span className="text-lg text-center leading-8 font-semibold text-white opacity-70">
                  {metric.title}
                </span>
                <span className="text-sm text-center font-light text-white opacity-50">
                  {metric.description}
                </span>
              </article>
            ))}
          </div>

        </section>

        <section className="grid grid-cols-1 gap-md min-[960px]:grid-cols-2 min-[960px]:grid-rows-2">
          <article className="flex min-h-[360px] flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl min-[960px]:row-span-2">
            <img
              src={terminal}
              alt="Terminal instalando componente do WebKit UI"
              className="w-full"
            />
            <h3 className="mt-3 text-3xl font-bold leading-[1.08] text-white">
              Consumo individual de Componentes
            </h3>
            <p className="mt-4 text-md font-light text-white opacity-70">
              Cada squad instala apenas o componente que precisa, versiona o codigo no proprio projeto e evita carregar uma
              biblioteca inteira. Menos dependencias, bundle menor e mais performance para o usuario.
            </p>
          </article>

          <article className="flex min-h-[360px] flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl">
            <PipelineUi />
            <h3 className="text-3xl font-bold leading-[1.08] text-white">
              Governanca entre design e codigo
            </h3>
            <p className="text-md font-light text-white opacity-70">
              Pipeline de Design Tokens integrado ao Supernova, aos repositorios
              de tokens e ao WebKit UI para sincronizar decisoes de design com
              os produtos consumidores.
            </p>
          </article>

          <article className="flex min-h-[360px] flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl">
            <p className="text-sm font-bold uppercase text-[var(--color-principal-light)]">
              Qualidade
            </p>
            <h3 className="text-3xl font-bold leading-[1.08] text-white">
              CI/CD para validar, buildar e publicar pacotes
            </h3>
          </article>
        </section>
        <section className="flex flex-col gap-5xl pt-5xl">
          <div className="flex flex-col gap-2 m-auto max-w-200">
            <h3 className="text-center text-[35px] font-semibold text-white">
              Explore More Work
            </h3>
            <p className="text-center text-md font-light not-italic text-white opacity-70">
              Each project has its own context, constraints, and decisions. Take a look at other interfaces, systems, and product experiences I helped bring to life.
            </p>
          </div>
          <img
            src={screen}
            alt="Tela mostrando o WebKit UI em ação"
            className="w-full rounded-xl"
          />
        </section>
        <ProjectNavigation />
        <Footer />
      </main>
    </div>
  );
};
