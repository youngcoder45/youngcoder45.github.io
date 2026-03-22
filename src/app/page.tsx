"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "whoami → aditya";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-300 px-6 py-12">
      {/* Terminal Intro */}
      <section className="max-w-3xl mx-auto font-mono">
        <p className="text-green-400">$ {text}</p>
        <h1 className="text-4xl font-bold text-white mt-4">Aditya Verma</h1>
        <p className="text-gray-400 mt-2">Arch Linux • Rust • AI • Fullstack</p>
      </section>

      {/* Links */}
      <section className="max-w-3xl mx-auto mt-6 flex gap-4">
        <a
          href="https://github.com/youngcoder45"
          className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub
        </a>

        <a
          href="https://youngcoder45.netlify.app/"
          className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-800"
        >
          Portfolio
        </a>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-xl text-white mb-4">Projects</h2>

        <div className="grid gap-4">
          <Project
            name="Niri Utils"
            desc="Wayland-native idle & lock system (Rust)"
            link="https://github.com/youngcoder45"
          />

          <Project
            name="Dotfiles"
            desc="Minimal Arch + Niri aesthetic setup"
            link="https://github.com/youngcoder45"
          />
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-xl text-white mb-4">GitHub</h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=youngcoder45&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117"
          className="mx-auto"
        />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-20 text-sm">
        built with next.js • deployed on vercel
      </footer>
    </main>
  );
}

function Project({ name, desc, link }: any) {
  return (
    <a
      href={link}
      className="block border border-gray-800 p-4 rounded-lg hover:bg-gray-900 transition"
    >
      <h3 className="text-white">{name}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </a>
  );
}
