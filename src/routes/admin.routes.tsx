import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element)
    acc.push({
      path: item.path,
      element: item.element,
    });

  if (item.children)
    item.children.forEach((children) => {
      acc.push({
        path: children.path,
        element: children.element,
      });
    });

  return acc;
}, []);

export const sidebarOptions = adminPaths.reduce((acc: TSidebar[], item) => {
  if (item.name && item.path)
    acc.push({
      key: item.path,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });

  if (item.children)
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((item) => ({
        key: item.path,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      })),
    });

  return acc;
}, []);

console.log(sidebarOptions);
