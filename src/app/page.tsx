export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-300 flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Aditya Verma</h1>

        <p className="text-lg text-gray-400">
          Arch Linux • Developer • AI Enthusiast
        </p>

        <p className="max-w-xl text-sm text-gray-500">
          I build minimal, performant systems and explore AI, backend, and
          low-level workflows.
        </p>
      </section>

      {/* Links */}
      <section className="mt-8 flex gap-4">
        <a
          href="https://github.com/youngcoder45"
          className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        <a
          href="https://youngcoder45.netlify.app/"
          className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          Portfolio
        </a>
      </section>

      {/* Projects */}
      <section className="mt-16 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 text-white">Projects</h2>

        <div className="space-y-4">
          <Project
            name="Niri Utils"
            desc="Wayland-native idle & lock utilities written in Rust"
            link="https://github.com/youngcoder45/niri-utils"
          />

          <Project
            name="Dotfiles"
            desc="Minimal Arch + Niri setup with aesthetic configs"
            link="https://github.com/youngcoder45/New-Niri-minimal-dots"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-xs text-gray-600">
        Built with Next.js • Deployed on Vercel
      </footer>
    </main>
  );
}

function Project({ name, desc, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      className="block border border-gray-800 p-4 rounded-lg hover:bg-gray-900 transition"
    >
      <h3 className="text-white font-medium">{name}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </a>
  );
}
