export default function SkillsUI({title, description, icon}){
    return(
        <>
            <div className="flex gap-8 w-[35rem] justify-evenly border border-red-600 flex-wrap p-6">
                <div className="flex flex-col w-1/2">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                {icon}
            </div>
        </>
    );
}