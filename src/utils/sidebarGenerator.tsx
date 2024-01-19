import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarGenerator = (items: TUserPath[], role: string) => {
  const sidebarOptions = items.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path)
      acc.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((item) => ({
          key: item.name,
          label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarOptions;
};
