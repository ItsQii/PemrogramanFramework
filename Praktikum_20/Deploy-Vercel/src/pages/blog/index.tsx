import Link from "next/link";

const BlogIndex = () => {
  return (
    <div>
      <h1>Halaman Blog</h1>
      <ul>
        <li><Link href="/blog/artikel-satu">Artikel Satu</Link></li>
        <li><Link href="/blog/artikel-dua">Artikel Dua</Link></li>
      </ul>
    </div>
  );
};

export default BlogIndex;