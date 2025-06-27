import { Menu } from "antd";
import { useContext } from "react";
import { Context } from "../context/Context";
import { DashboardNavList } from "../hooks/path";

const NavbarCarusel = () => {
  const { showNavbar } = useContext(Context);
  return (
    <div style={{ width: "100%" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={showNavbar}
        items={DashboardNavList}
      />
    </div>
  );
};

export default NavbarCarusel;
