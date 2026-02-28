import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={`${styles.container} bg-gray-100`}>
      <div className={`${styles.card} rounded-lg`}>
        <h1 className={`${styles.title} text-2xl font-bold`}>
          Halaman Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          className={`${styles.input} border rounded-md p-2 mb-3`}
        />

        <input
          type="password"
          placeholder="Password"
          className={`${styles.input} border rounded-md p-2`}
        />

        <button
          className={`${styles.button} bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-3`}
        >
          Register
        </button>

        <Link
          href="/auth/login"
          className={`${styles.link} text-blue-600 hover:underline mt-4 block`}
        >
          Kembali ke Halaman Login
        </Link>
      </div>
    </div>
  );
};

export default TampilanRegister;