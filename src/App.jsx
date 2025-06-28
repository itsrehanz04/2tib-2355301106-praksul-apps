export default function App() {
  const praksul = [
    { pertemuan: 3, judul: "Form Luas Segitiga" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Praktikum Susulan Apps
        </h1>
        <div className="flex flex-col gap-4">
          {praksul.map((p) => (
            <a
              key={p.pertemuan}
              href={`/pertemuan${p.pertemuan}`}
              className="block text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl transition hover:shadow-lg"
            >
              Pertemuan {p.pertemuan}: {p.judul}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
