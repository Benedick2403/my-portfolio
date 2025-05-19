import { File } from "lucide-react";

export default function DownloadablesUI({name_dl, link_dl}){
    return(
        <a

            href={link_dl}
            download
            className="border border-blue-600 rounded-md"
        >
            <div className=" hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2">
                {name_dl}   
                <File size={20} className="flex items-center justify-center"/>

            </div>
            
        </a>
    );
}