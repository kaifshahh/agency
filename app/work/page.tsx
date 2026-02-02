"use client";
import React from "react";
import ProjectCard from "@/components/Work/ProjectCard";
import { projects } from "@/constant/constant";
import { motion } from "framer-motion";

const WorkPage = () => {
  return (
    <section className=" py-34 min-h-screen dark:bg-black/10 text-black dark:text-white  px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight"
          >
            <span className="text-red-500 font-medium">Our</span>
            <span className="text-indigo-500 italic font-medium ml-2">
              Masterpieces
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-800 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Discover how we blend creativity, technology, and strategy to build
            digital products that drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
