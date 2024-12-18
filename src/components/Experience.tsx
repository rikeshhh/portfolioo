import { Experience } from "@/data/InfoData";
import { ExperienceData } from "@/type/type";

export default function MyExperience() {
  const experienceList: ExperienceData["Experience"] = Experience;

  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-center border-b-[1px] border-gray-400">
      <h2 className="text-4xl">My Experience</h2>
      {experienceList.map((item) => (
        <div key={item.company} className="flex flex-col w-full">
          {item.roles.map((role, index) => (
            <div key={index} className="p-8 flex flex-col gap-4 ">
              <h2 className="text-red-600">{item.company}</h2>
              <h3>{role.title}</h3>
              <p>{role.duration}</p>
              <p>{role.type}</p>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
