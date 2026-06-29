import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./contador";
import { expect, it } from "vitest";

it("Empieza en cero y sube al pulsar en sumar", ()=>
{
    render(<Contador/>)
    expect(screen.getByText("Cuenta: 0")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Sumar"))
    expect(screen.getByText("Cuenta: 1")).toBeInTheDocument()
})