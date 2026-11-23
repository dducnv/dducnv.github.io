"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";

interface StorySlide {
  id: number;
  image: string;
  imageAlt: string;
  hugMargin: string;
  boxClass?: string;
  imgClass?: string;
  title: string;
  content: string;
  signature?: string;
}

const slides: StorySlide[] = [
  {
    id: 0,
    image: "/hello-kitty/hk_bow_hug.png",
    imageAlt: "Hello Kitty ôm nơ hồng",
    hugMargin: "mb-3",
    title: "Gửi Phương Anh",
    content:
      "Biết là em đang giận anh, nhưng anh vẫn muốn gửi đến em một lời xin lỗi thật chân thành.\n\nMấy hôm nay yên ắng lại, anh cứ nghĩ mãi thấy mình hôm trước vụng về và vội vàng.",
  },
  {
    id: 1,
    image: "/hello-kitty/hk_cry.png",
    imageAlt: "Hello Kitty khóc nhận lỗi",
    hugMargin: "-mb-2.5 sm:-mb-3",
    title: "Anh đã quá hấp tấp.",
    content:
      "Cảm xúc quý mến em là thật, nhưng anh lại vội vàng để nó chạy trước thời gian. Vì sợ vuột mất cảm xúc ban đầu, anh cuống quýt đẩy nhịp độ lên quá nhanh mà quên mất rằng hai đứa mới chỉ vừa bắt đầu quen biết. Sự nôn nóng đó vừa vụng về, vừa vô tình tạo áp lực và cảm giác thiếu tự nhiên không đáng có cho em.",
  },
  {
    id: 2,
    image: "/hello-kitty/hk_plead.png",
    imageAlt: "Hello Kitty mắt long lanh lắng nghe",
    hugMargin: "-mb-2.5 sm:-mb-3",
    boxClass: "w-44 h-36 sm:w-48 sm:h-40 max-h-[26vh]",
    imgClass: "object-contain w-40 sm:w-44 h-auto max-h-36 sm:max-h-40",
    title: "Một chút chân thành gửi lại ở đây.",
    content:
      "Điều em cần là một người đủ kiên nhẫn để tìm hiểu, lắng nghe và tôn trọng thế giới riêng của em, chứ không phải sự dồn dập chỉ để thỏa mãn cảm xúc nhất thời của anh. Đáng lẽ anh nên chậm lại và lắng nghe em nhiều hơn.",
  },
  {
    id: 3,
    image: "/hello-kitty/hk_pout.png",
    imageAlt: "Hello Kitty chu môi năn nỉ",
    hugMargin: "",
    title: "Lần này anh rút kinh nghiệm thật rồi!",
    content:
      "Anh hứa từ giờ sẽ đi chậm lại, không có chuyện vội vàng hấp tấp nữa đâu.\n\nBao giờ Phương Anh thấy hết giận và tâm trạng vui vẻ trở lại, cho anh cơ hội mời em một buổi đi chơi để tạ lỗi nhé!",
    signature: "— Đức 🌸",
  },
];

function HelloKittyBow({
  className = "w-5 h-3.5",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const fill = light ? "#FFFFFF" : "#FF6B9D";
  const stroke = light ? "#BE185D" : "#7A1C3D";
  const inner = light ? "#FFE4EE" : "#FF9EBE";
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      className={`block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M15.5 10.4C12 4.8 4.5 3.4 2.8 8.2C1.4 12.1 3.7 18.0 8.5 18.8C11.5 19.3 14 16.8 15.5 14.0"
        fill={fill}
        stroke={stroke}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 10.4C24 4.8 31.5 3.4 33.2 8.2C34.6 12.1 32.3 18.0 27.5 18.8C24.5 19.3 22 16.8 20.5 14.0"
        fill={fill}
        stroke={stroke}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.2" cy="11.8" r="2.1" fill={inner} />
      <circle cx="26.8" cy="11.8" r="2.1" fill={inner} />
      <ellipse
        cx="18"
        cy="12"
        rx="4"
        ry="4.2"
        fill={fill}
        stroke={stroke}
        strokeWidth="2.1"
      />
    </svg>
  );
}

export default function ThuPhuongAnhStory() {
  // Trạng thái mở thư: 'closed' -> 'flap-open' -> 'letter-up' -> 'opened'
  const [openPhase, setOpenPhase] = useState<"closed" | "flap-open" | "letter-up" | "opened">("closed");
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    if (current < slides.length - 1) {
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const prevSlide = useCallback(() => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
  }, [current]);

  // Chạm nửa trái để quay lại, chạm nửa phải để sang trang tiếp như Story
  const handleStoryTap = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("[data-progress-bar]")) {
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX < rect.width / 2) {
        prevSlide();
      } else {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  const slide = slides[current];

  // Kịch bản mở thư thực tế: Mở nắp -> Lá thư trượt lên -> Mở rộng trọn vẹn
  const triggerOpenEnvelope = () => {
    if (openPhase !== "closed") return;

    setOpenPhase("flap-open");

    setTimeout(() => {
      setOpenPhase("letter-up");
    }, 450);

    setTimeout(() => {
      setOpenPhase("opened");
    }, 1150);
  };

  // Đóng thư lại vào phong bì
  const handleCloseEnvelope = () => {
    setOpenPhase("closed");
    setCurrent(0);
  };

  // Hạt trái tim & hoa bay lững lờ ở nền
  const floatingHearts = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 6.5 + 4) % 94}%`,
      size: 14 + (i % 4) * 6,
      duration: 6 + (i % 5) * 1.6,
      delay: (i * 0.5) % 5,
      opacity: 0.25 + (i % 3) * 0.15,
      symbol: i % 4 === 0 ? "💖" : i % 4 === 1 ? "🌸" : i % 4 === 2 ? "💕" : "✨",
    }));
  }, []);

  return (
    <div className="w-full min-h-[100dvh] h-[100dvh] bg-[#FFF0F5] flex items-center justify-center font-sans antialiased select-none p-0 sm:p-4 overflow-hidden relative">

      {/* --- HIỆU ỨNG TRÁI TIM & HOA BAY BỒNG BỀNH TOÀN MÀN HÌNH --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingHearts.map((h) => (
          <span
            key={h.id}
            className="absolute pointer-events-none select-none animate-floatUp"
            style={{
              left: h.left,
              bottom: "-40px",
              fontSize: `${h.size}px`,
              opacity: h.opacity,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              animationIterationCount: "infinite",
            }}
          >
            {h.symbol}
          </span>
        ))}
      </div>

      {/* ==================== MÀN HÌNH: PHONG BÌ 3D TƯƠNG TÁC ==================== */}
      {openPhase !== "opened" && (
        <div className="relative z-20 w-full max-w-sm px-4 flex flex-col items-center text-center my-auto">

          {/* Lời tựa nhẹ nhàng phía trên */}
          <div className="mb-16 sm:mb-[72px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-pink-200 text-pink-700 text-xs font-medium shadow-sm animate-pulse">
            <span>Một lá thư nhỏ gửi Phương Anh</span>
            <HelloKittyBow className="w-4 h-3" />
          </div>

          {/* Khung 3D của chiếc phong bì */}
          <div
            className="relative w-72 h-48 sm:w-80 sm:h-52 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            style={{ perspective: "1000px" }}
            onClick={triggerOpenEnvelope}
          >
            {/* Hello Kitty ôm mép trên mặt trước phong bì */}
            <div
              className={`absolute -top-[54px] sm:-top-[62px] left-1/2 -translate-x-1/2 z-40 w-24 sm:w-28 pointer-events-none filter drop-shadow-[0_4px_6px_rgba(244,114,182,0.25)] transition-all duration-300 ${openPhase === "closed"
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 -translate-y-2"
                }`}
            >
              <Image
                src="/hello-kitty/hk_peek.png"
                alt="Hello Kitty ôm phong bì"
                width={112}
                height={82}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            {/* 1. MẶT LƯNG PHONG BÌ */}
            <div className="absolute inset-0 bg-[#F8B4C4] rounded-2xl shadow-xl shadow-pink-300/40 border border-white/60" />

            {/* 2. LÁ THƯ BÊN TRONG (TRƯỢT LÊN KHI MỞ) */}
            <div
              className={`absolute left-3 right-3 bg-white/95 rounded-xl p-4 shadow-md border border-pink-100 flex flex-col items-center justify-center gap-1.5 transition-all duration-700 ease-out z-10 ${openPhase === "letter-up"
                ? "-translate-y-28 scale-105 shadow-2xl opacity-100"
                : openPhase === "flap-open"
                  ? "-translate-y-4 opacity-90"
                  : "top-3 bottom-3 translate-y-0 opacity-80"
                }`}
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/hello-kitty/hk_bow_hug.png"
                  alt="Hello Kitty"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-1 bg-pink-200 rounded-full" />
              <div className="w-16 h-1 bg-pink-100 rounded-full" />
              <span className="text-[10px] text-pink-500 font-semibold mt-1 inline-flex items-center gap-1">
                <span>Gửi Phương Anh</span>
                <HelloKittyBow className="w-3.5 h-2.5" />
              </span>
            </div>

            {/* 3. TÚI PHONG BÌ PHÍA TRƯỚC (CÁC CÁNH GẤP ĐÈ LÊN LÁ THƯ) */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #F8B4C4 0%, #F5A3B6 100%)",
                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)",
              }}
            />
            {/* Đáy phong bì gập lên */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: "linear-gradient(to top, #F293A9 0%, transparent 70%)",
                clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
              }}
            />

            {/* 4. NẮP PHONG BÌ (MỞ GẬP 3D LÊN TRÊN - BO GÓC TRÒN CHUẨN XÁC) */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-500 ease-in-out pointer-events-none ${openPhase !== "closed"
                ? "rotateX(180deg) z-0"
                : "rotateX(0deg) z-30"
                }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <svg
                viewBox="0 0 320 120"
                className="w-full h-full drop-shadow-sm"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F9BAC8" />
                    <stop offset="100%" stopColor="#F39BB0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 16 Q 0 0, 16 0 L 304 0 Q 320 0, 320 16 L 160 120 Z"
                  fill="url(#flapGrad)"
                />
              </svg>

              {/* Con dấu nơ Hello Kitty căn đúng tâm X của phong bì */}
              {openPhase === "closed" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 border-2 border-white shadow-md flex items-center justify-center hover:scale-110 transition-transform">
                    <HelloKittyBow className="w-6 h-4" light />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Dòng hướng dẫn dịu dàng */}
          <div className="mt-7 flex flex-col items-center gap-1.5 text-xs text-pink-700/80 font-medium">
            <span className="flex items-center gap-1">
              <span>Chạm vào phong bì để mở ra nhé</span>
              <span>✨</span>
            </span>
          </div>

        </div>
      )}

      {/* ==================== MÀN HÌNH: NỘI DUNG LÁ THƯ (TỐI ƯU CẢ MOBILE & DESKTOP) ==================== */}
      {openPhase === "opened" && (
        <div
          onClick={handleStoryTap}
          className="relative z-20 w-full max-w-md h-[100dvh] sm:h-[min(720px,92vh)] sm:rounded-[36px] overflow-hidden flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-[#FFF5F8] via-[#FFE8F0] to-[#FFDDE8] shadow-2xl border border-pink-200/90 animate-paperUnfold [-webkit-tap-highlight-color:transparent]"
        >

          {/* --- THANH TIẾN TRÌNH TRÊN ĐỈNH --- */}
          <div className="relative z-20 flex flex-col gap-1.5 flex-shrink-0">
            <div data-progress-bar className="flex gap-2 w-full">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className="h-1.5 flex-1 bg-pink-900/10 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => setCurrent(idx)}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${idx <= current ? "bg-pink-500 w-full" : "w-0"
                      }`}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-pink-700/80 px-1 pt-0.5">

              <span>
                {current + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* --- NỘI DUNG CHÍNH (HELLO KITTY 2D + THẺ KÍNH GẦN GŨI) --- */}
          <div
            key={slide.id}
            className="relative z-20 flex-1 flex flex-col items-center justify-center text-center my-auto px-1 sm:px-2 transition-all duration-300 min-h-0"
          >
            {/* Ảnh Hello Kitty 2D bám/tựa trực tiếp lên mép trên lá thư */}
            <div
              className={`relative z-10 ${slide.boxClass ?? "w-32 h-32 sm:w-36 sm:h-36 max-h-[22vh]"} ${slide.hugMargin} filter drop-shadow-[0_4px_6px_rgba(244,114,182,0.22)] flex items-end justify-center flex-shrink-0 pointer-events-none`}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                width={200}
                height={200}
                className={slide.imgClass ?? "object-contain max-h-32 sm:max-h-36 w-auto"}
                priority
              />
            </div>

            {/* Thẻ kính mờ chứa nội dung gộp liền mạch */}
            <div className="relative z-0 w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-7 border border-white/90 shadow-xl shadow-pink-200/50 flex flex-col gap-2.5 sm:gap-3 text-left max-h-[46vh] sm:max-h-[44vh] overflow-y-auto">
              <h2 className="text-base sm:text-lg font-bold text-rose-950 leading-snug flex items-center gap-1.5">
                <span>{slide.title}</span>
                {slide.id === 0 && <HelloKittyBow className="w-5 h-3.5 flex-shrink-0" />}
              </h2>

              <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed font-normal whitespace-pre-line">
                {slide.content}
              </p>

              {slide.signature && (
                <div className="text-right pt-1 font-semibold text-pink-600 text-xs sm:text-sm">
                  {slide.signature}
                </div>
              )}
            </div>
          </div>

          {/* --- FOOTER: HAI NÚT "QUAY LẠI" VÀ "CHẠM TIẾP" RÕ RÀNG (KHÔNG BỊ CHE KHUẤT) --- */}
          <div className="relative z-20 flex items-center justify-between pt-2 flex-shrink-0">
            {/* Nút Quay lại */}
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className={`px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${current === 0
                ? "opacity-30 cursor-not-allowed text-pink-400"
                : "bg-white/80 hover:bg-white text-pink-700 shadow-sm active:scale-95"
                }`}
            >
              <span>◄</span>
              <span>Quay lại</span>
            </button>

            {/* Nút Chạm tiếp / Xem lại */}
            {current === slides.length - 1 ? (
              <button
                onClick={() => setCurrent(0)}
                className="px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold text-xs shadow-md shadow-pink-300/50 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>Xem lại từ đầu</span>
                <span>↺</span>
              </button>
            ) : (
              <button
                onClick={nextSlide}
                className="px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold text-xs shadow-md shadow-pink-300/50 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>Chạm tiếp</span>
                <span>►</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Animation CSS cho trái tim bay & hiệu ứng bung lá thư */}
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-880px) scale(1.15) rotate(20deg);
            opacity: 0;
          }
        }
        .animate-floatUp {
          animation-name: floatUp;
          animation-timing-function: ease-in-out;
        }

        @keyframes paperUnfold {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          65% {
            opacity: 0.95;
            transform: translateY(-6px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-paperUnfold {
          animation: paperUnfold 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
