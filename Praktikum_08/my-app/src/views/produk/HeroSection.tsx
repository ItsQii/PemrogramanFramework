// Terima props onRefresh dari Produk.tsx
const HeroSection = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <section className="bg-blue-600 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Ini Halaman Produk
      </h1>
      <p className="text-lg mb-6">
        adalah pokoknya
      </p>
      
      {/* Tombol Refresh di dalam Hero */}
      <button 
        onClick={onRefresh}
        className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-all shadow-md"
      >
        Refresh Data
      </button>
    </section>
  );
};

export default HeroSection;