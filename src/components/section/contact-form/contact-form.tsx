"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fields } from "@/data/contact-field";
import { FormData } from "@/type/type";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="w-full max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6"
      >
        {fields.map((field) => (
          <motion.div key={field.id} variants={itemVariants}>
            <Label
              htmlFor={field.id}
              className="text-sm font-semibold text-gray-700 mb-2 block"
            >
              {field.label}
            </Label>
            {field.isTextarea ? (
              <Textarea
                id={field.id}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.requiredMessage })}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400 resize-none h-32 shadow-sm"
              />
            ) : (
              <Input
                id={field.id}
                type={field.type || "text"}
                placeholder={field.placeholder}
                {...register(field.id, {
                  required: field.requiredMessage,
                  ...(field.id === "email" && {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  }),
                })}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400 shadow-sm"
              />
            )}
            {errors[field.id] && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors[field.id]?.message}
              </motion.p>
            )}
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="text-center">
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}