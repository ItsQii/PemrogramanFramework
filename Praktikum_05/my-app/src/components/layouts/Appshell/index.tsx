import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="layout">
      <Navbar />

      <main className="content">
        {children}
      </main>

      <footer className="footer">
        © 2026 Praktikum Framework
      </footer>
    </div>
  );
};

export default AppShell;