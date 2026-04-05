import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "@/components/layouts/Footer";
import { Roboto } from "next/font/google";

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

  return (
    <main 
      className={roboto.className} 
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      {!disableNavbar.includes(pathname) && <Navbar />}
      
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;