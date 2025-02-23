// src/router/globalRouter.tsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import Home from "@/pages/home";

// 二级路由框架页面采用懒加载方式
const Entry = lazy(() => import("@/pages/entry"));

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spin />}>
              <Entry />
            </Suspense>
          }
        >
          {/* 定义Entry二级路由 */}
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
