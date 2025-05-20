export default function EmailSection(){
    return(
        <>
        <div className="px-8 py-4 mb-8 lg:py-24 lg:px-32">
            <div className="rounded-lg border-4 shadow-neutral-900 border-[#121212] px-12 py-8 flex flex-col-reverse lg:flex-row items-center gap-4">
                <div className="flex flex-col gap-4 lg:pl-24 text-[#121212]">
                    <h2 className="text-lg font-bold lg:text-xl">Did I catch your interest?</h2>
                    <p className="w-full text-sm lg:w-3/4 lg:text-base">If you have any questions, ideas, or just want to chat about my projects, feel free to reach out.  
                    Let’s connect and maybe even share a coffee while we talk about creating something awesome together!</p>
                    <a className="px-8 py-2 font-medium transition-all ease-in-out border-2 rounded-lg border-[#4f46e5] bg-[#4f46e5] hover:bg-[#f9f9f9] text-[#f9f9f9] hover:text-[#4f46e5] w-fit hover:translate-x-5">
                        Email Me
                    </a>
                </div>

            </div>
        </div>
        </>
    );
}