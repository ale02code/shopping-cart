import React, { createContext, useState } from "react";

export const CatalogVisibilityContext = createContext();

export function CatalogVisibilityProvider({ children }) {
  const [catalogVisibility, setCatalogVisibility] = useState(false);

  const catalogIsVisibility = () => {
    setCatalogVisibility(true);
  };

  const catalogNotVisibility = () => {
    setCatalogVisibility(false);
  };

  return (
    <CatalogVisibilityContext.Provider
      value={{
        catalogVisibility,
        catalogNotVisibility,
        catalogIsVisibility,
        setCatalogVisibility,
      }}
    >
      {children}
    </CatalogVisibilityContext.Provider>
  );
}
