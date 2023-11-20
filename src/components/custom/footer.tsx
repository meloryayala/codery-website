import Image from "next/image";
import coderyLogo from "/public/images/codery-logo.svg"
import {LinkedinIcon, Mail} from "lucide-react";
import {footerText} from "@/constants/deData";

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between bg-background-light px-[7%] py-[60px] mt-32 lg:mt-56 rounded-t-lg text-foreground">
            <div className="flex flex-col gap-5">
                <Image
                    src={coderyLogo}
                    alt="Codery logo"
                />

                <p className="text-xl text-foreground-light">
                    {footerText}
                </p>
            </div>

            <div className="flex flex-col gap-8">
                <div className="flex gap-8 lg:self-end">
                    <a href="https://www.linkedin.com/company/codery-gmbh">
                        <LinkedinIcon />
                    </a>
                    <a href="mailto:fabrice.manhart@codery.ch">
                        <Mail />
                    </a>
                </div>
                <p className="text-foreground-light">Copyright © Codery GmbH 2023</p>
            </div>
        </div>
    );
};
export default Footer;
