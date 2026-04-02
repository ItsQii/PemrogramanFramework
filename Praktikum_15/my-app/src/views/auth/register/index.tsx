import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "../../auth/register/register.module.scss";

const TampilanRegister = () => {
  // --- MULAI BAGIAN TAMBAHAN DARI GAMBAR ---
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value, 
      password: event.target.password.value,
    };

    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Halaman Register</h1>
      <div className={style.register__form}>
        {/* TAMBAHAN: Mengubah action="" menjadi onSubmit={handleSubmit} */}
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
              name="fullname" // (Catatan: Huruf F saya buat kecil agar cocok dengan event.target.fullname.value di atas)
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
              name="password" // (Huruf P saya buat kecil agar cocok dengan kode di atas)
              placeholder="Password"
              className={style.register__form__item__input}
            />
          </div>

          <button type="submit" className={style.register__form__item__button}>
            {/* TAMBAHAN: Teks tombol berubah otomatis saat loading */}
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