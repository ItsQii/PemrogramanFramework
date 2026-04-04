import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "../../auth/register/register.module.scss";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // <-- TAMBAHAN: State untuk menampung pesan error
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
      <h1 className={style.register__title}>Halaman Register</h1>
      {error && <p className={style.register__error}>{error}</p>}
      
      <div className={style.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.register__form__item}>
            <label
              htmlFor="email"
              className={style.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.register__form__item__input}
            />
          </div>

          <div className={style.register__form__item}>
            <label
              htmlFor="fullname"
              className={style.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
              className={style.register__form__item__input}
            />
          </div>

          <div className={style.register__form__item}>
            <label
              htmlFor="password"
              className={style.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={style.register__form__item__input}
            />
          </div>

          <button type="submit" className={style.register__form__item__button}>
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <br />
        <p className={style.register__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;