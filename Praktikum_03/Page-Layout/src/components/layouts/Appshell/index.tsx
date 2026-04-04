import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <div className="navbar">Navbar</div>

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