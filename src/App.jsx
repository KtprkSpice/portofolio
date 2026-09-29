import React from "react";

import { BoxIcon, FolderMinus } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import {
  profileData,
  projectsData,
  skillsData,
  certificatesData,
} from "./data/portofolioData";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0e17] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24">
        {/* 1. HERO / ABOUT SECTION */}
        <Hero profileData={profileData} />

        {/* 2. FEATURED PROJECTS */}
        <Projects projectsData={projectsData} />

        {/* 3. TECHNICAL SKILLS */}
        <Skills skillsData={skillsData} />

        {/* 4. CERTIFICATES & CREDENTIALS */}
        <Certificates certificatesData={certificatesData} />
        {/* 5. CONTACT / CTA BANNER */}
        <Contacts profileData={profileData} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
