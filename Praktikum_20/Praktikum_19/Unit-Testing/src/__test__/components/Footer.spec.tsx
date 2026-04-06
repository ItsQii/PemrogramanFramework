import { render, screen } from "@testing-library/react"
import Footer from "@/components/layouts/Footer"
import "@testing-library/jest-dom"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: "unauthenticated",
  })),
}))

describe("Footer Component", () => {
  it("renders footer correctly and meets all requirements", () => {
    const { container } = render(<Footer />)
    
    expect(container).toMatchSnapshot()

    const titleElement = screen.getByTestId("footer-title")
    
    expect(titleElement.textContent).toBe("Framework Based Programming")

    expect(screen.getByText(/With Great Power/i)).toBeInTheDocument()
  })
})