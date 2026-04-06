import Link from "next/link";
import { useRouter } from "next/router";

const SettingPage = () => {
  const router = useRouter();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Halaman Settings</h1>
      <p>Pusat pengaturan konfigurasi aplikasi.</p>
    </div>
  );
};

export default SettingPage;