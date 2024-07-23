import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Slider from "react-slick";

const settings ={
    dots: false,
    arrows: false,
    loop: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    cssEase: "linear",
    pauseOnHover: true,
};

const TestimonialData =[
    {
        id: 1,
        name: "Jhon Doe",
        testimonial:"lorem Ips but tristique velit vel mag meaning dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore maglorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore ",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith",
        testimonial:"lorem Ips but tristique velit vel mag meaning dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore maglorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore ",
        img: "https://picsum.photos/103/104",
    },
    {
        id: 1,
        name: "Samuel",
        testimonial:"lorem Ips but tristique velit vel mag meaning dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore maglorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore ",
        img: "https://picsum.photos/101/101",
    }
]


const Testimonial = () => {
    return(
        <div className="py-10">
            <div className="container">
                {/* Título del encabezado */}
                <HeaderTitle
                    title="Testimonios"
                    subtitle="Lo que dicen nuestros clientes"
                    description={
                    "lorem20  dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag lorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore maglorem20   dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore mag"
                    }
                    />
                {/* tarjeta de testimonio */}
                <div className="max-w-[600px] mx-auto">
                    <Slider {...settings}>
                        {TestimonialData.map((data, index) => (
                            <div key={index} data-aos="fade-up">
                                <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                                    <img src={data.img} alt="" className="rounded-full block mx-auto" />
                                    <p className="text-gray-500 text-sm">{data.testimonial}</p>
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
}

export default Testimonial;