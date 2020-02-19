import adminRoutes from "./admin";
import userRoutes from "./user";

const routes = [
  {
    path: "/",
    redirect: "/admin"
  },
  adminRoutes,
  userRoutes
];

/** routes 转为了一维数组 */
export const tileRoutes = (() => {
  const initList = routes => {
    return routes.reduce((accoum, item) => {
      const { name, title, path, childrens } = item;
      if (name && title) {
        accoum = [...accoum, { name, title, path }];
      }
      if (childrens) accoum = [...accoum, ...initList(childrens)];
      return accoum;
    }, []);
  };
  return initList(routes);
})();

export default routes;
