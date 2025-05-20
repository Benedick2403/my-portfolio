import DownloadablesUI from "../UI/DownloadablesUI";

const downloadablesData = [
    {
        name_dl: "My Resume",
        link_dl: "/MERCADO_B - RESUME.pdf"

    },
    {
        name_dl: "My CV",
        link_dl: "/MERCADO_B - CV.pdf"

    },
];

export default function DownloadablesData(){
    return(
        <div className="flex gap-5 mt-5">
            {downloadablesData.map((downloadables, index) => 
                <DownloadablesUI
                key={index}
                name_dl={downloadables.name_dl}
                link_dl={downloadables.link_dl}
                />
            )}
        </div>
    );
}

