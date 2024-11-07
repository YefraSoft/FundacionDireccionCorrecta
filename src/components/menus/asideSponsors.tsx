"use client";
import { blogPosts } from "@/utils/fakeData";
import BaseCard from "../cards/baseCard";

export default function AsideSponsors() {
  return (
    <div>
      <div className="px-2">
        <span className="block text-lg text-center mb-1 font-light">Nuestros afiliados</span>
        <div className="flex px-9 overflow-hidden max-h-1/6">
        <BaseCard post={blogPosts[2]} index={blogPosts[2].id} />
        <BaseCard post={blogPosts[2]} index={blogPosts[2].id} />
        </div>
      </div>
    </div>
  );
}
