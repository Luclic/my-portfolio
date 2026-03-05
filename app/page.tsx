"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { projects } from "@/data/project";


const SocialBox = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Luclic", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:lucaslicogrec@gmail.com", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
           <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Changed to 'fixed' and 'z-[100]' so it sits permanently on top of everything
      className="fixed top-8 left-8 z-[100] flex gap-5 px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
    >
      {socialLinks.map((link, index) => (
        <a 
          key={link.name} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          // Made text-white/70 so the icons are brighter and easier to see
          className="text-white/70 hover:text-blue-500 hover:scale-110 transition-all duration-300 group relative"
        >
          {link.icon}
          {/* Tooltip that appears on hover */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 tracking-widest uppercase pointer-events-none">
            {link.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

const CoordinateLine = ({ text, hoverColor = "#3b82f6" }: { text: string, hoverColor?: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300 } 
    },
  };

  return (
    <motion.div
      className="flex justify-end"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.5, 
            color: hoverColor, // Dynamically set color
            margin: "0 2px" 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-block cursor-default font-black text-[14px] text-white tracking-[0.2em]"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#020202] text-[#e0e0e0] font-mono relative selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- FIXED BACKGROUND HUD --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} viewBox="0 0 200 200" className="w-[900px] h-[900px]">
            <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="0.05" fill="none" strokeDasharray="1 10" />
            <motion.path d="M 40 100 A 60 60 0 0 1 160 100" fill="none" stroke="#3b82f6" strokeWidth="0.7" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.25 }} transition={{ duration: 3, ease: "easeInOut" }} />
          </motion.svg>
        </div>
      </div>

      <div className="fixed top-[40%] right-[-20%] flex items-center justify-center opacity-20 pointer-events-none z-0">
        <motion.svg animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} viewBox="0 0 200 200" className="w-[500px] h-[500px]">
          <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="1 10" />
          <motion.path d="M 40 100 A 60 60 0 0 1 160 100" fill="none" stroke="#ec2424" strokeWidth="0.3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.25 }} transition={{ duration: 3, ease: "easeInOut" }} />
        </motion.svg>
      </div>

      {/* ========================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================= */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-between p-12 z-10">
        
        {/* Render the new SocialBox here */}
        <SocialBox />

        <header className="flex justify-end items-start">
          <div className="text-right font-mono text-[7px] opacity-30 leading-relaxed uppercase tracking-widest">
            [KERNEL_LOG_INIT] <br/>
            {">"} Checking Logic Gates... OK <br/>
            {">"} Compiling Sub-Systems... OK <br/>
            {">"} Established Secure Node: Thessaloniki
          </div>
        </header>

        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <div className="flex items-center gap-6">
            <div className="w-12 h-[0.5px] bg-blue-500/50" />
            <h1 className="text-6xl md:text-7xl font-black tracking-[-0.05em] text-white italic uppercase flex items-center">
              PROJECTS
              <span className="text-blue-600 mx-3">_</span>
              ARCHIVE
              <span className="text-blue-600 block w-2 h-10 bg-blue-600 ml-4 animate-pulse" />
            </h1>
            <div className="w-12 h-[0.5px] bg-blue-500/50" />
          </div>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[1em] opacity-30 italic">
            Electrical & Computer Engineering
          </p>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-15/16 left-1/2 -translate-x-1/2 text-[10px] text-white/30 tracking-[0.3em] uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll_Down</span>
          <span className="text-blue-500">↓</span>
        </motion.div>

        <footer className="flex justify-between items-end">
          <div className="space-y-4">
            <button onClick={() => window.location.reload()} className="group flex items-center gap-3 text-[8px] opacity-20 hover:opacity-100 transition-opacity uppercase tracking-[0.4em]">
              <span className="text-blue-500">↻</span> REBOOT_SYSTEM
            </button>
            <div className="flex gap-2">
              {[1,2,3].map(i => <div key={i} className="w-4 h-1 bg-white/5 rounded-full" />)}
            </div>
          </div>

          <div className="text-right">
            <div className="flex flex-col items-end">
              <CoordinateLine text="40.6401° N" hoverColor="#3b82f6" />
              <CoordinateLine text="22.9444° E" hoverColor="#ef4444" />
            </div>
            <div className="h-[2px] w-40 bg-white/10 mt-4 relative overflow-hidden">
                <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/50" />
            </div>
          </div>
        </footer>
      </section>

      {/* ========================================= */}
      {/* SECTION 2: PROJECTS TABLE GRID */}
      {/* ========================================= */}
      <section className="relative min-h-screen w-full py-24 px-12 z-10 flex flex-col items-center bg-[#020202]">
        <div className="w-full max-w-[90rem] mx-auto">
          
          <div className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end">
            <h2 className="text-xl text-white font-bold tracking-[0.2em] uppercase">
              <span className="text-blue-500 mr-2">//</span> Deployed_Nodes
            </h2>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">Grid_Layout: 4x4 Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href={`#project-${project.id}`} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="group flex flex-col border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm hover:bg-white/5 hover:border-blue-500/50 transition-all overflow-hidden cursor-pointer"
              >
                <div className="w-full aspect-video bg-white/5 relative border-b border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[9px] text-white/10 uppercase tracking-[0.3em] font-mono group-hover:scale-105 transition-transform duration-500">
                    [ IMG_NULL ]
                  </div>
                  <div className="absolute top-0 left-0 px-3 py-1.5 bg-blue-500/10 backdrop-blur-md border-b border-r border-white/10 text-blue-500 font-mono text-[8px] tracking-[0.2em] z-10">
                    ID_0{project.id}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-[13px] font-bold uppercase tracking-widest truncate group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-white/20 group-hover:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-[12px]">
                      ↗
                    </span>
                  </div>

                  <p className="text-[10px] text-white/40 leading-relaxed font-sans line-clamp-2 mt-1">
                    {project.description || "Awaiting detailed system parameters and log files..."}
                  </p>

                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.tech ? project.tech.slice(0, 3).map((t: string) => (
                      <span key={t} className="text-[7px] px-2 py-1 bg-white/5 text-white/50 uppercase tracking-widest border border-white/10">
                        {t}
                      </span>
                    )) : null}
                  </div>
                </div>

                <div className="absolute left-0 w-full h-[1px] bg-blue-500/40 z-0 top-0 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_linear_infinite]" />
              </motion.a>
            ))}
          </div>
          
        </div>
      </section>

    </main>
  );
}