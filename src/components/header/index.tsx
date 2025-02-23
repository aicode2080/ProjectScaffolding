import { Card } from "antd";
import "./header.less";
import logo from "@/common/images/logo.svg";
function Header() {
  return (
    <Card className="M-header" bordered={false}>
      <div className="header-wrapper">
        <div className="logo-con">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </Card>
  );
}

export default Header;
