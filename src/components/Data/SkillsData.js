import SkillsUI from "../UI/SkillsUI";
import { Gamepad, Code2 } from "lucide-react";

const skillsData = [
     {
        title:"Web Development",
        description: "Let’s turn your ideas into stunning websites. I design and build clean, responsive, and user-friendly interfaces that look great on any device. From layout to launch, I make sure your site not only stands out but also delivers a smooth and engaging experience.",
        icon: Code2,
    },
    {
        title: "Game Development",
        description: "Let’s bring your game ideas to life. From pixel-perfect assets to fully playable levels, I build engaging, responsive, and fun game experiences. Whether it’s crafting mechanics, designing levels, or polishing gameplay, I turn concepts into games that players love to explore.",
        icon: Gamepad,
    },

    
];

export default function SkillsData(){
    return(
        <>
            <div className="flex Md:mx-7 flex-wrap justify-evenly gap-8 w-full">
                {skillsData.map((skills, index) =>
                <SkillsUI
                key={index}
                title={skills.title}
                description={skills.description}
                icon={skills.icon}
                background={index % 3 === 0 ? 'primary' : 'secondary'}
                />
                )}
            </div>
        </>
    );
}