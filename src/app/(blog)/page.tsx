import BlogCard from "@/components/cards/blogCard";
import CardOverflow from "@/components/menus/cardOverflow";
import { blogPosts } from "@/utils/fakeData";

export default function BlogFeed() {
  return (
    <div className="bg-patina-100">
      <div className="bg-patina-400 h-64 md:h-[30rem] w-full"></div>
      <CardOverflow />
      <div className="bg-patina-50 mt-52 md:mt-24 lg:mt-96">
        <BlogCard posts={blogPosts} />
      </div>
    </div>
  );
}
