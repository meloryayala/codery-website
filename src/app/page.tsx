import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";
import Stats from "@/components/custom/stats";
import Projects from "@/components/custom/projects";
import Pricing from "@/components/custom/pricing";

export default function Home() {
  return (
      <div className="flex flex-col justify-center mt-40 gap-y-32 lg:gap-y-56 lg:mt-44">
          <Hero />
          <Services />
          <Stats />
          <Projects />
          <Pricing />
      </div>
  )
}
