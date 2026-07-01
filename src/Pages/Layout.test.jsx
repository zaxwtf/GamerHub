import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Layout } from "./Layout";
import { AuthProvider } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function renderLayoutWithRouter(initialPath = "/") {
  return render(
    <AuthProvider>
      <ThemeContext.Provider value={{ theme: "light", setTheme: () => {} }}>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<div>Inicio page</div>} />
              <Route path="videogames" element={<div>Videojuegos page</div>} />
              <Route path="about" element={<div>Acerca de page</div>} />
              <Route path="register" element={<div>Registro page</div>} />
              <Route path="login" element={<div>Login page</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

describe("Layout navigation", () => {
  it.each([
    ["Inicio", "Inicio page"],
    ["Videojuegos", "Videojuegos page"],
    ["Acerca de", "Acerca de page"],
    ["Registro", "Registro page"],
    ["Login", "Login page"],
  ])("redirige correctamente a %s", (linkText, expectedText) => {
    renderLayoutWithRouter("/");

    fireEvent.click(screen.getByRole("link", { name: linkText }));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});