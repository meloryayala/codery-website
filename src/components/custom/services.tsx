import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {services} from "@/constants/data";
import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="flex flex-col justify-center mx-[7%] gap-8 lg:gap-12">
            <h3 className="text-center text-3xl lg:text-5xl">Adding Value On</h3>
            {services.map((service, index) => (
                <Card key={index} className="flex flex-col px-[3%] py-[4%] lg:px-[7%] lg:gap-8">
                    <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col lg:flex-row text-lg text-foreground-light lg:justify-between lg:items-center">
                            <p className="w-full lg:w-[40%]">{service.description}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 mt-4">
                                {service.icons.map((icon, index) => (
                                    <div key={index} className="flex gap-x-7 items-center text-xl text-foreground">
                                        <Image
                                            src={icon.logo}
                                            alt={icon.name + " logo"}
                                            className="w-11"
                                        />
                                        {icon.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
export default Services;
