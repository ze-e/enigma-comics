const imagePath = "/bg_overlay.jpg";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Diamond Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-100"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Image Fill */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
    </div>
  );
}
