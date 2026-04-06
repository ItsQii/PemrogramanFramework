import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "@/components/layouts/Footer";
import { Roboto } from "next/font/google";
import { useState, useRef } from "react";
const disableNavbar = ["/auth/login", "/auth/register", "/404", "/dashboard"];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  const [showNav, setShowNav] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowNav(true);
    }, 160);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowNav(false);
  };

  return (
    <main
      className={roboto.className}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {!disableNavbar.includes(pathname) && (
        <div
          className="top-trigger"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "40px",
            zIndex: 1000,
          }}
        />
      )}

      {!disableNavbar.includes(pathname) && (
        <div
          onMouseEnter={() => {
            if (timerRef.current) clearTimeout(timerRef.current);
            setShowNav(true);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Navbar active={showNav} setShowNav={setShowNav} />
        </div>
      )}

      <div
        style={{
          flex: 1,
          paddingTop: showNav ? "70px" : "0px",
          transition: "padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>

      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
