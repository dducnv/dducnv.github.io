import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

// Cấu hình dynamic rendering
export const dynamic = "force-dynamic";

export default async function CyberSafePage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  console.log("acceptLanguage", acceptLanguage);
  
  // Lấy ngôn ngữ ưu tiên từ Accept-Language header
  const getPreferredLocale = () => {
    if (!acceptLanguage) return 'en';
    
    const languages = acceptLanguage.split(',');
    const preferredLanguage = languages[0].split('-')[0].toLowerCase();
    
    // Kiểm tra nếu ngôn ngữ ưu tiên là tiếng Việt
    if (preferredLanguage === 'vi') {
      return 'vi';
    }
    
    // Mặc định là tiếng Anh
    return 'en';
  };

  // Chuyển hướng đến trang home của ngôn ngữ phù hợp
  redirect(`/cybersafe/${getPreferredLocale()}`);
}