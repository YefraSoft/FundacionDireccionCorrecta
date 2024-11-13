import Image from "next/image";
import React from "react";

export default function IndexCard({ title, content, image, actions }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {image && (
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-32 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="mt-2">{content}</p>
      <div className="mt-4 flex space-x-2">
        {actions.map((action, index) => (
          <button key={index} className={`p-2 rounded ${action.color}`}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
