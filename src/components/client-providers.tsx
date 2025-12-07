"use client"

import { LanguageProvider } from '@/context/language-context';
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from '@/components/error-boundary';

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary>
            <LanguageProvider>
                {children}
                <Toaster />
            </LanguageProvider>
        </ErrorBoundary>
    );
}
