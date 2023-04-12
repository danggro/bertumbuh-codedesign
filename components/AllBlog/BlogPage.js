export default function BlogPage({ children, def, titik }) {
  return (
    <>
      {titik ? (
        <li className="flex items-end justify-center font-bold tracking-widest text-primary/50 text-24">
          . . .
        </li>
      ) : (
        <li
          className={`font-semibold cursor-pointer  w-[50px] h-[50px] rounded-[5px]  flex justify-center text-2xl items-center ${
            def ? "bg-primary text-white" : "bg-secondary/10 text-secondary/50"
          }
          `}
          onClick={(e) => {
            const page = Array.from(document.getElementById("page").children);
            page.forEach((p, i) => {
              p.classList.remove("text-white", "bg-primary");
              p.classList.add("bg-secondary/10", "text-secondary/50");
              if (e.target.innerText === p.innerText) {
                p.classList.add("text-white", "bg-primary");
                p.classList.remove("text-secondary/50", "bg-secondary/10");
              }
            });
            page[3].classList.remove("bg-secondary/10");
          }}
        >
          {children}
        </li>
      )}
    </>
  );
}
