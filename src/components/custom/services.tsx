import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {services} from "@/constants/content";
import Image from "next/image";


const Services = () => {
    return (
        <div id="services" className="flex flex-col justify-center mx-[7%] gap-y-8">
            <h3 className="text-center text-3xl">Adding Value On</h3>
            {services.map((service, index) => (
                <Card key={index} className="px-[3%] py-[4%]">
                    <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col lg:flex-row lg:justify-between text-lg text-foreground-light">
                            <p>{service.description}</p>
                            <div className="grid grid-cols-1 gap-y-5 mt-4">
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
