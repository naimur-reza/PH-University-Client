import { adminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";

const Sidebar = () => {
  const role = "admin";

  const USER_ROLE = {
    STUDENT: "student",
    FACULTY: "faculty",
    ADMIN: "admin",
  };

  let sidebarItems;

  switch (role) {
    case USER_ROLE.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, USER_ROLE.ADMIN);
      break;
    case USER_ROLE.FACULTY:
      sidebarItems = sidebarGenerator(facultyPaths, USER_ROLE.FACULTY);
      break;
    case USER_ROLE.STUDENT:
      sidebarItems = sidebarGenerator(studentPaths, USER_ROLE.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
      <div className=" text-white font-semibold text-xl flex items-center justify-center h-14">
        PH-University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
