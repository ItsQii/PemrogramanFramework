const Dashboard = () => {
  return (
    <div className="min-h-screen text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Dashboard
      </h1>

      <p className="mb-6 text-gray-600">
        Ini adalah halaman dashboard website saya.
      </p>

      <img
        src="/user-exp.jpg"
        alt="User Experience"
        className="w-96 mx-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default Dashboard;