export default function SkillsUI({ title, description, icon: Icon, background }) {
    const isBlack = background === 'primary';
    console.log(`Rendering: ${title}, background: ${background}, isBlack: ${isBlack}`);

    return (
        <div
            className={`flex flex-col-reverse lg:flex-row md:w-[35rem] justify-between border-2 border-neutral-900 shadow-[0px_10px_0px_.1px_rgba(12,12,12,1)] sha rounded-lg flex-wrap lg:p-16 p-8 lg:text-left text-justify lg:flex-nowrap ${
                isBlack ? 'bg-white text-[#0a081e]' : 'bg-[#18181b] text-[#f9f9f9]'
            }`}
        >
            <div className="flex flex-col">
                <h1 className="lg:text-2xl text-xl font-bold">{title}</h1>
                <p className="lg:w-4/5 lg:text-sm mt-2">{description}</p>
            </div>

            <div className="flex lg:flex-col content-center justify-center">
                <Icon size={80}/>
            </div>
        </div>
    );
}
