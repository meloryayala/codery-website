import {ArrowUpRight} from "lucide-react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {stats} from "@/constants/content";

const Stats = () => {
    return (
        <div id="stats" className="flex flex-col gap-y-8 mx-[7%]">
            <h3 className="text-center text-3xl">Reference Of Quality</h3>
            <div className="grid grid-cols-2">
                <Card className="px-[3%] py-[4%]">
                    <CardContent>
                        <div>
                        {stats[0].label}
                        </div>
                    </CardContent>
                </Card>
                <Card className="px-[3%] py-[4%]">
                    <CardContent>
                        <div>
                        {stats[1].label}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-2 px-[3%] py-[4%]">
                    <CardContent>
                        <div className="flex items-center gap-x-4">
                            <p className="text-5xl font-bold">+ {stats[2].value}</p>
                            <p className="w-[40%]">{stats[2].label}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card className="px-[3%] py-[4%]">
                <CardHeader className="flex flex-col justify-between">
                    <ArrowUpRight size={50} className="self-end"/>
                    <h4 className="text-2xl leading-relaxed">Find out how I can help your business</h4>
                </CardHeader>

            </Card>
        </div>
    );
};
export default Stats;
