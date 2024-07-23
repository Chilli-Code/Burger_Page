import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa"

import footerLogo from "../../assets/logo.png";

const FooterLinks =[
    {
        id:1,
        title:"Incio",
        link:"#",
    },
    {
        id:1,
        title:"informacion",
        link:"#",
    },
    {
        id:1,
        title:"Servicios",
        link:"#",
    },
    {
        id:1,
        title:"Contacto",
        link:"#",
    },
];

const Footer = () =>{
    return(
        <div data-aos="fade-up" className="bg-gray-100">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-5">
                    {/* Detalles de la compañía */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="" className="w-16"/>
                            Burger King
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sequi repellendus perspiciatis, ratione nulla perferendis numquam expedita impedit cumque a.
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow /> 123 Street, city Country
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt /> +57 123456789
                        </div>
                    {/* Identificadores sociales */}
                    <div className="flex items-center gap-4 mt-3">
                        <a href="#"><FaInstagram className="text-3xl"/> </a>
                        <a href="#"><FaFacebook className="text-3xl"/> </a>
                        <a href="#"><FaLinkedin className="text-3xl"/> </a>
                    </div>
                    </div>
                    {/* Enlaces de pie de página */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        {/* Primera columna */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Links importantes</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link, index) => (
                                        <li key={index} className="hover:text-primary duration-300">
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Segunda columna */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Enlaces de la empresa</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link, index) => (
                                        <li key={index} className="hover:text-primary duration-300">
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Tercera columna */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link, index) => (
                                        <li key={index} className="hover:text-primary duration-300">
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div>
                    <div className="text-center py-10 border-t-2 border-gray-300/50">
                    @copyright 2024 || Chilly-Code
                </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;