import mockBlogs from "@/utils/Tulisan.json";
import Link from "next/link";
import { useState } from "react";

export default function AlsoRead() {
  const [blogs, setBlogs] = useState(mockBlogs);
  return (
    <div>
      <h2 className="text-[32px] font-semibold mb-[30px] mt-[68px]">
        Baca Juga
      </h2>
      <ul>
        {blogs.map((b) => {
          if (b.id > 1) {
            return (
              <li key={b.id} className="flex space-x-[34px] mb-[30px]">
                <div
                  className="w-[250px] flex-shrink-0 h-[165px] bg-cover"
                  style={{ backgroundImage: `url(${b.img})` }}
                ></div>
                <div className="-mt-1">
                  <Link href={`/`}>
                    <h4 className="text-2xl font-semibold text-secondary">
                      {b.title}
                    </h4>
                  </Link>
                  <p className="mt-4 text-lg text-justify text-secondary">
                    {b.desc}
                  </p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
