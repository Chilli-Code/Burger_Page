
import BurgerImg from "../../assets/burger/burger5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return(
        <div className="min-h-[550px]">
            <div className="min-h-[550px] flex justify-center items-center">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Sección de imagen */}
                        <div data-aos="flip-up">
                            <img src={BurgerImg} alt=""  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"/>
                        </div>
                        {/* Sección de texto */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Compra 2 hamburguesas y llévate 1 gratis</h1>
                            <p className="text-gray-500 text-sm tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti, veritatis unde ad provident quos.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae aperiam cum laborum laboriosam explicabo error enim nulla facere amet.
                            </p>
                            <div className="flex gap-6">
                                <div data-aos="fade-up">
                                <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100" />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200">
                                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400">
                                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500">
                                <button className="bg-gradient-to-r from-primary to-secundary text-white px-4 py-1 rounded-full hover:scale-105 duration-200">Ordenar Ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;