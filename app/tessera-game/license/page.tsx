import Link from "next/link";

const audioAssets = [
  {
    mode: "Classic Mode",
    trackName: "Title Theme (8-Bit Style)",
    author: "Kat",
    source: "OpenGameArt.org",
    sourceUrl: "http://opengameart.org/content/title-theme-8-bit-style",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    description: "Main theme for Classic Mode.",
  },
  {
    mode: "Survival Mode",
    trackName: "Menu Theme (Free Retro Game Music Pack)",
    author: "Olivia Cirilla",
    source: "Itch.io",
    sourceUrl: "https://oliviacirilla.itch.io/retro-game-music-pack",
    license: "Royalty Free (Credit Required)",
    licenseUrl: "https://oliviacirilla.itch.io/retro-game-music-pack",
    description: "Classic sounds inspired by the golden age of gaming. Visit: oliviacirilla.com",
  },
  {
    mode: "Time Attack Mode",
    trackName: "Flat (8-bit Gaming Music) INSTRUMENTAL",
    author: "SoundUniverseStudio (Pixabay)",
    source: "Pixabay",
    sourceUrl: "https://pixabay.com/music/video-games-flat-8-bit-gaming-music-instrumental-211547/",
    license: "Pixabay Content License",
    licenseUrl: "https://pixabay.com/service/license/",
    description: "Fast-paced track for Time Attack Mode.",
  },
  {
    mode: "Color Match Mode",
    trackName: "Bad Speech (16-bit Adventure Pack)",
    author: "Snabisch",
    source: "Itch.io", // Đổi sang Itch.io nơi hiển thị rõ License Royalty Free
    sourceUrl: "https://snabisch.itch.io/16-bit-adventure-music-pack",
    license: "Royalty Free / CC BY", // Cập nhật lại License chính xác
    licenseUrl: "https://snabisch.itch.io/16-bit-adventure-music-pack",
    description: "Background music for Color Match Mode.",
  },
  {
    mode: "Gravity Flux Mode",
    trackName: "Boss 1 - Looped - Modern", // Hoặc tên file cụ thể bạn dùng
    author: "BBunker",
    source: "Itch.io",
    sourceUrl: "https://bbunker.itch.io/8-bit-music-anthology-nes-edition",
    license: "CC BY-ND 4.0", // Sửa lại chính xác tên giấy phép
    licenseUrl: "https://creativecommons.org/licenses/by-nd/4.0/", // Link tới nội dung giấy phép
    description: "Dramatic track for Gravity Flux Mode. Unmodified content.",
  },
];

export const metadata = {
  title: "Tessera - Credits & Licenses",
  description:
    "Attribution and licenses for audio assets used in Tessera: Classic Block Puzzle.",
};

const CreditsPage = () => {
  return (
    <div className="m-auto max-w-3xl p-4 md:p-6 text-gray-900 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Credits & Licenses
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          <strong>Tessera: Classic Block Puzzle</strong> is made possible by
          wonderful creators in the community. Below is the attribution for the
          audio assets used in the game.
        </p>
      </div>

      {/* Assets List */}
      <div className="space-y-6">
        {audioAssets.map((asset, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200 bg-gray-50"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {asset.trackName}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    by <span className="font-semibold text-gray-900">{asset.author}</span>
                  </p>
                </div>
                <span className="text-xs font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full whitespace-nowrap h-fit">
                  {asset.mode}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-1">
                <div className="flex gap-2">
                  <span className="text-gray-500 font-medium">Source:</span>
                  <Link
                    href={asset.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline truncate"
                  >
                    {asset.source}
                  </Link>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 font-medium">License:</span>
                  <Link
                    href={asset.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline truncate"
                  >
                    {asset.license}
                  </Link>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic border-t border-gray-200 pt-3 mt-1">
                {asset.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-center text-gray-400">
        All assets belong to their respective original owners. Tessera: Classic
        Block Puzzle uses these assets in accordance with their stated licenses.
      </div>
    </div>
  );
};

export default CreditsPage;