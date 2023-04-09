import JmlPohonLogo from "@/components/Logo/JmlPohonLogo";

export default function JmlPohon() {
  return (
    <div className="justify-center  flex xl:items-end items-center xl:space-x-[68px] ">
      <div className="origin-left xl:scale-100 md:scale-[60%] scale-[70%]">
        <JmlPohonLogo />
      </div>
      <div className="xl:ml-0 md:-ml-7">
        <h3 className="xl::text-[54px]  text-[32px] text-black">1.351.003</h3>
        <h5 className="xl:text-[26px] xl:block  hidden -mt-3 text-primary">
          Pohon yang Tertanam
        </h5>
        <h5 className="text-xl xl:hidden text-primary">Pohon Tertanam</h5>
      </div>
    </div>
  );
}
