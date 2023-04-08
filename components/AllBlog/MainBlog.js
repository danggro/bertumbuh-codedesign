import { useState } from "react";
import mockBlogs from "@/utils/Tulisan.json";
import CardBlog from "./CardBlog";
export default function MainBlog() {
  const [blogs, setBlogs] = useState(mockBlogs);
  return (
    <div className="w-10/12 mx-auto">
      <ul className="flex flex-wrap -mx-[29px]">
        {blogs.map((b) => {
          return (
            <li key={b.id} className="w-6/12 px-[29px] mb-10">
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
