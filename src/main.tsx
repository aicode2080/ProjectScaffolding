import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routers from "./router/globalRouter.tsx";
import { store } from "@/store";
import { Provider } from "react-redux";
import "@/common/styles/frame.less";
import { detectOS } from '@/common/js/commonLib'
// 判断操作系统
document.body.setAttribute('os', detectOS())
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </StrictMode>
);