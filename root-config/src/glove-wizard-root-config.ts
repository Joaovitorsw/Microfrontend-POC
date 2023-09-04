import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";
import template from "./template.html";

const routes = constructRoutes(template);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication(
  "@glove-wizard/header-react",
  (config) => System.import("@glove-wizard/header-react"),
  (location) => true
);

registerApplication(
  "@glove-wizard/dashboard-angular",
  (config) => System.import("@glove-wizard/dashboard-angular"),
  (location) => true
);

registerApplication(
  "@glove-wizard/footer-vue",
  (config) => System.import("@glove-wizard/footer-vue"),
  (location) => true
);

start();

layoutEngine.activate();
