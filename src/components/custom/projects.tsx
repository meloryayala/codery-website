import {companies} from "@/constants/data";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";
import {Badge} from "@/components/ui/badge"

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col gap-y-7">
            <h3 className="text-center text-3xl">Latest projects</h3>
            <ScrollArea>
                <div className="flex flex-row gap-6 pl-[3%]">
                    {companies.map((company, index) => (
                        <Card key={index} className="px-[1%] py-7 w-[300px]">
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

                            <CardContent className="flex flex-col gap-7 pb-0">
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
                </div>
                <ScrollBar orientation="horizontal" className="invisible"/>
            </ScrollArea>
        </div>
    );
};

export default Projects;
