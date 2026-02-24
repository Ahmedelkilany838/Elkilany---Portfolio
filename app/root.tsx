import {
  isRouteErrorResponse,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useOutlet,
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
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { useLocation } from "react-router";
import { useRef, useLayoutEffect } from "react";

import Preloader from "components/Preloader";
import { useState } from "react";

// Heavy premium ease
const premiumEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

// Page wrapper for overlapping transition
function RouteWrapper({ children, locationKey }: { children: React.ReactNode, locationKey: string }) {
  const isPresent = useIsPresent();
  const exitTopRef = useRef<number>(0);

  // Capture current scroll ONLY once when it starts exiting
  if (!isPresent && exitTopRef.current === 0 && typeof window !== "undefined") {
    exitTopRef.current = window.scrollY;
  }

  // Ensure window goes to top synchronously before paint
  useLayoutEffect(() => {
    if (!isPresent) {
      window.scrollTo(0, 0);
    }
  }, [isPresent]);

  return (
    <motion.div
      key={locationKey}
      initial={{ y: "100vh", zIndex: 50, opacity: 1 }}
      animate={{ y: 0, zIndex: 50, opacity: 1 }}
      exit={{ y: "-10vh", opacity: 0, filter: "brightness(0.2)", zIndex: 10 }}
      transition={{ duration: 1.4, ease: premiumEase }}
      style={{
        position: isPresent ? "relative" : "fixed",
        top: isPresent ? 0 : -exitTopRef.current,
        left: 0,
        right: 0,
        backgroundColor: "#050505",
        pointerEvents: isPresent ? "auto" : "none",
        transformOrigin: "center top",
        willChange: "transform, opacity",
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);



  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <GlobalCursor />
      <Navbar />

      <SmoothScroll>
        <div className="w-full min-h-screen bg-black relative">
          <AnimatePresence>
            <RouteWrapper key={location.pathname} locationKey={location.pathname}>
              {outlet}
            </RouteWrapper>
          </AnimatePresence>
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
