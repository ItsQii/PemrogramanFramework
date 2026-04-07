import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "../../auth/register/register.module.scss";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(""); 
    setIsLoading(true);
    
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value, 
      password: event.target.password.value,
    };

    if (!data.email) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    if (data.password.length < 6) {
    setError("Password must be at least 6 characters");
    setIsLoading(false);
    return;
  }


    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      // Sesuai gambar modul:
      setError(
        response.status === 400 ? "Email already exists" : "An error occurred"
      );
    }
  };

  return (
  <div className={style.register}>
    <div className={style.register__container}>

      {/* KIRI */}
      <div className={style.register__left}></div>

      {/* KANAN */}
      <div className={style.register__right}>
        <h1 className={style.register__title}>REGISTER PAGE</h1>

        <div className={style.register__form}>
          {error && <p className={style.register__error}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className={style.register__form__item}>
              <label className={style.register__form__item__label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.register__form__item__input}
              />
            </div>

            <div className={style.register__form__item}>
              <label className={style.register__form__item__label}>
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                className={style.register__form__item__input}
              />
            </div>

            <div className={style.register__form__item}>
              <label className={style.register__form__item__label}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={style.register__form__item__input}
              />
            </div>

            <button className={style.register__form__item__button}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </form>

          <br />

          <p className={style.register__form__item__text}>
            Sudah punya akun?{" "}
            <Link href="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default TampilanRegister;