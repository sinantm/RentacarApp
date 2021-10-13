import Index from "./views";
import Profile from "./views/examples/Profile";
import Register from "./views/examples/Register";
import UsersTables from "./views/examples/Users";
import Login from "./views/examples/Login";
import {
  faCarSide,
  faUser,
  faTable,
  faUserPlus,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

export interface PropsTypes {
  path: string;
  name: string;
  icon: object;
  component: () => void;
  layout: string;
}

var routes: Array<PropsTypes> = [
  {
    path: "/index",
    name: "Araçlar",
    icon: faCarSide,
    component: Index,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Profil",
    icon: faUser,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/accounts",
    name: "Kullanıcılar",
    icon: faTable,
    component: UsersTables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: faUserPlus,
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: faUserEdit,
    component: Register,
    layout: "/auth",
  },
];
export default routes;
