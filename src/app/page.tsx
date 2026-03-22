"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string;
  html_url: string;
};

export default function Home() {
  const [text, setText] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);

  const fullText = "whoami → aditya";

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // fetch repos
  useEffect(() => {
    fetch("https://api.github.com/users/youngcoder45/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-300 px-6 py-12">
      {/* Intro */}
      <section className="max-w-3xl mx-auto font-mono">
        <p className="text-green-400">$ {text}</p>
        <h1 className="text-4xl font-bold text-white mt-4">Aditya Verma</h1>
        <p className="text-gray-400 mt-2">Arch Linux • Rust • AI • Fullstack</p>
      </section>

      {/* Links */}
      <section className="max-w-3xl mx-auto mt-6 flex gap-4">
        <a
          href="https://github.com/youngcoder45"
          target="_blank"
          className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub
        </a>

        <a
          href="https://aditya-verma.me"
          target="_blank"
          className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-800"
        >
          Main Portfolio
        </a>
      </section>

      {/* Terminal */}
      <section className="max-w-3xl mx-auto mt-10 font-mono bg-black border border-gray-800 rounded-lg p-4 text-sm">
        <p className="text-green-400">$ whoami</p>
        <p>aditya</p>

        <p className="text-green-400 mt-3">$ skills</p>
        <p>python c cpp rust javascript typescript</p>

        <p className="text-green-400 mt-3">$ system</p>
        <p>arch linux + niri + fish + neovim</p>

        <p className="text-green-400 mt-3">$ goal</p>
        <p>AI + systems + high performance software</p>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-xl text-white mb-4">Projects</h2>

        <div className="grid gap-4">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              className="border border-gray-800 p-4 rounded-lg hover:bg-gray-900 transition"
            >
              <h3 className="text-white">{repo.name}</h3>
              <p className="text-gray-400 text-sm">
                {repo.description || "No description"}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-xl text-white mb-4">Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Skill
            title="Languages"
            items="C, C++, Python, Rust, JS, TS, Java, PHP"
          />
          <Skill title="Frontend" items="React, Next.js, HTML, CSS" />
          <Skill title="Backend" items="Node.js, APIs" />
          <Skill title="Databases" items="PostgreSQL, MongoDB, SQLite" />
          <Skill title="ML" items="NumPy, Pandas, sklearn" />
          <Skill title="System" items="Arch, Bash, Fish, Niri, KDE" />
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

      {/* Snake */}
      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-white mb-4">Activity</h2>

        <img
          src="https://raw.githubusercontent.com/youngcoder45/youngcoder45/output/github-contribution-grid-snake.svg"
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

function Skill({ title, items }: any) {
  return (
    <div className="border border-gray-800 p-3 rounded">
      <p className="text-white">{title}</p>
      <p className="text-gray-400 text-xs mt-1">{items}</p>
    </div>
  );
}
