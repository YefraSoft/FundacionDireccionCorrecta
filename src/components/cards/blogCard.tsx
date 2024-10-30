"use client";
import { blogProps } from "@/utils/interfaces";
import { AnimatePresence } from "framer-motion";
import BaseCard from "./baseCard";

export default function BlogCard({ posts }: blogProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Donaciones del mes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {posts.map((post, index) => (
            <BaseCard key={post.id} post={post} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
