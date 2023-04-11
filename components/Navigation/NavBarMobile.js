import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import CtgItem from "./CtgItem";
import Container from "../Container";

export default function NavBarMobile() {
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    window.addEventListener("click", (e) => {
      if (e.target.id != hamburger.id) {
        setOffcanvas(false);
      }
    });
    window.onscroll = function () {
      const header = document.querySelector("#navigation");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
  }, []);

  return (
    <nav
      id="navigation"
      className="fixed bg-white z-50 top-0 w-full shadow-[0_8px_30px_0_rgba(0,0,0,0.05)] py-[15px]"
    >
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <div className="relative">
              <button
                className="absolute w-full h-full bg-transparent"
                id="hamburger"
                onClick={() => setOffcanvas(!offcanvas)}
              ></button>
              <Hamburger offcanvas={offcanvas} />
            </div>

            <ul
              className={`z-10  flex px-5 py-4 mt-2 shadow-xl bg-white rounded-md flex-col absolute top-full space-y-2 -left-full transition-all xl:py-6 md:py-4 xl:space-x-10 ${
                offcanvas && "left-[35px]"
              }`}
            >
              <CtgItem link href="/#">
                Home
              </CtgItem>
              <CtgItem link href="/#Mitra">
                Kemitraan
              </CtgItem>
              <CtgItem link href="/#Tentang">
                Tentang
              </CtgItem>
              <CtgItem link href="/#Butuh">
                kami Butuh Kamu
              </CtgItem>
              <CtgItem link href="/#Post">
                Post
              </CtgItem>
              <CtgItem link href="/#Berita">
                Newsletter
              </CtgItem>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium text-secondary">BERTUMBUH</h2>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              fill="none"
              viewBox="0 0 28 29"
            >
              <ellipse
                cx="14"
                cy="14.011"
                fill="#2A9D8F"
                rx="14"
                ry="14.011"
              ></ellipse>
              <g fill="#fff" clipPath="url(#clip0_1_324)">
                <path d="M18.527 10.317a2.82 2.82 0 00-.068-1.288 2.365 2.365 0 00-.618-1.046 1.729 1.729 0 00-.979-.482 1.606 1.606 0 00-1.038.23 2.374 2.374 0 00-.688-1.185 1.684 1.684 0 00-1.13-.454c-.406 0-.802.159-1.13.454-.326.295-.567.71-.687 1.186a1.606 1.606 0 00-1.039-.23 1.73 1.73 0 00-.979.481c-.282.27-.497.633-.618 1.046a2.82 2.82 0 00-.067 1.288c-.468.103-.887.416-1.176.878a2.708 2.708 0 00-.383 1.618c.043.579.26 1.117.61 1.51.351.392.81.61 1.285.61h.038c.1.604.394 1.135.815 1.475.42.34.935.462 1.43.34.493-.124.928-.483 1.206-.998a2.76 2.76 0 00.277-1.748h.456c-.095.606.011 1.233.294 1.744.283.51.72.863 1.216.979.496.116 1.009-.013 1.426-.36.418-.346.706-.881.8-1.487.248.069.504.076.754.022.25-.055.489-.17.702-.339.213-.169.396-.388.539-.645a2.63 2.63 0 00.291-.85c.05-.305.05-.618-.001-.922a2.624 2.624 0 00-.295-.85 2.147 2.147 0 00-.54-.641 1.715 1.715 0 00-.703-.335z"></path>
                <path d="M12.766 21.64h2.49l-.355-9.154h-1.779l-.356 9.154z"></path>
              </g>
              <defs>
                <clipPath id="clip0_1_324">
                  <path
                    fill="#fff"
                    d="M0 0H12.183V15.549H0z"
                    transform="translate(7.92 6.092)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </nav>
  );
}
