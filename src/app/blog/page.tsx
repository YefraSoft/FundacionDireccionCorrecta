"use client";
import BlogCard from "@/components/cards/blogCard";
import ReportForm from "@/components/forms/reportForm";
import AsideDonations from "@/components/menus/asideDonations";
import AsideSponsors from "@/components/menus/asideSponsors";
import CardOverflow from "@/components/menus/cardOverflow";
import IconCards from "@/components/menus/IconCards";
import OverFlowProvider from "@/components/providers/overFlowProvider";
import { blogPosts } from "@/utils/fakeData";

export default function BlogFeed() {
  return (
    <div className="bg-patina-100">
      <div className="bg-patina-400 h-64 md:h-[30rem] w-full shadow-md" />
      <CardOverflow />
      <div className="bg-cello-50 mt-52 md:mt-24 lg:mt-96">
        <IconCards />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 shadow-md lg:shadow-none rounded-md md:text-2xl">
            <h1 className="text-center text-2xl font-bold text-patina-500 my-3">
              Meta de ayuda
            </h1>
            <OverFlowProvider>
              <AsideDonations />
            </OverFlowProvider>
          </div>
          <div>
            <BlogCard posts={blogPosts} />
          </div>
          <div className="lg:w-1/4 md:text-2xl">
            <h1 className="text-center text-2xl font-bold text-patina-500 my-3">
              Nuestros afiliados
            </h1>
            <AsideSponsors />
          </div>
        </div>
        <section className="flex items-center justify-center w-full h-full">
          <div className="w-2/4">
            <h2 className="text-lg text-center mb-1 font-light mt-2">
              Formulario de Reportes
            </h2>
            <ReportForm />
          </div>
        </section>
      </div>
    </div>
  );
}
