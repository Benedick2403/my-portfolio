import EducationsUI from "../UI/EducationsUI";

const educationsData = [
    {
        year: "2021-2025",
        course: "Bachelor of Science in Computer Science",
        school: "Tarlac State University",
    },
    {
        year: "2019-2021",
        course: "TVL - Information Communication Technology",
        school: "Tarlac National High School",
    },

];

export default function EducationsData(){
    return(
        <>
        <div>
            <div className="h-0.5 w-full bg-black mb-3"></div>
            <h1 className="font-semibold lg:text-2xl text-xl w-fit">Educational Background</h1>
            <div className="flex mt-3 md:mx-7 flex-wrap gap-5 w-full">
                {educationsData.map((educations, index) =>
                    <EducationsUI
                    key={index}
                    year={educations.year}
                    course={educations.course}
                    school={educations.school}
                    />
                )}
            </div>
        </div>
        </>
    );
}