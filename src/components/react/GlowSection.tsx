import { Glow, GlowCapture } from "@codaworks/react-glow";

const GlowSection = () => {
  return (
    <GlowCapture className="flex justify-start py-16 w-full">
      <Glow color="purple">
        <article
          className="
          md:max-w-[480px]
          flex 
          justify-center 
          flex-col 
          rounded-xl
          md:px-10
          md:py-12
          text-left 
          dark:border-neutral-800
          border-slate-200 border
          border-white/30
          glow:text-glow/50 
          glow:bg-green-500/20
          glow:border-green-500/40
          glow:border-2
          transition-colors"
        >
          <h3 className="text-xl py-2">Modern Web Stack</h3>
          <div className="text-base">
            <p className="pb-1">
              Experienced in functional and OOP languages, I mainly prefer to
              use ES6 and ReactJS on my frontend projects.{" "}
            </p>
            <p>
              Despite being involved in Bootstrap and Material UI projects in
              the past, my current preference has been towards TailwindCSS in
              projects.
            </p>
          </div>
        </article>
      </Glow>
    </GlowCapture>
  );
};

export default GlowSection;
