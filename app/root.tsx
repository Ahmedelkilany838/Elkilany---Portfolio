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
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

import SmoothScroll from "components/SmoothScroll";
import GlobalCursor from "components/Animation/GlobalCursor";
import Navbar from "components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router";

import Preloader from "components/Preloader";
import { useState, useEffect } from "react";

// Heavy premium ease
const premiumEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function App() {
  const location = useLocation();
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <GlobalCursor />
      <Navbar />

      <SmoothScroll>
        <div className="w-full min-h-screen bg-black relative overflow-x-hidden">
          <div className="grid grid-cols-1 grid-rows-1">
            <AnimatePresence initial={false}>
              <motion.div
                key={location.pathname}
                className="col-start-1 row-start-1 w-full bg-[#050505]"
                initial={{ y: "100vh", zIndex: 10 }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  zIndex: 10,
                  transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                }}
                exit={{
                  y: 0,
                  scale: 0.9,
                  opacity: 0,
                  zIndex: 0,
                  transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                }}
              >
                {outlet}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
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
