/**
 * Site Configuration
 * 
 * This is the SINGLE source of truth for all site URLs and configuration.
 * Update these values to match your GitHub repository.
 * 
 * IMPORTANT: This file is committed to git and used in production.
 * No environment variables needed!
 */

export const siteConfig = {
    // GitHub Configuration
    github: {
        username: 'chirag-ujeniya',
        repository: 'about', // CHANGE THIS to match your repo name
    },

    // Auto-generated URLs (don't modify these)
    get baseUrl() {
        return `https://${this.github.username}.github.io/${this.github.repository}`;
    },

    get sitemapUrl() {
        return `${this.baseUrl}/sitemap.xml`;
    },

    // Site Metadata
    site: {
        name: 'Chirag Ujeniya Profile',
        title: 'Chirag Ujeniya - Personal Profile',
        description: 'Personal profile of Chirag Ujeniya for matrimonial purposes. Software developer passionate about technology and innovation.',
        author: 'Chirag Ujeniya',
        keywords: ['Chirag Ujeniya', 'matrimonial', 'profile', 'software developer', 'Gujarat'],
    },

    // Open Graph / Social Media
    openGraph: {
        type: 'website' as const,
        locale: 'en_US',
        image: {
            url: 'https://raw.githubusercontent.com/chirag-ujeniya/pics/main/aa.jpg',
            width: 1200,
            height: 630,
            alt: 'Chirag Ujeniya',
        },
    },
} as const;

// Export individual values for convenience
export const GITHUB_USERNAME = siteConfig.github.username;
export const GITHUB_REPO = siteConfig.github.repository;
export const BASE_URL = siteConfig.baseUrl;
export const SITEMAP_URL = siteConfig.sitemapUrl;
