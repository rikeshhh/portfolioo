import { Education } from "@/data/InfoData";
import { EducationData } from "@/type/type";
import { motion } from "framer-motion";

export default function MyEducation() {
  const educationList: EducationData["Education"] = Education;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold text-gray-800 mb-6 col-span-full"
      >
        My Education
      </motion.h2>

      {educationList.map((item) => (
        <motion.div
          key={item.institution}
          variants={itemVariants}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {item.institution}
          </h3>
          <p className="text-gray-700 font-medium">{item.degree}</p>
          <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
