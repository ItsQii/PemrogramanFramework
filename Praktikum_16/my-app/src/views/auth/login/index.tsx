import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  // Menambahkan logic callbackUrl dan state error sesuai gambar
  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Menggunakan NextAuth signIn sesuai gambar (line 45-50)
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      // Logic pengecekan response (line 53-59)
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      // Error handling (line 61-62)
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <>
      <div className={style.login}>
        <h1 className={style.login__title}>Halaman Login</h1>

        <div className={style.login__form}>
          
          {/* --- PENEMPATAN PESAN ERROR DI SINI --- */}
          {error && (
            <p className={style.login__error}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className={style.login__form__item}>
              <label
                htmlFor="email"
                className={style.login__form__item__label}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.login__form__item__input}
              />
            </div>

            <div className={style.login__form__item}>
              <label
                htmlFor="password"
                className={style.login__form__item__label}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={style.login__form__item__input}
              />
            </div>

            <button type="submit" className={style.login__form__item__button}>
              {isLoading ? "Loading..." : "login"}
            </button>
          </form>
          <br />
          <p className={style.login__form__item__text}>
            Tidak punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};


export default Tampilanlogin;