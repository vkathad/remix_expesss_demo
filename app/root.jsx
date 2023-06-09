import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import sharedStyles from "~/styles/shared.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// export function ErrorBoundary({ error }) {
//   return (
//     <Document title="An error occurred">
//       <main>
//         <Error title="An error occurred">
//           <p>
//             {error.message || 'Something went wrong. Please try again later.'}
//           </p>
//           <p>
//             Back to <Link to="/">safety</Link>.
//           </p>
//         </Error>
//       </main>
//     </Document>
//   );
// }

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
