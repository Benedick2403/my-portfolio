export default function EducationsUI({year, course, school}){
    return(
        <>
            <div className="w-96 flex flex-col gap-1 border border-red-600 p-6 rounded-lg [&_p]:text-sm [&_h1]:text-lg [&_h1]:font-semibold">
                <p>{year}</p>
                <h1>{course}</h1>
                <p>{school}</p>
            </div>
        </>
    );
}