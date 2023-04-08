import mockBlogs from "@/utils/Tulisan.json";
import CardDetail from "./CardDetail";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MainDetail() {
  const [blogs, setBlogs] = useState(mockBlogs);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="mt-[120px]">
      <ul>
        {blogs.map((b) => {
          if (b.id == id) {
            return (
              <li key={b.id}>
                <CardDetail
                  descImg="Hutan Indo"
                  title={b.title}
                  date={b.date}
                  img={b.img}
                />
              </li>
            );
          }
        })}
      </ul>
      <p className="text-xl text-justify text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
        diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
        nulla risus id fames nascetur urna. Eros in neque tincidunt.
      </p>
      <br />

      <h2 className="text-2xl font-semibold text-secondary">
        Lorem ipsum dolor sit amet, consectetur
      </h2>
      <br />
      <p className="text-xl text-justify text-secondary">
        commodo nunc. Feugiat lorem cras ut cras enim neque, elit, facilisi
        habitasse. Facilisis faucibus nunc congue urna diam. Vitae, diam justo,
        massa, elit. In et nibh ut in diam tellus at tellus diam.
      </p>
      <br />
      <p className="text-xl text-justify text-secondary">
        Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat
        in. Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum
        neque amet turpis non. Ac arcu lacus turpis elementum imperdiet. Euismod
        purus, libero scelerisque vitae, libero fermentum urna, nunc.
      </p>
      <br />
      <h2 className="text-2xl font-semibold text-secondary">
        Lorem ipsum dolor sit amet, consectetur
      </h2>
      <br />
      <p className="text-xl text-justify text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
        diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
        nulla risus id fames nascetur urna. Eros in neque tincidunt.
      </p>
      <br />
      <p className="text-xl text-justify text-secondary">
        Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
        malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
        adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
        neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
        diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
        tellus diam.
      </p>
      <br />
      <p className="text-xl text-justify text-secondary">
        Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat
        in. Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum
        neque amet turpis non. Ac arcu lacus turpis elementum imperdiet. Euismod
        purus, libero scelerisque vitae, libero fermentum urna, nunc.
      </p>
      <br />
    </div>
  );
}
