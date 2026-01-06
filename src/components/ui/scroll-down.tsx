import arrow from "/images/arrow-down.png";

export function ScrollDown() {
  return (
    <div className=" absolute bottom-10 md:-bottom-30 flex flex-col justify-end items-center text-black font-medium ">
      <p>Scroll to learn more</p>
      <div className="w-8">
        <img src={arrow}></img>
      </div>
    </div>
  );
}
