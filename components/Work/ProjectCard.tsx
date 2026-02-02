"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    images: string[];
    description: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border  border-black/8 dark:border-white/8 bg-black/3 dark:bg-white/3 backdrop-blur-md hover:border-blue-500/50 transition-colors duration-300"
    >
      <Link href={`/work/${project.id}`} className="block h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
