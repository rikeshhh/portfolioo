import { Field } from "@/type/type";

export const fields: Field[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your name",
    requiredMessage: "Name is required",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Your email",
    type: "email",
    requiredMessage: "Email is required",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "What’s up?",
    requiredMessage: "Message is required",
    isTextarea: true,
  },
];
