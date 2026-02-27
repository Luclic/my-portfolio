"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/project";

export default function Home() {
  const [view, setView] = useState<"home" | "repo">("home");
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <main className="h-screen w-full bg-[#020202] text-[#e0e0e0] font-mono overflow-hidden relative">
      <AnimatePresence mode="wait">
        
        {/* --- VIEW 1: HOME PAGE --- */}
        {view === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(40px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full relative flex flex-col justify-between p-12"
          >
            {/* BACKGROUND HUD */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  viewBox="0 0 200 200" className="w-[900px] h-[900px]"
                >
                  <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="0.05" fill="none" strokeDasharray="1 10" />
                  <motion.path
                    d="M 40 100 A 60 60 0 0 1 160 100"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.25 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            </div>

            {/* SECOND SMALLER HUD */}
            <div className="absolute top-[40%] right-[-20%] flex items-center justify-center opacity-20">
              <motion.svg 
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 200 200"
                className="w-[500px] h-[500px]"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  stroke="white"
                  strokeWidth="0.3"
                  fill="none"
                  strokeDasharray="1 10"
                />
                <motion.path
                  d="M 40 100 A 60 60 0 0 1 160 100"
                  fill="none"
                  stroke="#ec2424"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.25 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </motion.svg>
            </div>

            {/* TOP SECTION */}
            <header className="relative z-10 flex justify-end items-start">
              <div className="text-right font-mono text-[7px] opacity-30 leading-relaxed uppercase">
                [KERNEL_LOG_INIT] <br/>
                {">"} Checking Logic Gates... OK <br/>
                {">"} Compiling Sub-Systems... OK <br/>
                {">"} Established Secure Node: Thessaloniki
              </div>
            </header>

            {/* MIDDLE SECTION */}
            <div className="relative z-10 flex flex-col items-center">

              {/* Title + Subtitle */}
              <div className="flex flex-col items-center gap-4 mb-16">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[0.5px] bg-blue-500/50" />
                  <h1 className="text-7xl font-black tracking-[-0.05em] text-white italic uppercase flex items-center">
                    PROJECTS
                    <span className="text-blue-600 mx-3">_</span>
                    ARCHIVE
                    <span className="text-blue-600 block w-2 h-10 bg-blue-600 ml-4 animate-pulse" />
                  </h1>
                  <div className="w-12 h-[0.5px] bg-blue-500/50" />
                </div>

                <p className="text-[9px] uppercase tracking-[1em] opacity-20 italic">
                  Electronical & Computer Engineering
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("repo")}
                className="mt-40 px-24 py-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-none text-[9px] uppercase tracking-[0.8em] transition-all duration-500 font-bold group overflow-hidden"
              >
                <span className="relative z-10">Access Repository</span>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
              </motion.button>

            </div>

            {/* BOTTOM SECTION */}
            <footer className="relative z-10 flex justify-between items-end">
              <div className="space-y-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="group flex items-center gap-3 text-[8px] opacity-20 hover:opacity-100 transition-opacity uppercase tracking-[0.4em]"
                >
                  <span className="text-blue-500">↻</span> REBOOT_SYSTEM
                </button>
                <div className="flex gap-2">
                   {[1,2,3].map(i => <div key={i} className="w-4 h-1 bg-white/5 rounded-full" />)}
                </div>
              </div>

              <div className="text-right">
                <div className="flex flex-col items-end group cursor-default">
                  <span className="text-[14px] font-black text-white tracking-[0.4em] group-hover:text-blue-500 transition-colors">40.6401° N</span>
                  <span className="text-[14px] font-black text-white tracking-[0.4em] group-hover:text-blue-500 transition-colors">22.9444° E</span>
                </div>
                <div className="h-[2px] w-40 bg-white/10 mt-4 relative overflow-hidden">
                   <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/50" 
                   />
                </div>
              </div>
            </footer>
          </motion.section>
        )}

        {/* --- VIEW 2: REPOSITORY --- */}
        {view === "repo" && (
          <motion.section 
            key="repo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full w-full flex bg-[#050505]"
          >
             {/* Sidebar Navigation */}
             <aside className="w-80 border-r border-white/5 p-12 flex flex-col justify-between">
                <div className="space-y-16">
                   <div className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">Directory</div>
                   <div className="space-y-4">
                     {projects.map(p => (
                       <button 
                         key={p.id} 
                         onClick={() => setActiveId(p.id)}
                         className={`block text-[12px] uppercase tracking-tighter transition-all text-left ${activeId === p.id ? 'text-white pl-4 border-l-2 border-blue-600' : 'opacity-20 hover:opacity-50'}`}
                       >
                         {p.title}.sys
                       </button>
                     ))}
                   </div>
                </div>
                
                <button 
                  onClick={() => setView("home")}
                  className="text-[9px] opacity-20 hover:opacity-100 uppercase underline tracking-widest"
                >
                  Return to Root
                </button>
             </aside>

             {/* Main Project Display */}
             <section className="flex-1 p-24 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-blue-500 text-[10px] tracking-[0.5em] uppercase">Deployment / 0{activeProject?.id}</span>
                    <h2 className="text-8xl font-black italic uppercase tracking-tighter text-white mt-4 mb-10">{activeProject?.title}</h2>
                    <div className="flex gap-4">
                       {activeProject?.tech.map(t => (
                         <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] text-white/50 font-bold uppercase tracking-widest">{t}</span>
                       ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
             </section>
          </motion.section>
        )}

      </AnimatePresence>
    </main>
  );
}