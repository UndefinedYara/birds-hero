import imessageLogo from "/images/imessage.png";
import appleLogo from "/images/apple.png";
import bird from "/images/bird.png";

export function Hero() {
  return (
    <section className="container relative flex flex-col justify-center items-center md:px-6 gap-12 ">
      {/* Birds */}
      <div className="absolute h-full w-full">
        <div className="absolute top-30 left-1/20 md:top-40 md:left-2/10">
          <img src={bird} alt="bird1" />
        </div>
        <div className="absolute top-30 md:top-60 left-10/12 md:left-8/10">
          <img src={bird} alt="bird2" />
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className=" flex justify-center items-center gap-2 bg-white/70 px-2 py-1 rounded-full mb-10 lg:-mb-2 lg:mt-4 ">
          <div className="w-8">
            <img src={imessageLogo} alt="imessage" />
          </div>
          <p className="text-sm md:text-md text-primary-darker font-medium">
            #1 iMessage Automation Tool
          </p>
        </div>
        <div className=" md:w-4/10 flex flex-col gap-6 text-center -mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl text-black leading-[1.2] tracking-tight">
            <span className="text-primary-darker ">iMessage</span> Automation
            for Teams and AI Workflows.
          </h1>
          <p className="text-black text-sm md:text-base">
            Coup lets you, your team, or AI workflows send iMessages directly
            from your phone number, running securely on your Mac or Mac Mini.
          </p>
        </div>
      </div>
      {/* Buttons */}

      <div className="flex font-normal items-center justify-center gap-3 z-30 text-xs md:text-md">
        <button className="bg-primary  px-5 py-3 rounded-full font-semibold">
          Get Started
        </button>
        <button className="flex  items-center justify-between gap-3 text-black border border-border px-5 py-3 rounded-full ">
          <div className="w-4.5">
            <img src={appleLogo} alt="apple" />
          </div>
          <div className="border border-border w-[0.5px]  h-4.5"></div>
          <p>Download the Mac app</p>
        </button>
      </div>
    </section>
  );
}
