import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "@/components/layouts/Footer";
import { Roboto } from "next/font/google";
import { useState } from "react";

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

  return (
    <main
      className={roboto.className}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* 🔥 TOP TRIGGER */}
      {/* 🔥 TOP TRIGGER */}
      {!disableNavbar.includes(pathname) && (
        <div
          className="top-trigger"
          onMouseEnter={() => setShowNav(true)}
          onMouseLeave={() => setShowNav(false)}
        />
      )}

      {/* 🔥 NAVBAR */}
      {!disableNavbar.includes(pathname) && (
        <Navbar active={showNav} setShowNav={setShowNav} />
      )}

      {/* 🔥 CONTENT */}
      <div
        style={{
          flex: 1,
          paddingTop: showNav ? "70px" : "0px",
          transition: "padding 0.3s ease",
        }}
      >
        {children}
      </div>

      {/* 🔥 FOOTER */}
      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
