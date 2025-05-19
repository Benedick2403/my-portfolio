import ExperiencesUI from "../UI/ExperiencesUI";

const experienceData = [
    {
        company: "Local Government Unit (LGU)",
        role: "Intern",
        date: "June, 2025 - July 2025",
        description: " Assisted with encoding beneficiary information and performing data cleaning to ensureaccuracy and consistency of records. Also contributed to the development of a system for a dialysis center using TypeScript, gaining hand-on experience in real-world application development and local government process.",
    },
];

export default function ExperiencesData(){
    return(
        <>
            <h1 className="mt-5">Work Experience</h1>
            <div className="flex flex-wrap mt-3 w-full gap-5 md:mx-7">
                {experienceData.map((experience, index) =>
                    <ExperiencesUI
                    key={index}
                    company={experience.company}
                    role={experience.role}
                    date={experience.date}
                    description={experience.description}
                    />
                )}
            </div>
        </>
    );
}