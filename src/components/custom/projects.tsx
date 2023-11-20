import Slider from "./sliderCard";
import {companies, sectionTitles} from "@/constants/deData";
import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

const Projects = ({}) => {
    return (
        <div id="projects" className="flex flex-col gap-8 lg:gap-12">
            <h3 className="text-center text-3xl lg:text-5xl">{sectionTitles[3]}</h3>
            <Slider>
                {companies.map((company, index) => (
                    <Card key={index} className="px-[1%] py-7 flex-[0_0_80%] md:flex-[0_0_35%]">
                        <CardHeader className="flex flex-col text-2xl gap-8">
                            <div key={index}
                                 className="flex items-center rounded-lg overflow-hidden w-[130px] h-[100px]">
                                <Image
                                    src={company.image}
                                    alt={company.name + "logo"}
                                    style={{
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            {company.name}
                        </CardHeader>

                        <CardContent className="flex flex-col gap-7">
                            <div className="text-foreground-light text-lg">
                                <p>{company.period}</p>
                                <p>{company.description}</p>
                            </div>
                            <div className="flex gap-2">
                                {company.technologies.map(techItem => (
                                    <Badge key={techItem} className="text-md bg-foreground">
                                        {techItem}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};
export default Projects;
