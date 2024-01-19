import { TRoute, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) => {
  const router = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element)
      acc.push({
        path: item.path,
        element: item.element,
      });

    if (item.children)
      item.children.forEach((children) => {
        acc.push({
          path: children.path!,
          element: children.element,
        });
      });

    return acc;
  }, []);

  return router;
};
