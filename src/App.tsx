import { Clouds } from "./components/ui/clouds";
import { Hero } from "./components/ui/hero";
import { ScrollDown } from "./components/ui/scroll-down";

export default function App() {
  return (
    <section className="relative flex flex-col w-full justify-center items-center gap-12 ">
      <Hero />
      <Clouds />
      <ScrollDown />
    </section>
  );
}
