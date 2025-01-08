
export default function Background() {
    return (
      <div className="z-0">
        {/* Diamond Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-100"></div>
  
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
  
        {/* Image Fill */}
        <div className="absolute inset-0 bg-cover bg-center bg-bg-overlay opacity-10"></div>
      </div>
    );
  }
  