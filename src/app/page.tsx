import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";
import Stats from "@/components/custom/stats";

export default function Home() {
  return (
      <div className="flex flex-col justify-center mt-32 gap-y-32">
          <Hero />
          <Services />
          <Stats />
      </div>
  )
}
