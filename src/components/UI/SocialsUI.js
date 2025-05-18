export default function SocialsUI({icon_social: Icon, link_social}){
    return(   
            <a
                href={link_social}
                target="_blank"
                rel="noopener noreferrer"
            >
            <div>
                <Icon size={30}/>
            </div>  

            </a>
    );
}