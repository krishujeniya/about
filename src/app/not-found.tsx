import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="max-w-md w-full space-y-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-9xl font-bold text-primary">404</h1>
                    <h2 className="text-3xl font-semibold text-foreground">Page Not Found</h2>
                    <p className="text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>

                <div className="pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        ← Back to Home
                    </Link>
                </div>

                <div className="pt-8 text-sm text-muted-foreground">
                    <p>If you believe this is an error, please contact the site administrator.</p>
                </div>
            </div>
        </div>
    );
}
