import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("should render main elements correctly", () => {
    render(<Home />);

    // Cek Judul & Deskripsi
    expect(screen.getByText(/Praktikum Next.js Pages Router/i)).toBeInTheDocument();
    expect(screen.getByText(/Mahasiswa D4 Pengembangan Web/i)).toBeInTheDocument();

    // Cek Tombol
    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /blog/i })).toBeInTheDocument();
  });

  it("should render the 'New' badge", () => {
    render(<Home />);
    expect(screen.getByText(/Configure Budget for Each Project/i)).toBeInTheDocument();
  });
});