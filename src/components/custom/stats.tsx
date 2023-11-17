"use client"

import {ArrowUpRight} from "lucide-react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {stats} from "@/constants/data";
import React from "react";

const Stats = () => {
    return (
        <div id="stats" className="flex flex-col gap-8 mx-[7%] lg:gap-12">
            <h3 className="text-center text-3xl lg:text-5xl">Reference Of Quality</h3>
            <div className="flex flex-col gap-7 lg:flex-row-reverse">
                <div className="grid grid-cols-2 gap-6 lg:w-[50%]">
                    <Card className="bg-tertiary text-background font-semibold">
                        <CardContent className="flex flex-col  items-center gap-x-4 py-7">
                            <p className="text-5xl font-bold">+ {stats[0].value}</p>
                            <p className="text-md lg:text-xl">{stats[0].label}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-tertiary text-background font-semibold">
                        <CardContent className="flex flex-col items-center gap-x-4 py-7">
                            <p className="text-5xl font-bold">+ {stats[1].value}</p>
                            <p className="text-md lg:text-xl">{stats[1].label}</p>
                        </CardContent>
                    </Card>
                    <Card className="col-span-2 bg-secondary text-background font-semibold">
                        <CardContent className="flex items-center gap-x-8 py-7">
                            <p className="text-5xl font-bold">+ {stats[2].value}</p>
                            <p className="w-[40%] text-md lg:text-xl">{stats[2].label}</p>
                        </CardContent>
                    </Card>
                </div>
                <Card
                    className="bg-primary text-background font-semibold lg:flex-grow"
                    onClick={e => {
                        window.location.href = 'mailto:example@email.com';
                    }}
                >
                    <CardHeader className="flex flex-col justify-between lg:h-full py-7 lg:px-8">
                        <ArrowUpRight size={50} className="self-end"/>
                        <h4 className="text-2xl lg:text-4xl leading-relaxed">Find out how I can help your business</h4>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
};
export default Stats;
