import Image from "next/image";
import coderyLogo from "/public/codery-logo.svg"
import {LinkedinIcon, Mail} from "lucide-react";

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between bg-background-light px-[7%] py-[60px] gap-7 mt-32 rounded-t-lg text-foreground">
            <div className="flex flex-col gap-5">
                <Image
                    src={coderyLogo}
                    alt="Codery logo"
                />

                <p className="text-xl text-foreground-light">
                    Helping business to build sophisticated and scalable software products
                </p>
            </div>

            <div className="flex flex-col gap-8">
                <div className="flex gap-8 lg:self-end">
                    <a href="">
                        <LinkedinIcon />
                    </a>
                    <a href="">
                        <Mail />
                    </a>
                </div>
                <p className="text-foreground-light">Copyright © Codery GmbH 2023</p>
            </div>
        </div>
    );
};
export default Footer;
