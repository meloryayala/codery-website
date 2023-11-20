'use client'

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
    // 2. initialize EmblaCarousel using the custom hook
    const [emblaRef] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "start",
        ...options,
    });

    return (
        <div className="overflow-hidden pl-[7%]" ref={emblaRef}>
            <div className="flex gap-6 lg:gap-10">{children}</div>
        </div>
    );
};

export default Slider;
