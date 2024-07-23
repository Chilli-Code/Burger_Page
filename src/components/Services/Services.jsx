import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name:"Hamburguesa",
    description:
      "lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name:"Hamburguesa de pollo",
    description:
      "lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name:"Hamburguesa Vegetal",
    description:
      "lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          {/* Título del encabezado */}
          <HeaderTitle
            title="Servicios"
            subtitle="Nuestro servicio"
            description={
              "lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore maglorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag"
            }
          />
          {/* Sección de tarjeta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service, index) => (
              <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    className="max-w-[200px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300"
                    src={service.img}
                    alt=""
                  />
                </div>
                <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{service.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                        {service.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
