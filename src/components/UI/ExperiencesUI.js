export default function ExperiencesUI({company, role, date, description}){
    return(
        <>
            <div className="flex flex-col md:w-96 border border-black p-6 rounded-md">
                <h1 className="text-lg font-semibold">{company}</h1>
                <h3 className="text-base text-yellow-500">{role}</h3>
                <p className="text-xs">{date}</p>
                <p className="text-sm text-gray-600 mt-3">{description}</p>
            </div>
        </>
    );
}