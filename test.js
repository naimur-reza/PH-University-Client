const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element)
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });

//   if (item.children)
//     item.children.forEach((children) => {
//       acc.push({
//         path: children.path,
//         element: children.element,
//       });
//     });

//   return acc;
// }, []);

// console.log(newArray);

// const sidebarOptions = adminPaths2.reduce((acc, item) => {
//   console.log(acc);
//   if (item.name && item.path)
//     acc.push({
//       key: item.path,
//       label: item.name,
//     });

//   if (item.children)
//     acc.push({
//       children: item.children.map((item) => ({
//         key: item.path,
//         label: item.name,
//       })),
//     });

//   return acc;
// }, []);

// console.log(sidebarOptions);
