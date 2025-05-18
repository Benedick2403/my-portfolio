import { Download } from "lucide-react";

export default function DownloadablesUI({name_dl, link_dl}){
    return(
        <a

            href={link_dl}
            download
            className="border border-blue-500 rounded-md"
        >
            <div className="flex flex-row justify-evenly gap-3 p-3">
                <Download size={20} className="flex items-center justify-center"/>

                {name_dl}
            </div>
            
        </a>
    );
}