import mockBlogs from "@/utils/Tulisan.json";
import Link from "next/link";
import { useState } from "react";

export default function AlsoRead() {
  const [blogs, setBlogs] = useState(mockBlogs);
  return (
    <div>
      <h2 className="xl:text-[32px] text-2xl font-semibold mb-4 mt-10 xl:mb-[30px] xl:mt-[68px]">
        Baca Juga
      </h2>
      <ul>
        {blogs.map((b) => {
          if (b.id > 1 && b.id < 4) {
            return (
              <li
                key={b.id}
                className="flex xl:space-x-[34px] space-x-5 xl:mb-[30px] mb-5 md:mb-10"
              >
                <Link
                  href={{ pathname: "/detailblog", query: { id: `${b.id}` } }}
                >
                  <div
                    className="xl:w-[250px] flex-shrink-0 xl:h-[165px] w-20 h-20 bg-cover"
                    style={{ backgroundImage: `url(${b.img})` }}
                  ></div>
                </Link>
                <div className="flex flex-col justify-between -mt-1 xl:block">
                  <Link
                    href={{ pathname: "/detailblog", query: { id: `${b.id}` } }}
                  >
                    <h4 className="font-semibold xl:text-2xl md:text-lg text-secondary">
                      {b.title}
                    </h4>
                  </Link>
                  <p className="hidden mt-4 text-lg text-justify xl:block text-secondary">
                    {b.desc}
                  </p>
                  <p className="text-base text-justify xl:hidden text-secondary">
                    {b.date}
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
