import {} from "lucide-react";
import { Icons } from "@/components/icons/icons";
import Link from "../icons/tech/Link.astro";

interface ProjectProps {
  project: {
    id: string;
    name: string;
    description: string;
    cover: string;
    stack: string[];
    github?: string;
    website?: string;
  };
}

export default function Component({ project }: ProjectProps) {
  const getIconForTool = (toolName: string) => {
    const toolKey = toolName.toLowerCase().replace(/[^a-z0-9]/g, "");
    return Icons[toolKey as keyof typeof Icons];
  };

  return (
    <div className="min-h-full bg-neutral-900 p-6 rounded-2xl">
      <div className="mx-auto max-w-7xl h-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 h-full md:h-[760px] overflow-y-auto">
          {/* Large PRISM card with 3D crystal - spans 2 columns, 3 rows */}
          <div className="lg:col-span-2 lg:row-span-3 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 relative overflow-y-auto">
            <div className="relative z-10">
              <div className="text-2xl md:text-5xl font-black leading-none mb-4 uppercase">
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent">
                  {project.name}
                </div>
                <div className="text-sky-300 opacity-20 -mt-2 hidden md:block">
                  {project.name}
                </div>
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent -mt-2 hidden md:block">
                  {project.name}
                </div>
                <div className="text-sky-300 opacity-20 -mt-2">
                  {project.name}
                </div>
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent -mt-2 hidden md:block">
                  {project.name}
                </div>
              </div>
              <p className="text-lg text-neutral-300">{project.description}</p>
            </div>
          </div>

          {/* Portrait with headphones - spans 2 columns, 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 relative hidden md:block overflow-hidden">
            <div className="absolute inset-0 p-4">
              <img
                src="/parallel.png"
                alt=""
                className="bg-center rounded-tr-lg rounded-tl-lg"
              />
              <img
                src="/pro-parallel.png"
                alt=""
                className="bg-center rounded-br-lg rounded-bl-lg"
              />
            </div>
          </div>

          {/* PRISM logo card - smaller, 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col items-center">
            <h2 className="text-white text-3xl font-bold mb-4">Stack</h2>
            <div className="flex space-x-2 flex-wrap items-center justify-center gap-y-4">
              {project.stack.map((tool, index) => {
                const IconComponent = getIconForTool(tool);
                return (
                  <span
                    key={index}
                    className="text-white px-3 py-1 rounded-full text-sm"
                  >
                    {IconComponent ? (
                      <IconComponent className="inline-block size-8 md:size-12" />
                    ) : (
                      <span className="inline-block mr-1">{tool}</span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Space Grotesk card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex-col items-center justify-center hidden md:flex">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-1"></div>
              <div className="w-6 h-6 bg-cyan-400 rounded-full -ml-1"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full -ml-1"></div>
            </div>
          </div>

          {/* Music player card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 pb-0 rounded-3xl p-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="size-full flex items-center justify-center flex-col"
            >
              <Icons.github className="size-8 md:size-24 text-white" />
              <h2 className="text-white text-sm md:text-3xl font-bold mb-4">
                Github
              </h2>
            </a>
          </div>

          {/* 25M card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 pb-0 flex items-center">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="size-full flex items-center justify-center flex-col"
            >
              <Icons.link className="size-8 md:size-24 text-white" />
              <h2 className="text-white text-sm md:text-3xl font-bold mb-4">
                Live
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
