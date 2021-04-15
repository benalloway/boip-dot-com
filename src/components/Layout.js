import React from "react";

import { Navigation } from "./Navigation";

function Layout({ children, className }) {
  return (
    <div>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export { Layout };
