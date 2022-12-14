import Home from "../components/home/Home";
import Jobs from "../components/jobs/Jobs";
import Profile from "../components/profile/Profile";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";

const ROUTES = [
  {
    key: 1,
    title: "Home",
    element: <Home />,
    path: "/home",
    isProtected: true,
  },
  {
    key: 2,
    title: "Profile",
    element: <Profile />,
    path: "/profile",
    isProtected: true,
  },
  {
    key: 3,
    title: "Jobs",
    element: <Jobs />,
    path: "/jobs",
    isProtected: true,
  },
  {
    key: 4,
    title: "Signup",
    element: <Signup />,
    path: "/signup",
    isProtected: false,
  },
  {
    key: 5,
    title: "Login",
    element: <Login />,
    path: "/",
    isProtected: false,
  },
];

export default ROUTES;
