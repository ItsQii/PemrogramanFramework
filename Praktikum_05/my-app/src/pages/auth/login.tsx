import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
  const router = useRouter();

  const handleLogin = () => {
    sessionStorage.setItem("login", "true");
    router.push("/produk");
  };

  return (
    <div className={styles.login}>
      <h1>Halaman Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default halamanLogin;