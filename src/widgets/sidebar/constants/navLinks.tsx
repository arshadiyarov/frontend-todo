import { NotepadText, Smile, Timer } from "lucide-react";
import { NavLinkType } from "../model/NavLinkType";

export const navLinks: NavLinkType[] = [
  {
    id: 0,
    label: "Welcome",
    href: "/",
    icon: <Smile />,
  },
  {
    id: 1,
    label: "Tasks",
    href: "/tasks",
    icon: <NotepadText />,
  },
  {
    id: 2,
    label: "Pomodoro",
    href: "/pomodoro",
    icon: <Timer />,
  },
];
