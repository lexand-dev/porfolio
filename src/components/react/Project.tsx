import {} from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-full bg-neutral-900 p-6 rounded-2xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 h-[900px]">
          {/* Large PRISM card with 3D crystal - spans 2 columns, 3 rows */}
          <div className="lg:col-span-2 lg:row-span-3 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-6xl font-black leading-none mb-4">
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent">
                  PARALLEL
                </div>
                <div className="text-sky-300 opacity-20 -mt-2">PARALLEL</div>
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent -mt-2">
                  PARALLEL
                </div>
                <div className="text-sky-300 opacity-20 -mt-2">PARALLEL</div>
                <div className="bg-gradient-to-r from-blue-200 via-yellow-200 to-cyan-400 bg-clip-text text-transparent -mt-2">
                  PARALLEL
                </div>
              </div>
              <p className="text-lg text-neutral-300 mb-4">
                The bustling capital of Japan, known for its blend of
                traditional and modern culture. The bustling capital of Japan,
                known for its blend of traditional and modern culture. The
                bustling capital of Japan, known for its blend of traditional
                and modern culture.
              </p>
              <p className="text-lg text-neutral-300 mb-4">
                The bustling capital of Japan, known for its blend of
                traditional and modern culture.
              </p>
              <p>
                The bustling capital of Japan, known for its blend of
                traditional and modern culture. The bustling capital of Japan,
                known for its blend of traditional and modern culture.
              </p>
            </div>
            <div className="flex items-center justify-center h-36 w-full">
              <div className=" space-x-8">
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-400 transition-colors"
                >
                  Website
                </a>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Portrait with headphones - spans 2 columns, 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 p-4">
              <img
                src="/parallel.png"
                alt=""
                className="bg-center rounded-tr-lg rounded-tl-lg "
              />
              <img
                src="/pro-parallel.png"
                alt=""
                className="bg-center rounded-br-lg rounded-bl-lg"
              />
            </div>
          </div>

          {/* PRISM logo card - smaller, 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold mb-4">Tools</h2>
          </div>

          {/* Space Grotesk card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl font-bold mb-4">Stack</h2>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-1"></div>
              <div className="w-6 h-6 bg-cyan-400 rounded-full -ml-1"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full -ml-1"></div>
            </div>
          </div>

          {/* Music player card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6">
            <h2 className="text-white text-3xl font-bold mb-4">Player</h2>
          </div>

          {/* 25M card - 2 columns, 1 row */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex items-center">
            <h2 className="text-white text-3xl font-bold mb-4">Other</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
