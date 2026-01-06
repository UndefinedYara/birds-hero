"use client";

import coupLogo from "/images/coup.png";

export function Header() {
  return (
    <header className="fixed top-5 md:top-10 flex justify-center w-full z-30 drop-shadow-sm ">
      <div className="flex w-5/6  lg:w-4/6 rounded-full justify-between px-5 py-3 bg-white">
        <div className="flex items-center justify-center ">
          <div className="w-22 md:w-26.5 md:h-8">
            <img src={coupLogo} alt="logo" width={100} height={32} />
          </div>
        </div>
        <div className="hidden items-center justify-center gap-4 text-[#8C97A8]  md:flex">
          <a href="#">How it Works</a>
          <a href="#">Pricing</a>
          <a href="#">Use Case</a>
          <a href="#">FAQ</a>
        </div>
        <button className="bg-primary text-sm px-3 md:px-4.5 md:py-2.75 rounded-full font-semibold">
          Contact Sales
        </button>
      </div>
    </header>
  );
}
