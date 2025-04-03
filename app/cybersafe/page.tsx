'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CyberSafePage() {
  const router = useRouter();

  useEffect(() => {
    const acceptLanguage = navigator.language || 'en';
    const preferredLanguage = acceptLanguage.split('-')[0].toLowerCase();

    // Redirect based on the preferred language
    if (preferredLanguage === 'vi') {
      router.push('/cybersafe/vi');
    } else {
      router.push('/cybersafe/en');
    }
  }, [router]);

  return null; // Render nothing while redirecting
}