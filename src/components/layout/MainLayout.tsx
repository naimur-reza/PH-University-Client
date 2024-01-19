import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
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
    <Layout className="h-[100vh]">
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
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
