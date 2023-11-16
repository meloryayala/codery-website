import Image from "next/image";
import arrows from "../../../public/arrows.svg";
import stars from "../../../public/starts.svg";
import {companies} from "@/constants/content";

const Hero = ({}) => {
    return (
        <div>
            <h1 className="text-center text-4xl uppercase leading-relaxed lg:leading-snug md:text-6xl mx-[7%]">
                Over
                <div className="bg-indigo-400 rounded-lg inline mx-2 p-1">
                    <Image src={arrows} alt="Arrrows" className="inline h-10 w-auto" />
                </div>
                15 years of
                full stack
                <div className="bg-amber-300 rounded-lg inline mx-2 p-1">
                    <Image src={stars} alt="Stars" className="inline h-8 w-auto" />
                </div>
                development
            </h1>

            <div className="mt-32">
                <div className="flex gap-x-3 pl-[7%]">
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center rounded-lg overflow-hidden w-[130px] h-[100px]">
                        <Image
                            src={company.image}
                            alt={company.name + "logo"}
                            style={{
                                objectFit: "contain"
                            }}
                            />
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
};
export default Hero;
