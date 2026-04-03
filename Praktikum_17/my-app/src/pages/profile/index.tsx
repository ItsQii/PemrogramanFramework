import { useSession } from "next-auth/react";
import styles from "./profile.module.scss"; 

const ProfilePage = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Profile</h1>
      <h1 className={styles.title}>Selamat Datang {data?.user?.fullname || data?.user?.name}</h1>
    </div>
  );
};

export default ProfilePage;