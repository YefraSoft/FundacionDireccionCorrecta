import BlogCard from "@/components/cards/blogCard";
import AsideDonations from "@/components/menus/asideDonations";
import CardOverflow from "@/components/menus/cardOverflow";
import IconCards from "@/components/menus/IconCards";
import { blogPosts } from "@/utils/fakeData";

export default function BlogFeed() {
  return (
    <div className="bg-patina-100">
      <div className="bg-patina-400 h-64 md:h-[30rem] w-full shadow-md" />
      <CardOverflow />
      <div className="bg-cello-50 mt-52 md:mt-24 lg:mt-96">
        <IconCards />
        <div className="flex ">
          <div className="lg:w-1/4 bg-cello-200">
            <AsideDonations />
          </div>
          <div>
            <BlogCard posts={blogPosts} />
          </div>
          <div className="lg:w-1/4 bg-cello-300">aside 2</div>
        </div>
      </div>
      <div className="h-48 text-center ">FOOTHER</div>
    </div>
  );
}
