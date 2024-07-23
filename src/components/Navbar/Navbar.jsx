
import Logo from '../../assets/logo.png';
const Navlinks = [
    {
        id:1,
        title:"Inicio",
        link: "/#",
    },
    {
        id:2,
        title:"Informacion",
        link: "/#about",
    },
    {
        id:3,
        title:"Menu",
        link: "/#menu",
    },
    {
        id:4,
        title:"Servicios",
        link: "/#services",
    },
]

const Navbar = () =>{
    return(
        <div className="shadow-xl">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                {/* Sección de logotipo */}
                    <div>
                        <a href="#">
                            <img src={Logo} alt=""  className="w-16"/>
                        </a>
                    </div>
                    {/* Sección de enlace */}
                    <div className="flex justify-between items-center gap-4">
                        <ul className="hidden sm:flex items-center gap-4">
                            {Navlinks.map((link) => (
                                <li key={link.id}>
                                    <a className="inline-block py-4 px-4 hover:text-primary duration-300"
                                    href={link.link}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-gradient-to-r from-primary to-secundary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">Ordenar</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Navbar;