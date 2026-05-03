import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/works", "routes/work.tsx"),
  route("/works/:slug", "routes/work-detail.tsx"),
  route("/services", "routes/services.tsx"),
  route("/ai-lab", "routes/ai-lab.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/playground", "routes/playground.tsx"),
  // Resource route — no component, handles POST /api/contact
  route("/api/contact", "routes/api.contact.ts"),
] satisfies RouteConfig;
