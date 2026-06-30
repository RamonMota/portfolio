import { useEffect, useRef } from "react";
import { ScrollTopContent } from "../../components/atoms/scroll-top-content";
import { Footer } from "../../components/organisms/footer";
import { ProjectNavigation } from "../../components/organisms/project-navigation";
import interface_fixed from "./img/interface_fixed.png";
import interface_scale from "./img/interface_scale.png";
import storybook_v1 from "./img/storybook_v1.webp";
import terminal from "./img/terminal.png";
import { PipelineUi } from "../../components/templates/webkit-ui/pipeline-ui";
import { ArchitectureSvg } from "../../components/templates/webkit-ui/architecture-svg";
import pt from "../../config/locales/pt.json";
import en from "../../config/locales/en.json";
import { useLanguageContext } from "../../context/LanguageContext";

export const WebkitUi = () => {
  const { language } = useLanguageContext();
  const languegeRender = language === "en" ? en : pt;
  const content = languegeRender.webkitUi;
  const interfaceContainerRef = useRef<HTMLDivElement>(null);
  const interfaceScaleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = interfaceContainerRef.current;
    const scaleImage = interfaceScaleRef.current;

    if (!container || !scaleImage) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      scaleImage.style.transform = "translateY(0) scale(1)";
      scaleImage.style.filter = "blur(0)";
      scaleImage.style.opacity = "1";
      return;
    }

    let isVisible = false;
    let animationFrameId = 0;

    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const updateScale = () => {
      animationFrameId = 0;

      if (!isVisible) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = clamp((viewportHeight - rect.top) / (viewportHeight * 0.75));
      const scale = 1.5 - progress * 0.5;
      const translateY = (1 - progress) * -100;
      const blur = (1 - progress) * 8;
      const opacity = 0.45 + progress * 0.55;

      scaleImage.style.transform = `translateY(${translateY}px) scale(${scale})`;
      scaleImage.style.filter = `blur(${blur}px)`;
      scaleImage.style.opacity = `${opacity}`;
    };

    const requestScaleUpdate = () => {
      if (!isVisible || animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateScale);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          requestScaleUpdate();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(container);
    window.addEventListener("scroll", requestScaleUpdate, { passive: true });
    window.addEventListener("resize", requestScaleUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestScaleUpdate);
      window.removeEventListener("resize", requestScaleUpdate);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="m-auto max-w-[1440px]">
      <div className="relative m-auto flex h-[100dvh] w-full max-w-[1440px] items-center justify-center p-4 transition-none">
        <ScrollTopContent className="absolute inset-4 m-auto flex h-auto flex-col-reverse items-start justify-center overflow-hidden rounded-lg bg-[var(--color-gray)] p-4 transition-none min-[960px]:inset-12 min-[960px]:flex-row min-[960px]:items-center min-[960px]:gap-[5vw]">
          <div className="z-[2] flex w-full flex-col justify-center gap-lg pb-4 transition-none min-[960px]:max-w-[calc(50%_-_3rem_-_5vw)] min-[960px]:flex-1 min-[960px]:pb-0">
            <h1 className="whitespace-nowrap text-[min(4.5vmax,60px)] font-extrabold leading-[min(4.7vmax,70px)] text-white max-[520px]:text-[13vw] max-[520px]:leading-[13vw]">
              {content.title}
            </h1>
            <h2 className="text-[2.6vh] font-extralight leading-[3.4vh] text-white/50 opacity-70 min-[960px]:text-[3.2vh] min-[960px]:leading-[4vh]">
              {content.subtitle}
            </h2>
          </div>
          <div className="flex h-full w-full items-center md:justify-start justify-center min-[960px]:max-w-[calc(50%_-_3rem_-_5vw)] min-[960px]:flex-1">
            <img
              src={storybook_v1}
              alt={content.heroImageAlt}
              className="h-auto md:w-[60vw] w-full object-cover m-auto rounded-md"
            />
          </div>
        </ScrollTopContent>
      </div>

      <main className="flex flex-col gap-10 px-4 pb-24 pt-4">
        <section className="m-auto flex flex-col items-center gap-sm py-5xl">
          <div className="flex flex-col gap-2 m-auto max-w-[1000px]">
            <h2 className="text-center text-[22px] font-thin text-white min-[600px]:text-[35px]">
              {content.introTitle}
            </h2>
            <p className="text-center text-md font-thin text-white">
              {content.introSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-md min-[760px]:grid-cols-3">
            {content.metrics.map((metric) => (
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
        <section className="flex flex-col gap-5xl pt-5xl">
          <div className="flex flex-col gap-2 m-auto max-w-200">
            <h3 className="text-center text-[35px] font-semibold text-white">
              {content.modularInterfacesTitle}
            </h3>
            <p className="text-center text-md font-light not-italic text-white opacity-70">
              {content.modularInterfacesDescription}
            </p>
          </div>
          <div ref={interfaceContainerRef} className="relative">
            <img
              src={interface_fixed}
              alt={content.interfaceImageAlt}
              className="w-full rounded-xl"
            />
            <img
              ref={interfaceScaleRef}
              src={interface_scale}
              alt={content.interfaceImageAlt}
              className="absolute top-0 left-0 right-0 w-full origin-top transition-none will-change-transform"
              style={{ filter: "blur(20px)", opacity: 0.45, transform: "translateY(-100px) scale(1.5)", transition: "none" }}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-md min-[960px]:grid-cols-2 min-[960px]:grid-rows-2">
          <article className="flex flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl min-[960px]:row-span-2">
            <img
              src={terminal}
              alt={content.terminalImageAlt}
              className="w-full"
            />
            <h3 className="mt-3 text-3xl font-bold leading-[1.08] text-white">
              {content.componentConsumptionTitle}
            </h3>
            <p className="mt-4 text-md font-light text-white opacity-70">
              {content.componentConsumptionDescription}
            </p>
          </article>

          <article className="flex flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl">
            <ArchitectureSvg />
            <h3 className="text-3xl font-bold leading-[1.08] text-white">
              {content.architectureTitle}
            </h3>
            <p className="text-md font-light text-white opacity-70">
              {content.architectureDescription}
            </p>
          </article>

          <article className="flex flex-col gap-lg overflow-hidden rounded-md border bg-(--color-gray) p-2xl min-[960px]:flex-row min-[960px]:items-center">
            <div className="flex flex-col gap-sm min-[960px]:w-1/2">
              <h3 className="text-3xl font-bold leading-[1.08] text-white">
                {content.cicdTitle}
              </h3>
              <p className="text-md font-light text-white opacity-70">
                {content.cicdDescription}
              </p>
            </div>
            <div className="min-[960px]:w-1/2">
              <PipelineUi />
            </div>
          </article>
        </section>
        <section className="flex flex-col gap-2 m-auto max-w-200 py-5xl">
          <h3 className="text-center text-[35px] font-semibold text-white">
            {content.documentationTitle}
          </h3>
          <p className="text-center text-md font-light not-italic text-white opacity-70">
            {content.documentationDescription}
          </p>
        </section>
        <ProjectNavigation />
        <Footer />
      </main>
    </div>
  );
};
