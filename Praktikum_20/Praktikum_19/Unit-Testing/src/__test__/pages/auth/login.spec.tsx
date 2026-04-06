import { render, screen } from "@testing-library/react"
import LoginPage from "@/pages/auth/login"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import "@testing-library/jest-dom"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
  useSession: jest.fn(() => ({ data: null, status: "unauthenticated" })),
}))

describe("Login Page", () => {
  it("renders login page correctly", () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
    })

    const { container } = render(<LoginPage />)

    expect(screen.getByText(/Halaman Login/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument()
    expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign in with Github/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})