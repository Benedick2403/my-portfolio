import SocialsData from "../Data/SocialsData";
import { FaPhone, FaMailBulk, FaSearchLocation} from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <div className="flex justify-between px-6 flex-wrap border border-black rounded-t-lg p-4 text-[#F8F8FF] bg-slate-900 w-screen gap-5 [&_h1]:font-semibold [&_h1]:text-yellow-600">
                <div className="flex items-center gap-5">
                    <div className="w-32 h-32 p-2 overflow-hidden border-4 border-gray-300 rounded-full">
                        <img src="./My Picture.jpg" className="object-cover object-top w-full h-full transition-all duration-300 rounded-full hover:scale-110" alt="Benedick's Profile"></img>
                    </div>
                    <div>
                        <h1 className="text-xl ">Benedick M. Mercado</h1>
                        <p>Game Developer | FrontEnd</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-semibold">SOCIALS</h1>
                    <SocialsData/>
                </div>

                <div className="[&_p]:flex [&_p]:items-center [&_p]:gap-2">
                    <h1 className="font-semibold">CONTACT ME</h1>
                    <p><FaMailBulk/> mercadobenedick024@gmail.com</p>
                    <p><FaPhone/> +63 912-111-6602</p>
                    <p><FaSearchLocation/>Tarlac City, Tarlac, 2300, Philippines</p>
                </div>
            </div>
        </>
    );
}