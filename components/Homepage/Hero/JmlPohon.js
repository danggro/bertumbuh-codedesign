import JmlPohonLogo from "@/components/Logo/JmlPohonLogo";

export default function JmlPohon() {
  return (
    <div className=" justify-center flex items-end space-x-[68px]">
      <JmlPohonLogo />
      <div>
        <h3 className="text-[54px] text-black">1.351.003</h3>
        <h5 className="text-[26px] -mt-3 text-primary">Pohon yang Tertanam</h5>
      </div>
    </div>
  );
}
