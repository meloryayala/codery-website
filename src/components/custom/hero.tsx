"use client"

import Image from "next/image";
import arrows from "../../../public/images/arrows.svg";
import {clients} from "@/constants/clients";
import {sectionTitles} from "@/constants/deData";


const Hero = () => {
    return (
        <div className="flex flex-col gap-28 lg:gap-36">
            <div className="flex flex-col justify-center mx-[7%]">
                <div className="bg-primary rounded-lg inline mx-2 p-1 self-center">
                    <Image src={arrows} alt="Arrrows" className="inline h-10 w-auto"/>
                </div>
                <h1 className="text-center text-4xl leading-relaxed lg:leading-relaxed md:text-6xl lg:max-w-5xl self-center">
                    {sectionTitles[0]}
                </h1>
            </div>


            <div className="flex relative overflow-hidden justify-center">
                <div className="flex gap-x-8 lg:gap-x-16">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center overflow-hidden rounded-lg w-[80px] h-[60px] lg:w-[130px] lg:h-[100px] shrink-0">
                            <Image
                                src={client}
                                alt={"Client logo"}
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
