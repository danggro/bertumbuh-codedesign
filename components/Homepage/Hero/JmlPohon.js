import JmlPohonLogo from "@/components/Logo/JmlPohonLogo";

export default function JmlPohon() {
  return (
    <div className=" justify-center flex xl:items-end md:items-center xl:space-x-[68px] md:space-x-[39px]">
      <JmlPohonLogo />
      <div>
        <h3 className="text-[54px] text-black">1.351.003</h3>
        <h5 className="text-[26px] -mt-3 text-primary">Pohon yang Tertanam</h5>
      </div>
    </div>
  );
}
