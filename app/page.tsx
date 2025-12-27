import Aurora from "./aurora";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <div className="w-full justify-center flex pt-4 px-4">
          <nav className="max-w-6xl w-full flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <img src="/logo.ico" alt="Logo" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Drichsearch</span>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-8">
              <a href="/" className="text-white hover:opacity-80 transition">Home</a>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-8 py-16 mt-16">
          {/* Badge */}
          <div className="mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">∿∿</span>
              <span>New browser</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center max-w-4xl mb-8 leading-tight">
            Un navigateur web<br />puissant et rapide
          </h1>

          {/* CTA Buttons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/Drichdev/mybrowser/releases/download/v0.2/Drichsearch-mac.app.zip"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition flex items-center gap-2"
            >
              <span>↓</span>
              Télécharger Mac
            </a>
            <a
              href="https://github.com/Drichdev/mybrowser/releases/download/v0.2/Drichsearch-windows.exe"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white/50 transition flex items-center gap-2"
            >
              <span>↓</span>
              Télécharger Windows
            </a>
          </div>
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/Drichdev/mybrowser"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white/50 transition"
            >
              Repositories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
