import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "../styles/app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import SmoothScroll from "components/SmoothScroll";
import GlobalCursor from "components/Animation/GlobalCursor";
import Navbar from "components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

// Heavy premium ease
const premiumEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalCursor />
      <Navbar />

      {/* Orange Wipe - Global Overlay Sequence */}
      {/* Runs independent of page lifecycle to bridge the gap */}
      <AnimatePresence>
        <motion.div
          key={location.pathname + "-wipe"}
          initial={{ y: "100%" }}
          animate={{
            y: ["100%", "0%", "-100%"],
            transition: {
              duration: 1.5,
              times: [0, 0.4, 1], // 40% time to cover, then exit
              ease: premiumEase,
            }
          }}
          className="fixed inset-0 z-50 bg-[#ff4d29] pointer-events-none"
        />
      </AnimatePresence>

      <SmoothScroll>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="w-full min-h-screen bg-black"
            initial={location.pathname === "/" ? { opacity: 0 } : { y: "30%", opacity: 0 }}
            animate={location.pathname === "/"
              ? { opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
              : {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2
                }
              }
            }
            exit={location.pathname === "/"
              ? { opacity: 0, transition: { duration: 0.5 } }
              : {
                y: "-30%",
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeIn"
                }
              }
            }
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
