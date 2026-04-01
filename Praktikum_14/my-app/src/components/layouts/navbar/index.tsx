import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default Navbar;