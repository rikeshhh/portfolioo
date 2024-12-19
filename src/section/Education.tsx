import { Education } from "@/data/InfoData";
import { EducationData } from "@/type/type";

export default function MyEducation() {
  const educationList: EducationData["Education"] = Education;
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <h2 className="text-4xl">My Education </h2>
      {educationList.map((item) => (
        <div key={item.institution} className="p-8 flex flex-col gap-4 ">
          <h2 className="text-blue-600">{item.institution}</h2>
          <p>{item.degree}</p>
          <p>{item.duration}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
