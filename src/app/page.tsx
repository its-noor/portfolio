"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "inquiry", label: "Inquiry" },
];

const socialLinks = [
  { href: "https://github.com/its-noor", label: "GitHub" },
  { href: "https://www.linkedin.com/in/noor-cs/", label: "LinkedIn" },
];

export default function HomePage() {
  const contentRef = useRef<HTMLElement | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="flex-1 flex flex-col lg:flex-row gap-20 lg:gap-48">
      {/* Left column: intro + nav */}
      <aside className="lg:sticky lg:top-16 lg:max-h-[calc(100vh-8rem)] lg:w-1/3 flex flex-col gap-8">
        <header className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50">
            Abdulaziz Noor
          </h1>
          <p className="text-base sm:text-lg font-semibold text-indigo-300">
            Technical Analyst
          </p>
          <p className="text-base text-zinc-300">
            &ldquo;Never trust a computer you can&apos;t throw out a window.&rdquo; — Steve Wozniak
          </p>
        </header>

        <nav className="hidden lg:block">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-left w-full text-zinc-400 hover:text-indigo-200 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto space-y-3">
          <ul className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-zinc-400 hover:text-indigo-200 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-zinc-500">
            Loosely designed in Figma and coded in VS Code. Built with Next.js
            & Tailwind CSS, deployed on Vercel.
          </p>
        </div>
      </aside>

      {/* Right column: scrollable sections */}
      <section className="flex-1 space-y-24 overflow-visible" id="content">
        {/* About */}
        <section id="about" className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            About
          </h2>
          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
            I’m a Computer Science student with an interest in building simple, useful software and learning how technology works behind the scenes. I enjoy creating projects that help me improve my problem-solving skills and better understand how systems and applications are built.
            </p>
            <p>
            Currently, I’m focused on developing my skills in programming, web development, and software design through coursework and personal projects. I enjoy the process of turning ideas into working programs and continuously learning new tools and technologies along the way.
            </p>
            <p>
            Through my studies and projects, I’ve worked with different programming languages and technologies while practicing how to write clear, maintainable code. Each project has helped me understand more about how software is designed and how developers work together to build reliable systems.
            </p>
            <p>
              If im not working on a project, you can find me playing soccer, watching movies, or enjoying a good meal.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            Experience
          </h2>
          <div className="space-y-6">
            <article className="space-y-2">
              <p className="text-xs text-zinc-400">2023 — Present</p>
              <h3 className="text-base font-semibold text-zinc-100">
                IT Support · UNF
              </h3>
              <p className="text-sm text-zinc-300">
              Provided technical support by troubleshooting hardware, software, and network issues. Assisted users with system setup, maintenance, and resolving everyday technical problems.
              </p>
              <ul className="pt-1 flex flex-wrap gap-2 text-xs text-zinc-300">
                <li className="rounded-full bg-zinc-800 px-3 py-1">Hardware</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  ServiceNow
                </li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  Software
                </li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  Network
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            <a
              href="https://its-noor.github.io/network-graph/Q2/Q2.html"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-none border border-zinc-800 bg-zinc-900/40 p-6 hover:border-indigo-300/60 hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-28 sm:w-32 aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-950/40 flex-none">
                  <Image
                    src="/projects/network-graph.png"
                    alt="Network Graph preview"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-200">
                    Network Graph
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Interactive network visualization of board game relationships
                    using D3.js Force Simulation.
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  HTML
                </li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  CSS
                </li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  JavaScript
                </li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">
                  D3.js
                </li>
              </ul>
            </a>

            <a
              href="https://its-noor.github.io/Wildlife_Tracking/"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-none border border-zinc-800 bg-zinc-900/40 p-6 hover:border-indigo-300/60 hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-28 sm:w-32 aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-950/40 flex-none">
                  <Image
                    src="/projects/wildlife-tracking.png"
                    alt="Wildlife Trafficking Tracking preview"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-200">
                    Wildlife Trafficking Tracking
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Interactive choropleth map visualization showing wildlife
                    trafficking incidents around the world by year.
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <li className="rounded-full bg-zinc-800 px-3 py-1">HTML</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">CSS</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">JavaScript</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">D3.js</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">TopoJSON</li>
              </ul>
            </a>

            <a
              href="https://its-noor.github.io/Rated_Games/Q4/Q4.html"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-none border border-zinc-800 bg-zinc-900/40 p-6 hover:border-indigo-300/60 hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-28 sm:w-32 aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-950/40 flex-none">
                  <Image
                    src="/projects/rated-games.png"
                    alt="Rated Games preview"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-200">
                    Rated Games (2015–2019)
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Interactive visualization showing board game rating
                    distributions and the most popular games for each rating.
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <li className="rounded-full bg-zinc-800 px-3 py-1">HTML</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">CSS</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">JavaScript</li>
                <li className="rounded-full bg-zinc-800 px-3 py-1">D3.js</li>
              </ul>
            </a>
          </div>
        </section>

        {/* Inquiry */}
        <section id="inquiry" className="space-y-6">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            Inquiry
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!formspreeEndpoint) {
                setSubmitState("error");
                return;
              }

              try {
                setSubmitState("submitting");
                const fd = new FormData();
                fd.set("email", email);
                fd.set("name", fullName);
                fd.set("message", message);

                const res = await fetch(formspreeEndpoint, {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: fd,
                });

                if (!res.ok) {
                  setSubmitState("error");
                  return;
                }

                setFullName("");
                setEmail("");
                setMessage("");
                setSubmitState("success");
              } catch {
                setSubmitState("error");
              }
            }}
            className="rounded-none border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="inquiry-email"
                  className="text-xs font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-none border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-300/60"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="inquiry-name"
                  className="text-xs font-medium text-zinc-300"
                >
                  Full name
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-none border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-300/60"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label
                htmlFor="inquiry-message"
                className="text-xs font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-40 w-full resize-y rounded-none border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-300/60"
                placeholder="How can I help you?"
              />
            </div>

            <div className="mt-6 flex justify-end">
              {submitState === "success" ? (
                <p className="mr-auto text-sm text-indigo-200">
                  Sent — thanks! I&apos;ll get back to you soon.
                </p>
              ) : null}
              {submitState === "error" ? (
                <p className="mr-auto text-sm text-rose-300">
                  Couldn&apos;t send. Add your Formspree endpoint (or try again).
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="rounded-none border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-indigo-300/60 hover:text-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState === "submitting" ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
