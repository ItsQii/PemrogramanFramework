import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/produk");
  };

  return (
    <div>
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