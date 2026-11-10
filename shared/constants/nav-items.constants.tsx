import { CalendarDaysIcon, ChartColumn, HomeIcon, User2 } from "lucide-react";

export const NAV_ITEMS = [
  {
    path: "/",
        label: "Главная",
    icon: <HomeIcon/>
  },
  {
    path: "/progress",
        label: "Прогресс",
    icon: <ChartColumn/>
  },
  {
    path: "/history",
        label: "История",
    icon: <CalendarDaysIcon/>
  },
  {
    path: "/profile",
        label: "Профиль",
    icon: <User2/>
  },
];