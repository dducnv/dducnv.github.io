import Link from "next/link";

const audioAssets = [
  {
    modes: ["Classic Mode"],
    trackName: "Title Theme (8-Bit Style)",
    author: "Kat",
    source: "OpenGameArt.org",
    sourceUrl: "http://opengameart.org/content/title-theme-8-bit-style",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    description: "Main theme for Classic Mode.",
  },
  {
    modes: ["Survival"],
    trackName: "Menu Theme (Free Retro Game Music Pack)",
    author: "Olivia Cirilla",
    source: "Itch.io",
    sourceUrl: "https://oliviacirilla.itch.io/retro-game-music-pack",
    license: "Royalty Free (Credit Required)",
    licenseUrl: "https://oliviacirilla.itch.io/retro-game-music-pack",
    description: "Classic sounds inspired by the golden age of gaming. Visit: oliviacirilla.com",
  },
  {
    modes: ["Time Attack"],
    trackName: "Flat (8-bit Gaming Music) INSTRUMENTAL",
    author: "SoundUniverseStudio (Pixabay)",
    source: "Pixabay",
    sourceUrl: "https://pixabay.com/music/video-games-flat-8-bit-gaming-music-instrumental-211547/",
    license: "Pixabay Content License",
    licenseUrl: "https://pixabay.com/service/license/",
    description: "Fast-paced track for Time Attack Mode.",
  },
  {
    modes: ["Color Match", "Block Blast"],
    trackName: "Bad Speech (16-bit Adventure Pack)",
    author: "Snabisch",
    source: "Itch.io", // Đổi sang Itch.io nơi hiển thị rõ License Royalty Free
    sourceUrl: "https://makeagame.bandcamp.com/track/bad-speech",
    license: "Royalty Free / CC BY", // Cập nhật lại License chính xác
    licenseUrl: "https://makeagame.bandcamp.com/track/bad-speech",
    description: "Background music for Color Match Mode and Block Blast Mode.",
  },
  {
    modes: ["Gravity Flux"],
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
    <div className="m-auto max-w-3xl p-4 md:p-6 text-gray-900">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Credits & Licenses
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          <strong>Tessera: Classic Block Puzzle</strong> is made possible by
          wonderful creators in the community. Below is the attribution for the
          audio assets used in the game.
        </p>
      </div>

      {/* Assets List */}
      <div className="space-y-4">
        {audioAssets.map((asset, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-200 pl-4 py-3 bg-white"
          >
            <div className="flex flex-col gap-2">
              <div className=" items-center gap-2">

                <h3 className="text-base font-semibold text-gray-900">
                  {asset.trackName}
                </h3>
                {asset.modes.map((mode, index) => (
                  <span key={index} className="text-xs text-gra y-500 bg-gray-100 px-2 py-1 rounded mt-2 mb-3 mr-2">
                    {mode}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-700">
                by <span className="font-medium">{asset.author}</span>
              </p>

              <div className="flex flex-col gap-1 text-sm text-gray-700">
                <div className="flex gap-1 flex-wrap">
                  <span className="text-gray-500">Source:</span>
                  <Link
                    href={asset.sourceUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {asset.source}
                  </Link>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <span className="text-gray-500">License:</span>
                  <Link
                    href={asset.licenseUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {asset.license}
                  </Link>
                </div>
              </div>

              <p className="text-sm text-gray-600">{asset.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-xs text-gray-500">
        All assets belong to their respective original owners. Tessera: Classic
        Block Puzzle uses these assets in accordance with their stated licenses.
      </div>
    </div>
  );
};

export default CreditsPage;