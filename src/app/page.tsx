import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";

export default function Home() {
  return (
      <div className="flex flex-col justify-center mt-32 gap-y-32">
          <Hero />
          <Services />
      </div>
  )
}
