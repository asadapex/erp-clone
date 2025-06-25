import { Groups, Home, Major, Students, Teachers } from "../pages/Dashboard";

export const path = {
  home: "/",
  signIn: "/sign-in",
  major: "/major",
  students: "/students",
  teachers: "/teachers",
  groups: "/groups",
  notFound: "*",
};

export const dashboardRoutes = [
  {
    id: 1,
    title: "Major",
    path: path.major,
    element: <Major />,
  },
  {
    id: 2,
    title: "Teachers",
    path: path.teachers,
    element: <Teachers />,
  },
  {
    id: 3,
    title: "Students",
    path: path.students,
    element: <Students />,
  },
  {
    id: 4,
    title: "Groups",
    path: path.groups,
    element: <Groups />,
  },
  {
    id: 5,
    title: "Page not found",
    path: path.notFound,
    element: <h1>Page not found</h1>,
  },
  {
    id: 6,
    title: "Home",
    path: path.home,
    element: <Home />,
  },
];
