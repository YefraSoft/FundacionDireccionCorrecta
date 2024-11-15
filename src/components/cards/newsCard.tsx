interface NewsCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
}

export default function NewsCard({
  title,
  description,
  location,
  date,
}: NewsCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center pt-2 mt-2 
      rounded-sm shadow-sm hover:scale-105 transition duration-300"
    >
      <h2 className="text-lg text-patina-700">{title}</h2>
      <h3 className="text-sm text-patina-700">{description}</h3>
      <div className="text-xs w-full flex justify-between text-patina-300">
        <p>{location}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
