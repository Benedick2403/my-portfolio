export default function ExperiencesUI({company, role, date, description}){
    return(
        <>
            <div className="flex flex-col md:w-96 shadow-md p-6 rounded-md bg-[#4b42cd33] text-[#0a081e] transition-transform hover:-translate-y-1 hover:shadow-xl">
                <h1 className="text-lg font-semibold">{company}</h1>
                <h3 className="text-base text-[#2a19e6]">{role}</h3>
                <p className="text-xs">{date}</p>
                <p className="text-sm mt-3">{description}</p>
            </div>
        </>
    );
}