import { render, screen } from "@testing-library/react";
import ListaNotas from "./ListaNotas";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

beforeEach(()=>{
    vi.stubGlobal("fetch", vi.fn())
})

afterEach(()=>{
    vi.unstubAllGlobals()
})

it("pinta las notas que devuelve la api", async()=>{
    fetch.mockResolveValue({
        ok: true,
        json: async ()=>[
            {_id: "1", titulo: "comprar pan"},
            {_id: "2", titulo: "comprar agua"}
    ]
    })
    render(<ListaNotas/>)
    expect(screen.getByText("Cargando notas...")).toBeInTheDocument()
    expect(await screen.findByText("comprar pan")).toBeInTheDocument()
    expect(await screen.findByText("comprar agua")).toBeInTheDocument()
})


it("muestra un mensaje si la API falla", async()=>{
    fetch.mockResolveValue({
        ok: false,
        status: 500
    })
    render(<ListaNotas/>)
    expect(await screen.findByText(/error/i)).toBeInTheDocument()
})