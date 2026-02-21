import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/work", "routes/work.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/playground", "routes/playground.tsx"),
] satisfies RouteConfig;
