"use client"

import Image from "next/image";
import arrows from "../../../public/images/arrows.svg";
import stars from "../../../public/images/starts.svg";
import {companies} from "@/constants/data";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className="flex flex-col gap-28 lg:gap-40">
            <div className="flex justify-center">
                <h1 className="text-center text-4xl uppercase leading-relaxed lg:leading-relaxed md:text-6xl mx-[7%] lg:max-w-5xl">
                    Over
                    <div className="bg-indigo-400 rounded-lg inline mx-2 p-1">
                        <Image src={arrows} alt="Arrrows" className="inline h-10 w-auto"/>
                    </div>
                    15 years of
                    full stack
                    <div className="bg-amber-300 rounded-lg inline mx-2 p-1">
                        <Image src={stars} alt="Stars" className="inline h-8 w-auto"/>
                    </div>
                    development
                </h1>
            </div>


            <div className="relative overflow-hidden">
            <motion.div
                transition={{ duration: 4, from: 100,  ease: 'linear', repeat: Infinity }}
                animate={{ x: -100 }}
                className="flex gap-x-8 lg:gap-x-16 pl-[7%]">
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center overflow-hidden rounded-lg w-[80px] h-[60px] lg:w-[130px] lg:h-[100px] shrink-0">
                        <Image
                            src={company.image}
                            alt={company.name + "logo"}
                            style={{
                                objectFit: "contain"
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </div>
    );
};
export default Hero;
