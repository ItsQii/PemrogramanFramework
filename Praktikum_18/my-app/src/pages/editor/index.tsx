import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const EditorPage = () => {
  const { data, status }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading") {
      if (!data || (data?.user?.role !== "editor" && data?.user?.role !== "admin")) {
        router.push("/"); 
      }
    }
  }, [status, data, router]);

  if (status === "loading" || (data?.user?.role !== "editor" && data?.user?.role !== "admin")) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <h2>Memeriksa hak akses...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Halaman Khusus Editor</h1>
      <p>
        Selamat datang, {data?.user?.role} <strong>{data?.user?.fullname || data?.user?.name}</strong>!
      </p>
      <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#1e293b", color: "white", borderRadius: "10px", display: "inline-block" }}>
        <h3>Dashboard Sistem</h3>
        <p>Hanya akun dengan role <strong>editor</strong> atau <strong>admin</strong> yang bisa melihat halaman ini.</p>
      </div>
    </div>
  );
};

export default EditorPage;