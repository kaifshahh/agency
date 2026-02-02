"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/constant/constant";
import Link from "next/link";
import Image from "next/image";
import {
  MoveLeft,
  ExternalLink,
  CheckCircle,
  Flame,
  Layers,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const params = useParams();
  const id = Number(params.id);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-34 h-screen bg-black/3 dark:bg-white/3 backdrop-blur-md text-black dark:text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/work" className="text-blue-500 hover:underline">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/3 dark:bg-white/3 dark:backdrop-blur-md text-black dark:text-white py-34 transition-colors duration-300">
      {/* Top Navigation & Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <Link
          href="/work"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 group"
        >
          <MoveLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              Live Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-400 dark:border-white/10 ${
                index === 0 && project.images.length % 2 !== 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 bg-slate-600"
              />
            </motion.div>
          ))}
        </div>

        {/* Project Info - Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-gray-400 dark:border-white/10 py-8">
          <div className="text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-500 mb-1 text-sm uppercase tracking-wider">
              Client Category
            </p>
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.category}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-500 mb-1 text-sm uppercase tracking-wider">
              Timeline
            </p>
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.stats.weeks} Weeks
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-500 mb-1 text-sm uppercase tracking-wider">
              Team Size
            </p>
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.stats.staff} Members
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-500 mb-1 text-sm uppercase tracking-wider">
              Year
            </p>
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.stats.year}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <Flame className="w-6 h-6 text-orange-500" /> Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.overview}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <CheckCircle className="w-6 h-6 text-green-500" /> Key
                Highlights
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-400 hover:border-blue-500/50 transition-colors"
                  >
                    <span className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Trophy className="w-6 h-6 text-yellow-500" /> Achievements &
                Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-linear-to-br dark:from-gray-800 dark:to-gray-600 p-6 rounded-2xl border border-gray-400 dark:border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {result.split(" ")[0]}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {result.substring(result.indexOf(" ") + 1)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-10">
            {/* Tech Stack */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-400 dark:border-white/10 hover:border-blue-500/50 transition-colors ">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Layers className="w-5 h-5 text-purple-500" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-full text-sm text-gray-600 dark:text-gray-300 transition-colors cursor-default hover:border-blue-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-400 dark:border-white/10 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Services Provided
              </h3>
              <ul className="space-y-3">
                {project.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
