import { Glow, GlowCapture } from "@codaworks/react-glow";

interface GlowSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const GlowSection: React.FC<GlowSectionProps> = ({
  title,
  description,
  children
}) => {
  return (
    <GlowCapture className="flex justify-center  w-full">
      <Glow color="green">
        <article
          className="
          max-w-7xl
          h-full
          gap-x-8
          rounded-3xl
          transition-colors
          "
        >
          <div className="flex-col md:flex-row items-center relative dark:bg-neutral-900 bg-neutral-50 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-emerald-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.neutral.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden  flex h-full">
            <div className="text-base p-16 md:p-6 md:flex md:flex-col text-left justify-center">
              <h3 className="text-xl">{title}</h3>
              <p className="m-0">{description}</p>
            </div>
            <img
              src="/projects/project-2.webp"
              alt=""
              className="size-96 md:size-56 rounded-lg object-cover shadow-lg m-8"
            />
          </div>
        </article>
      </Glow>
    </GlowCapture>
  );
};

export default GlowSection;
