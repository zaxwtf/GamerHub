import { render, screen, fireEvent } from "@testing-library/react";
import { Layout } from "./Layout";
import { expect, it } from "vitest";

it("Empieza en cero y sube al pulsar en sumar", ()=>
{
    render(<Layout/>)
    expect(screen.getByText("Cuenta: 0")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Sumar"))
    expect(screen.getByText("Cuenta: 1")).toBeInTheDocument()
})