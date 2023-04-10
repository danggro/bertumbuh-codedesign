import { useState } from "react";
import mockBlogs from "@/utils/Tulisan.json";
import CardBlog from "./CardBlog";
export default function MainBlog() {
  const [blogs, setBlogs] = useState(mockBlogs);
  return (
    <div className="mx-auto xl:w-10/12">
      <ul className="flex md:flex-wrap md:flex-row flex-col md:-mx-3 xl:-mx-[29px]">
        {blogs.map((b) => {
          return (
            <li key={b.id} className="md:w-6/12 xl:px-[29px] md:px-3 mb-10">
              <CardBlog
                descImg={`Hutan Indo`}
                title={b.title}
                desc={b.desc}
                img={b.img}
                id={b.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
