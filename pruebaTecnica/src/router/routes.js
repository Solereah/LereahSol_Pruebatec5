export const routes = [
  {
    path: "/",
    redirect: "/#!home",
  },
  {
    path: "/#!home",
    component: "landing-home",
    action: async () => await import("../pages/landing-home/index.js"),
  },

  {
    path: "/products",
    component: "create-products",
    action: async () => await import("../pages/create-products/index.js"),
  },
];
