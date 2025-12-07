# Chirag Ujeniya - Personal Profile

A modern, responsive personal profile website built with Next.js 16, React 19, and TypeScript.

## 🚀 Features

- ✅ **Next.js 16** with App Router
- ✅ **React 19** with latest features
- ✅ **TypeScript 5.9.3** for type safety
- ✅ **Static Site Generation** for GitHub Pages
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **SEO Optimized** with metadata and Open Graph tags
- ✅ **Error Boundaries** for graceful error handling
- ✅ **Multi-language Support** (English/Gujarati)
- ✅ **Print-friendly** layout

## 📋 Prerequisites

- Node.js >= 18.18.0
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run type check
npm run typecheck

# Start development server
npm run dev
```

## 🏗️ Build & Deploy

### ⚠️ IMPORTANT: Before Deployment

**1. Verify Repository Name**
```bash
# Check your actual GitHub repository name
git remote -v
# Output should show: https://github.com/chirag-ujeniya/about.git
```

**2. Update Configuration Files**

If your repository name is NOT 'about', update these files:

- `next.config.ts` (line 3): Change `repoName = 'about'`
- `public/sitemap.xml` (line 4): Update URL
- `public/robots.txt` (line 6): Update sitemap URL
- `src/app/layout.tsx` (line 38): Update Open Graph URL

**3. Configure GitHub Pages**

Go to your GitHub repository settings:
1. Navigate to **Settings** → **Pages**
2. Under **Source**, select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
3. Click **Save**
4. Wait for GitHub Actions to complete deployment
5. Your site will be available at: `https://chirag-ujeniya.github.io/about/`

### For GitHub Pages (Automatic Deployment)

```bash
# 1. Ensure all changes are committed
git add .
git commit -m "Ready for deployment"

# 2. Push to main branch
git push origin main

# 3. GitHub Actions will automatically:
#    - Run type checking
#    - Run linting
#    - Build the static site
#    - Deploy to GitHub Pages
```

### For Manual Build

```bash
# 1. Run type check
npm run typecheck

# 2. Run linter
npm run lint

# 3. Build static site
npm run build

# 4. Output will be in 'out' folder
# You can test it locally with:
npx serve out
```

### Deployment Verification

After deployment, verify:
1. ✅ Site loads at `https://chirag-ujeniya.github.io/about/`
2. ✅ All images load correctly
3. ✅ Navigation works
4. ✅ No 404 errors in browser console
5. ✅ Social media preview works (test with [Open Graph Debugger](https://www.opengraph.xyz/))

### Troubleshooting Deployment

**Problem: Assets return 404**
- Solution: Check `repoName` in `next.config.ts` matches your actual repository name

**Problem: GitHub Pages shows 404**
- Solution: Ensure GitHub Pages is configured to deploy from `main` branch
- Check that GitHub Actions workflow completed successfully

**Problem: Styles not loading**
- Solution: Verify `.nojekyll` file exists in `public/` folder
- Check browser console for CORS errors

**Problem: Build fails in GitHub Actions**
- Solution: Check Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version is 22 in workflow file

## 📜 Available Scripts

- `npm run dev` - Start development server on port 9002 with Turbopack
- `npm run build` - Build for production (static export to `out/` folder)
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint to check code quality
- `npm run typecheck` - Run TypeScript type checking
- `npm run typecheck:watch` - Run type checking in watch mode
- `npm run audit:fix` - Fix security vulnerabilities automatically

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

1. Update personal information in component files
2. Modify colors in `tailwind.config.ts`
3. Change fonts in `src/app/layout.tsx`
4. Update metadata in `src/app/layout.tsx`

## 🔒 Security

- Regular dependency updates
- Security audit with `npm audit`
- Overrides for deprecated packages
- Type-safe code with TypeScript

## 📄 License

This project is private and for personal use only.

## 👤 Author

**Chirag Ujeniya**

---

Built with ❤️ using Next.js and React