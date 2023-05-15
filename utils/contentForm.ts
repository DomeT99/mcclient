import { ContentForm } from "~/components/ContentForm.vue";

export const signUpForm: ContentForm[] = [
  {
    label: "Name",
  },
  {
    label: "Surname",
  },
  { label: "Email" },
  { label: "Phone" },
  { label: "Password" },
  { label: "Confirm Password" },
];

export const loginForm: ContentForm[] = [
  { label: "Email" },
  { label: "Password" },
];
