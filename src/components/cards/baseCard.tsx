import { dataPost } from "@/utils/interfaces";
import {
  descriptionVariants,
  leftRighVariants,
  titleVariants,
} from "@/utils/funtions";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function BaseCard({
  post,
  index,
}: {
  post: dataPost;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={leftRighVariants(index)}
    >
      <div className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg rounded-xl border bg-white shadow">
        <div className="flex flex-col space-y-1.5 p-3">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={900}
            height={450}
            className="w-full h-48 object-cover rounded-2xl lg:h-72"
          />
        </div>
        <div className="p-4 pt-0">
          <motion.div variants={titleVariants}>
            <div className="text-xl font-semibold mb-2 text-primary leading-none tracking-tight">
              {post.title}
            </div>
          </motion.div>
          <motion.div variants={descriptionVariants}>
            <div className="text-sm">
              {post.description}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
