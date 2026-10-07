import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import UserProfileForm from "../components/user/UserProfileForm"

const appRoutes = [
  {
    path: "/SignupPage",

    element: <SignupPage />,
  },
  {
    path: "/LoginPage",

    element: <LoginPage />,
  },

   {
    path: "/UserProfileForm",

    element: <UserProfileForm/>,
  },
];

export default appRoutes;
