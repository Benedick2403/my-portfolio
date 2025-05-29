export default function SocialsUI({icon_social: Icon, link_social}){
    return(   
            <a
                href={link_social}
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className="transition-transform hover:translate-y-[-5px]">
                <Icon size={30}/>
            </div>  

            </a>
    );
}