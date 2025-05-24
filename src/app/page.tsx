"use client";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";

const ExperienceTab = dynamic(() => import("./tabs/experience"), { ssr: false });
const ProjectsTab = dynamic(() => import("./tabs/projects"), { ssr: false });
const SkillsTab = dynamic(() => import("./tabs/skills"), { ssr: false });


export default function Home() {
  const [tab, setTab] = useState<"experience" | "projects" | "skills" | "home">("home");
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 sm:p-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header & Profile */}
      {/* Tabs Navigation */}
      <nav className="w-full max-w-3xl mx-auto flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-t font-semibold transition-colors ${tab === 'home' ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
          onClick={() => setTab('home')}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 rounded-t font-semibold transition-colors ${tab === 'experience' ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
          onClick={() => setTab('experience')}
        >
          Professional Experience
        </button>
        <button
          className={`px-4 py-2 rounded-t font-semibold transition-colors ${tab === 'projects' ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
          onClick={() => setTab('projects')}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded-t font-semibold transition-colors ${tab === 'skills' ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
          onClick={() => setTab('skills')}
        >
          Skills
        </button>
      </nav>

      {/* Tab Content */}
      {tab === 'home' && (
        <header className="w-full max-w-3xl mx-auto flex flex-col items-center py-12">
        {/*
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
          <Image src="/profile.jpg" alt="Keivi Xhecuka profile picture" width={128} height={128} className="object-cover w-full h-full" priority />
        </div>
        */}
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white w-full break-words">Keivi Xhecuka</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mt-2 w-full break-words">
            <a href="mailto:kei_vi@hotmail.co.uk" className="underline">kei_vi@hotmail.co.uk</a> | <a href="tel:+447413161946" className="underline">+44 7413 161946</a> | London, United Kingdom
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mt-4 w-full text-balance text-center">
            I’m a Test Automation Engineer with 3+ years of experience making software more reliable and efficient. I specialize in building and improving automated test systems for web, API, and cloud projects. I enjoy solving problems, working with modern tools, and helping teams deliver high-quality products.
          </p>
        </div>
        </header>
      )}
      {tab === 'experience' && <ExperienceTab />}
      {tab === 'projects' && <ProjectsTab />}
      {tab === 'skills' && <SkillsTab />}

      {/* Contact & Resume */}
      <section className="w-full max-w-3xl mx-auto my-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h2>
        <ContactForm />
        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
          <Link href="/resume.pdf" target="_blank" className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold py-2 px-6 rounded shadow hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
            Download Resume
          </Link>
        </div>

      {/* Floating LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/keivi-xhecuka/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-700 text-white shadow-lg p-4 flex items-center justify-center transition-colors hover:bg-white hover:text-blue-700 border-2 border-transparent hover:border-blue-700 group"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="transition-colors group-hover:invert-0">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
        </svg>
      </a>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Keivi Xhecuka. All rights reserved.
      </footer>
    </div>
  );
}
