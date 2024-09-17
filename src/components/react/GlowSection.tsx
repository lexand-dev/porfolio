import { Glow, GlowCapture } from "@codaworks/react-glow";

interface GlowSectionProps {
  title: string;
  description: string;
}

const GlowSection: React.FC<GlowSectionProps> = ({ title, description }) => {
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
          border-slate-2 border
          glow:text-glow/50 
          glow:bg-green-500/20
          glow:border-green-500/40
          glow:border-2
          
          transition-colors"
        >
          <h3 className="text-xl py-2">{title}</h3>
          <div className="text-base">
            <p className="pb-1">{description}</p>
          </div>
        </article>
      </Glow>
    </GlowCapture>
  );
};

export default GlowSection;
