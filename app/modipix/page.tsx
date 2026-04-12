import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Modipix: 3D LUT Photo Editor',
    description: 'Download Modipix for iOS and Android. Professional-grade 3D LUT Color Grading and Photo Editing.',
};

export default function ModipixPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  overflow-hidden bg-[#0b0c10] text-white p-8 px-4 font-sans absolute top-0 left-0 right-0 bottom-0">
            {/* Background animated glows */}
            <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#8a2be2]/40 rounded-full blur-[80px] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse duration-[5000ms]"></div>
            <div className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#00d4ff]/30 rounded-full blur-[80px] bottom-0 right-[10%] translate-x-[20%] translate-y-[20%] -z-10 animate-pulse duration-[7000ms]"></div>

            {/* Main content card */}
            <main className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:p-14 bg-white/[0.04] border border-white/10 rounded-3xl backdrop-blur-2xl max-w-[440px] w-full shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] animate-in fade-in slide-in-from-bottom-8 duration-700">

                <div className="w-[130px] h-[130px] md:w-[140px] md:h-[140px] rounded-[32px] overflow-hidden mb-8 shadow-[0_16px_32px_rgba(0,0,0,0.5)] border-2 border-white/10 transition-all duration-400 hover:scale-105 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <Image
                        src="/modipix.png"
                        alt="Modipix App Logo"
                        width={280}
                        height={280}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl md:text-[2.5rem] font-extrabold mb-3 bg-gradient-to-br from-white to-indigo-200 bg-clip-text text-transparent leading-tight tracking-tight">
                    Modipix
                </h1>
                <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-normal max-w-[95%]">
                    Professional-grade 3D LUT Color Grading and Photo Editing. Available now on iOS and Android.
                </p>

                <div className="flex flex-col gap-4 max-w-[340px] w-full">
                    <a
                        href="https://apps.apple.com/app/modipix-3d-lut-photo-editor/id6758265582"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-4 w-full px-6 py-4 bg-[#141419]/50 border border-white/10 rounded-2xl text-white no-underline transition-all duration-300 hover:bg-[#282832]/80 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] active:translate-y-[1px] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

                        <div className="flex items-center justify-center w-[34px] relative z-10">
                            <img
                                src="/icon/apple_logo.svg"
                                alt="Download on the App Store"
                                className="h-7 w-auto invert"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left leading-tight transition-transform relative z-10">
                            <span className="text-[0.7rem] text-slate-400 font-medium uppercase tracking-[0.5px] mb-0.5">
                                Download on the
                            </span>
                            <span className="text-xl font-bold tracking-tight">
                                App Store
                            </span>
                        </div>
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-4 w-full px-6 py-4 bg-[#141419]/50 border border-white/10 rounded-2xl text-white no-underline transition-all duration-300 hover:bg-[#282832]/80 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] active:translate-y-[1px] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

                        <div className="flex items-center justify-center w-[34px] relative z-10">
                            <img
                                src="/icon/android_logo.svg"
                                alt="Get it on Google Play"
                                className="h-[30px] w-auto"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left leading-tight relative z-10">
                            <span className="text-[0.7rem] text-slate-400 font-medium uppercase tracking-[0.5px] mb-0.5">
                                Get it on
                            </span>
                            <span className="text-xl font-bold tracking-tight">
                                Google Play
                            </span>
                        </div>
                    </a>
                </div>
            </main>
        </div>
    );
}
