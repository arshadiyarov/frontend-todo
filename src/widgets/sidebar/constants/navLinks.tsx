import { Banana, History, ListTodo, Smile } from "lucide-react";
import { NavLinkType } from "../model/NavLinkType";

export const navLinks: NavLinkType[] = [
  {
    id: 1,
    label: "Welcome",
    href: "/",
    icon: <Smile />,
  },
  {
    id: 2,
    label: "Tasks",
    href: "/tasks",
    icon: <ListTodo />,
  },
  {
    id: 3,
    label: "History",
    href: "/history",
    icon: <History />,
  },
  {
    id: 4,
    label: "Pomodoro",
    href: "/pomodoro",
    icon: <Banana />,
  },
];
