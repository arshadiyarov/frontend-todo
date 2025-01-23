import { History, ListTodo, Smile, Timer } from "lucide-react";
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
    icon: <ListTodo />,
  },
  {
    id: 2,
    label: "History",
    href: "/history",
    icon: <History />,
  },
  {
    id: 3,
    label: "Pomodoro",
    href: "/pomodoro",
    icon: <Timer />,
  },
];
