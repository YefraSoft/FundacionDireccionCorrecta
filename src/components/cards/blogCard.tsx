"use client";
import { dataPost } from "@/utils/interfaces";
import BaseCard from "./baseCard";
import { getPostData } from "@/services/dataService";
import { useState, useEffect } from "react";
import LoadingCircle from "../menus/loadingCircle";

export default function BlogCard() {
  const [posts, setposts] = useState<dataPost[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    getPostData().then((post: dataPost[]) => {
      setposts(post);
      setloading(false);
    });
  }, []);
  return (
    <div className="container mx-auto px-1 py-4">
      <h1 className="text-center text-2xl font-bold text-patina-500 mb-3">
        Donaciones del mes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          <LoadingCircle />
        ) : (
          posts.map((post, index) => (
            <BaseCard key={index} post={post} index={post.id} />
          ))
        )}
      </div>
    </div>
  );
}
