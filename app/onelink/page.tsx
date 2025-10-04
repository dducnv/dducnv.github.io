import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaInstagram, FaDiscord, FaGooglePlay } from 'react-icons/fa';

const socialLinks = [
    {
        href: 'https://github.com/dducnv',
        label: 'GitHub',
        icon: <FaGithub className="w-7 h-7" />,
    },
    {
        href: 'https://play.google.com/store/apps/dev?id=5117725144849190078',
        label: 'Google Play',
        icon: <FaGooglePlay className="w-7 h-7" />,
    },
    {
        href: 'https://dducnv.github.io',
        label: 'Portfolio',
        icon: <FaGlobe className="w-7 h-7" />,
    },
    {
        href: 'https://facebook.com/ducnv.dev',
        label: 'Facebook',
        icon: <FaFacebook className="w-7 h-7" />,
    },
    {
        href: 'https://www.instagram.com/dducnv',
        label: 'Instagram',
        icon: <FaInstagram className="w-7 h-7" />,
    },
    {
        href: 'https://linkedin.com/in/ducnv0712',
        label: 'LinkedIn',
        icon: <FaLinkedin className="w-7 h-7" />,
    },
    {
        href: 'https://discordapp.com/users/711211764653752341',
        label: 'Discord',
        icon: <FaDiscord className="w-7 h-7" />,
    },
    {
        href: 'mailto:contact.ducnv@gmail.com',
        label: 'Email',
        icon: <FaEnvelope className="w-7 h-7" />,
    },
];

const projects = [
    {
        logo: "/modipix.png",
        name: "Modipix",
        desc: "Photo editor: crop, round corners, add border, shadow.",
        link: "https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app",
        linkLabel: "Google Play",
    },
    {
        logo: "/cybersafe.png",
        name: "CyberSafe",
        desc: "Offline password manager. No cloud, no tracking.",
        link: "/cybersafe",
        linkLabel: "Learn more",
    },
];

const page = () => {
    return (
        <div className="fixed inset-0 z-50 w-screen h-screen bg-white overflow-auto flex flex-col items-center justify-center px-2 py-12">
            <div className="w-full max-w-md flex flex-col items-center">
                {/* Profile Card */}
                <div className="w-full bg-white border border-gray-200 rounded-3xl  p-8 flex flex-col items-center mb-2">
                    <div className="w-28 h-28 relative rounded-full overflow-hidden border-2 border-gray-200 mb-4 shadow-sm">
                        <Image
                            src="/avatar.jpg"
                            alt="Nguyễn Văn Đức"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-black mb-1">Nguyễn Văn Đức</h1>
                    <p className="text-gray-700 mb-6 text-center text-base">Mobile App Developer | Flutter | Indie Maker</p>
                    {/* Social icon row */}
                    <div className="flex flex-row flex-wrap justify-center gap-4 w-full mb-2">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center hover:bg-gray-100 transition duration-300 p-2 rounded-md cursor-pointer hover:text-black text-gray-500"
                            >
                                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 transition text-2xl">
                                    {link.icon}
                                </span>
                                <span className="text-xs mt-1 text-gray-600 group-hover:text-black transition">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Projects Section */}
                <div className="w-full flex flex-col gap-4 mt-2">
                    {projects.map((project) => (
                        <div key={project.name} className="flex items-center gap-4 border border-gray-200 rounded-2xl bg-white px-4 py-3  transition">
                            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                <Image src={project.logo} alt={project.name + ' logo'} width={56} height={56} className="object-cover w-14 h-14" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-black truncate">{project.name}</div>
                                <div className="text-gray-700 text-sm truncate">{project.desc}</div>
                            </div>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-1 text-xs rounded border border-gray-200 bg-gray-50 hover:bg-gray-200 font-medium text-black transition cursor-pointer">
                                {project.linkLabel}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-8 text-gray-400 text-xs">© {new Date().getFullYear()} Nguyễn Văn Đức. All rights reserved.</p>
        </div>
    );
};

export default page;