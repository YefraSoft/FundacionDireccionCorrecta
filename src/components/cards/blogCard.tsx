"use client";
import { blogProps } from "@/utils/interfaces";
import { AnimatePresence } from "framer-motion";
import BaseCard from "./baseCard";

export default function BlogCard({ posts }: blogProps) {
  return (
    <div className="container mx-auto px-1 py-4">
      <h1 className="text-center text-2xl font-bold text-patina-500 mb-3">
        Donaciones del mes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {posts.map((post, index) => (
            <BaseCard key={index} post={post} index={post.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
