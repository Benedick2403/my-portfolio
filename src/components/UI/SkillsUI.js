export default function SkillsUI({title, description, icon}){
    return(
        <>
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:w-[35rem] justify-evenly border border-red-600 flex-wrap p-6 lg:flex-nowrap">
                <div className="flex flex-col">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                {icon}
            </div>
        </>
    );
}