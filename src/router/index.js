import adminRoutes from "./admin";
import userRoutes from "./user";

export default [
  {
    path: "/",
    redirect: "/admin"
  },
  adminRoutes,
  userRoutes
];
