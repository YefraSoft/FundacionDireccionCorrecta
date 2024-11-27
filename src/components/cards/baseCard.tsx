import { dataPost } from "@/utils/interfaces";
import Image from "next/image";

export default function BaseCard({ post }: { post: dataPost; index: number }) {
  return (
    <div className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg rounded-xl border bg-white shadow">
      <div className="flex flex-col space-y-1.5 p-3">
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={450}
          className="w-full h-48 object-cover rounded-2xl lg:h-72"
        />
      </div>
      <div className="p-4 pt-0">
        <h2 className="text-xl font-semibold mb-2 text-primary leading-none tracking-tight">
          {post.title}
        </h2>
        <h3 className="flex justify-between font-semibold mb-2 text-primary leading-none tracking-tight">
          <p>{post.subTitle}</p>
          <p>{post.date}</p>
        </h3>
        <p className="text-sm">{post.description}</p>
      </div>
    </div>
  );
}
