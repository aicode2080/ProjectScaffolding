import { Card } from "antd";
import PageHeaderWrapper from "@/components/pageHeaderWrapper";
import "./home.less";
import MenuCompent from "@/components/menu";
import MessageList from "@/components/message-list";

function Home() {
  return (
    <div className="homeContainer">

    <MenuCompent />
    <MessageList />
      {/* <PageHeaderWrapper title="首页" subtitle="(副标题)" />
      <section className="home">
        <Card title="说明"></Card>
      </section> */}
    </div>
  );
}

export default Home;
