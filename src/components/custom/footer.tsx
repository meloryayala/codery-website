import Image from "next/image";
import coderyLogo from "/public/codery-logo.svg"

const Footer = () => {
    return (
        <div className="flex flex-col bg-background-light px-[7%] py-[15%] gap-4 mt-32 rounded-t-lg text-foreground">
            <Image
                src={coderyLogo}
                alt="Codery logo"
                   />

            <div>
                Links
            </div>
        </div>
    );
};
export default Footer;
