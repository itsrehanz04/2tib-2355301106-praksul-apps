import { useState } from "react";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

export default function Pertemuan3() {
  const [alas, setAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [luas, setLuas] = useState(null);

  const hitungLuas = (e) => {
    e.preventDefault();
    const hasil = 0.5 * parseFloat(alas) * parseFloat(tinggi);
    setLuas(hasil);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full relative">
        <Link
          to="/"
          className="absolute top-4 left-4 text-blue-700 font-medium underline hover:text-blue-900"
        >
          ← Kembali
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Pertemuan 3 - Hitung Luas Segitiga
        </h1>

        <form
          onSubmit={hitungLuas}
          className="flex flex-col gap-4"
        >
          <TextInput label="Alas" value={alas} onChange={(e) => setAlas(e.target.value)} />
          <TextInput label="Tinggi" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition hover:shadow-lg"
          >
            Hitung Luas
          </button>
        </form>

        <div className="mt-6 text-center">
          {luas === null ? (
            <p className="text-gray-600 italic">Silahkan isi alas & tinggi, lalu tekan tombol hitung.</p>
          ) : (
            <p className="text-2xl font-bold text-green-700">Luas Segitiga: {luas}</p>
          )}
        </div>

        <table className="mt-8 w-full text-left border rounded-xl overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4">Materi</th>
              <th className="py-3 px-4">Penerapan</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-t">
              <td className="py-3 px-4">TailwindCSS</td>
              <td className="py-3 px-4">Styling form & halaman</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">Reusable Component</td>
              <td className="py-3 px-4">Komponen TextInput</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">React State</td>
              <td className="py-3 px-4">State alas & tinggi</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">Conditional Rendering</td>
              <td className="py-3 px-4">Pesan sebelum & sesudah submit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
