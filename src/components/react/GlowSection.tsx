import { Glow, GlowCapture } from "@codaworks/react-glow";

interface GlowSectionProps {
  title: string;
  description: string;
  descriptionTwo?: string;
  children?: React.ReactNode;
}

const GlowSection: React.FC<GlowSectionProps> = ({
  title,
  description,
  descriptionTwo,
  children
}) => {
  return (
    <GlowCapture className="flex justify-center  w-full">
      <Glow color="green">
        <article
          className="
          max-w-7xl
          h-full
          pb-6
          border border-neutral-200 dark:border-neutral-800
          md:pb-0
          gap-x-8
          rounded-3xl
          transition-colors
          "
        >
          <div className="flex-col md:flex-row items-center relative dark:bg-neutral-900 bg-neutral-50 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-emerald-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.neutral.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden  flex h-full">
            <div className="p-4 md:p-6 md:flex md:flex-col md:text-left justify-center text-center gap-y-2 text-black dark:text-white">
              <h3 className="text-md md:text-xl pb-6 md:pb-0">{title}</h3>
              <p className="m-0 text-sm md:text-base">{description}</p>
              {descriptionTwo && (
                <p className="m-0 text-sm md:text-base">{descriptionTwo}</p>
              )}
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
