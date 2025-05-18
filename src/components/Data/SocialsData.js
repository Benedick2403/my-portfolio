import { FaFacebook, FaInstagram} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import SocialsUI from '../UI/SocialsUI';

const socialsData = [
    {
        icon_social: FaFacebook,
        link_social: "https://www.facebook.com/bmercado24/",
    },
    {
        icon_social: FaInstagram,
        link_social: "https://www.instagram.com/neben_2/",
    },
    {
        icon_social: SiGmail,
        link_social: "https://mail.google.com/mail/u/0/?fs=1&to=mercadobenedick024@gmail.com&su=Let+me+know&tf=cm",
    },
];

export default function SocialsData(){
    return(
        <>
        <div className='flex gap-5 mt-5'>
            {socialsData.map((socials, index) =>(
                <SocialsUI
                key={index}
                icon_social={socials.icon_social}
                link_social={socials.link_social} 
                />
            ))}
        </div>
        </>
    );
}