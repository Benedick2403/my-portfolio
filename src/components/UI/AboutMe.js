import DownloadablesData from "../Data/DownloadablesData";
import SocialsData from "../Data/SocialsData";

export default function AboutMe (){
    return(
        <>
        <div className="flex flex-col justify-between w-full h-full max-h-full mb-5 lg:w-1/2 lg:mb-0">
            <div>
                <h1 className="md:text-5xl text-3xl font-semibold text-yellow-500">Benedick M. Mercado</h1>
                <h3 className="md:text-lg sm:text-sm mt-1 mb-3 text-gray-800">Game Developer | FrontEnd</h3>
            </div>

            <div className="flex flex-col justify-between w-full h-full max-h-full gap-4 md:text-base sm:text-sm [&_b]:text-[#4195c2] text-gray-700">
                <p>I am a fourth-year Bachelor of Science in Computer Science student at Tarlac State University, with a strong passion for both web and game development. Over the past few years, I have dedicated myself to learning and building projects using various technologies and platforms. My experience includes developing interactive applications and games using <b>Unity</b> and <b>Godot</b>, where I primarily work with <b>C#</b> for scripting. I’ve also built responsive and visually appealing websites using <b>HTML5</b>, <b>CSS</b>, <b>React</b>, and <b>Tailwind</b>, which has allowed me to sharpen both my front-end development and design skills.</p>
                <p>In addition to my technical expertise, I am well-versed in using <b>Microsoft Office</b> applications such as <b>Word</b>, <b>Excel</b>, and <b>PowerPoint</b>, which I frequently use for documentation, data handling, and presentations. These tools help me effectively communicate ideas, organize project information, and prepare professional reports. My goal is to continue improving my development skills while exploring innovative solutions that blend creativity and technology in both web and game design.</p>
            </div>

            <div>
                <DownloadablesData/>
            </div>

            <div>
                <SocialsData/>
            </div>
        </div>
        </>
    );
}