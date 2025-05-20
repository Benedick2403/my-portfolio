export default function EducationsUI({year, course, school}){
    return(
        <>
            <div className="w-96 flex flex-col gap-1 p-6 rounded-lg [&_p]:text-sm [&_h1]:text-lg [&_h1]:font-semibold bg-[#2f27ce33] shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
                <p>{year}</p>
                <h1>{course}</h1>
                <p>{school}</p>
            </div>
        </>
    );
}