import styles from "./navbar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__brand}>MyApp</div>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data?.user?.fullname || data?.user?.name}
              {data?.user?.image && (
                <img
                  src={data.user.image}
                  alt={data?.user?.fullname || data?.user?.name}
                  className={styles.navbar__user__image}
                  referrerPolicy="no-referrer"
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
