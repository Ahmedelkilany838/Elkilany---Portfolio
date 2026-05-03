import {
  isRouteErrorResponse,
  Links,
  Meta,
  Scripts,
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

        {/* Primary Meta */}
        <meta name="author" content="Ahmed Elkilany" />
        <meta name="theme-color" content="#050505" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KILANY" />
        <meta property="og:title" content="Kilany | Brand, Advertising & AI Visual Production" />
        <meta property="og:description" content="Ahmed ElKilany designs brand identities, advertising visuals, AI-powered production assets, retouching, packaging, and social campaign systems." />
        <meta property="og:url" content="https://elkilany-portfolio.vercel.app" />
        <meta property="og:image" content="https://elkilany-portfolio.vercel.app/images/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kilany | Brand, Advertising & AI Visual Production" />
        <meta name="twitter:description" content="Ahmed ElKilany designs brand identities, advertising visuals, AI-powered production assets, retouching, packaging, and social campaign systems." />
        <meta name="twitter:image" content="https://elkilany-portfolio.vercel.app/images/hero.png" />

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
import Navbar from "components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

import Preloader from "components/Preloader";
import { useState } from "react";

function RouteWrapper({ children, locationKey }: { children: React.ReactNode, locationKey: string }) {
  return (
    <div
      key={locationKey}
      style={{
        backgroundColor: "var(--site-page-bg, #050505)",
      }}
      className="w-full min-h-screen"
    >
      {children}
    </div>
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
