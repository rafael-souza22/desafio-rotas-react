import "./styles.css";
import { Outlet } from "react-router-dom";
import SubMenu from "../../../components/SubMenu";
export default function Products() {
  return (
    <main>
      <div className="container mt20">
        <SubMenu />
        <Outlet />
      </div>
    </main>
  );
}
