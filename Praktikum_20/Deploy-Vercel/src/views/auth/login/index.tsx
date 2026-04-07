import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { authServices } from "@/services/auth";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const payload = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const res = await authServices.login(payload);

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <div className={style.login}>
      <div className={style.login__container}>

        {/* KIRI */}
       <div className={style.login__left}></div>

        {/* KANAN */}
        <div className={style.login__right}>
          <h1 className={style.login__title}>LOGIN PAGE</h1>

          <div className={style.login__form}>
            {error && <p className={style.login__error}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className={style.login__form__item}>
                <label className={style.login__form__item__label}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={style.login__form__item__input}
                />
              </div>

              <div className={style.login__form__item}>
                <label className={style.login__form__item__label}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={style.login__form__item__input}
                />
              </div>

              <button type="submit" className={style.login__form__item__button}>
                {isLoading ? "Loading..." : "Login"}
              </button>

              <br /><br />

              <button
                type="button"
                onClick={() => authServices.socialLogin("google", callbackUrl)}
                className={`${style.login__form__item__button} ${style.login__google}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : (
                  <div className={style.login__google__content}>
                    <svg height="20" width="20" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Sign in with Google</span>
                  </div>
                )}
              </button>

              <br />

              <button
                type="button"
                onClick={() => authServices.socialLogin("github", callbackUrl)}
                className={`${style.login__form__item__button} ${style.login__github}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : (
                  <div className={style.login__github__content}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12..."/>
                    </svg>
                    <span>Sign in with Github</span>
                  </div>
                )}
              </button>
            </form>

            <br />

            <p className={style.login__form__item__text}>
              Tidak Punya Akun?{" "}
              <Link href="/auth/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tampilanlogin;