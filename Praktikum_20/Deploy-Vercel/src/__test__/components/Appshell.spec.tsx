import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import AppShell from "@/components/layouts/Appshell";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

describe("AppShell Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly for guest user", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Konten Guest</div></AppShell>);
    expect(screen.getByText("Konten Guest")).toBeInTheDocument();
  });

  it("renders correctly for authenticated user", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Rifqi" } },
      status: "authenticated",
    });

    render(<AppShell><div>Konten Member</div></AppShell>);
    expect(screen.getByText("Konten Member")).toBeInTheDocument();
  });

  it("hides navbar on auth pages", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/auth/login" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Halaman Login</div></AppShell>);

    const trigger = document.querySelector(".top-trigger");
    expect(trigger).not.toBeInTheDocument();
  });

  it("shows navbar on hover trigger", () => {
    jest.useFakeTimers();

    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const trigger = document.querySelector(".top-trigger") as HTMLElement;

    act(() => {
      fireEvent.mouseEnter(trigger);
      jest.advanceTimersByTime(200);
    });

    const content = trigger.parentElement?.querySelector("div:nth-child(3)");
    expect(content).toHaveStyle("padding-top: 70px");

    jest.useRealTimers();
  });

  it("hides navbar on mouse leave", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const trigger = document.querySelector(".top-trigger") as HTMLElement;

    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    const content = trigger.parentElement?.querySelector("div:nth-child(3)");
    expect(content).toHaveStyle("padding-top: 0px");
  });

  it("keeps navbar visible when hovering navbar", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const navbarWrapper = document.querySelector(
      '[style*="z-index: 999"]'
    ) as HTMLElement;

    fireEvent.mouseEnter(navbarWrapper);

    const content = navbarWrapper.parentElement?.querySelector("div:nth-child(3)");
    expect(content).toHaveStyle("padding-top: 70px");
  });

  it("clears timeout on mouse leave", () => {
    jest.useFakeTimers();

    const clearSpy = jest.spyOn(global, "clearTimeout");

    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const trigger = document.querySelector(".top-trigger") as HTMLElement;

    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    expect(clearSpy).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("does not call clearTimeout when timerRef is null", () => {
    const clearSpy = jest.spyOn(global, "clearTimeout");

    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const trigger = document.querySelector(".top-trigger") as HTMLElement;

    fireEvent.mouseLeave(trigger);

    expect(clearSpy).not.toHaveBeenCalled();
  });

  // ✅ TEST TAMBAHAN (INI YANG NUTUP 100%)
  it("clears timeout when hovering navbar before timer ends", () => {
    jest.useFakeTimers();

    const clearSpy = jest.spyOn(global, "clearTimeout");

    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AppShell><div>Test</div></AppShell>);

    const trigger = document.querySelector(".top-trigger") as HTMLElement;
    const navbarWrapper = document.querySelector(
      '[style*="z-index: 999"]'
    ) as HTMLElement;

    fireEvent.mouseEnter(trigger); // mulai timer
    fireEvent.mouseEnter(navbarWrapper); // cancel via navbar

    expect(clearSpy).toHaveBeenCalled();

    jest.useRealTimers();
  });
});