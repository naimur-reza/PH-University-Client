import AcademicDepartment from "../pages/Admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/Admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/Admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/Admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/Admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/Admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/userManagement/CreateStudent";
import StudentsData from "../pages/Admin/userManagement/StudentsData";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students",
        element: <StudentsData />,
      },
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
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
