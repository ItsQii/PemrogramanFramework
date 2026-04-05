import styles from "./navbar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image"; 
import Script from 'next/dist/client/script';

type NavbarProps = {
  active?: boolean;
  setShowNav?: (val: boolean) => void;
};

const Navbar = ({ active, setShowNav }: NavbarProps) => {
  const { data }: any = useSession();

  return (
    <div
      className={`${styles.navbar} ${active ? styles.active : ""}`}
      onMouseEnter={() => setShowNav?.(true)}
      onMouseLeave={() => setShowNav?.(false)}
    >
      <div className={styles.navbar__brand} id="title"></div>

      <Script id="title-script" strategy='lazyOnload'>
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data?.user?.fullname || data?.user?.name}
              {data?.user?.image && (
                <Image
                  src={data.user.image}
                  alt={data?.user?.fullname || data?.user?.name}
                  className={styles.navbar__user__image}
                  width={40} 
                  height={40}
                />
              )}
            </div>
            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn(undefined, { callbackUrl: "/profile" })}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;