import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
registerApplication(
  "@sumit/header-react",
  () => System.import("@sumit/header-react"),
  (location) => true
);

registerApplication(
  "@sumit/dashboard-angular",
  () => System.import("@sumit/dashboard-angular"),
  (location) => true
);
registerApplication(
  "@sumit/footer-vue",
  () => System.import("@sumit/footer-vue"),
  (location) => true
);
start();
applications.forEach(registerApplication);
layoutEngine.activate();
