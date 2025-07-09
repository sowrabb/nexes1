# Nexes - Mobile App Development Agency

A modern, professional website for Nexes, a premier mobile app development company. Built with Next.js 15, React 19, and TypeScript, featuring a clean design optimized for conversions.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/nexes1.git
cd nexes1/cyberg

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 Recent Updates

### Analytics Integration
- **Google Tag Manager**: Integrated with GTM-W6G5GNB7 for comprehensive analytics
- **Microsoft Clarity**: Added for user behavior tracking and heatmaps (sa8a6ent8t)

### Pricing Simplification
- Simplified to USD-only pricing
- Removed complex IP geolocation features
- Consistent $999/$1,499/$1,999 pricing structure

### Build & Deployment
- Fixed font loading issues (removed missing Geist fonts)
- Configured for static export and GitHub Pages deployment
- Automatic deployment via GitHub Actions

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: GitHub Pages with automatic CI/CD
- **Analytics**: Google Tag Manager + Microsoft Clarity

## 📂 Project Structure

```
cyberg/
├── .github/workflows/      # GitHub Actions for deployment
│   └── deploy.yml         # Automated deployment workflow
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Root layout with analytics
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── blocks/        # Page section components
│   │   ├── demos/         # Demo components
│   │   └── ui/            # UI components
│   └── lib/               # Utility functions
├── next.config.ts         # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)
1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site updates at `https://yourusername.github.io/nexes1`

### Manual Deployment
```bash
npm run build  # Generates static files in /out
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with smooth animations
- **Mobile-First**: Fully responsive across all devices
- **Performance**: Optimized images, fonts, and loading
- **SEO-Ready**: Proper meta tags and structured data

## 📱 Business Features

- **Services**: Mobile & web app development showcase
- **Portfolio**: Client project displays
- **Pricing**: Transparent USD pricing structure
- **Contact**: Calendly integration for consultations
- **Legal**: Complete legal documentation

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to 'production' for builds
- Analytics tracking codes are hardcoded in layout.tsx

### Next.js Configuration
- Static export enabled for GitHub Pages
- Image optimization disabled for static hosting
- Base path configured for subdirectory deployment

## 📈 Analytics Setup

### Google Tag Manager
- Container ID: `GTM-W6G5GNB7`
- Tracks page views, conversions, and user interactions

### Microsoft Clarity
- Project ID: `sa8a6ent8t`
- Provides heatmaps and session recordings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔍 Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Run `npm ci` for clean dependency installation
- Check Next.js configuration for proper static export

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions logs for build errors
- Ensure CNAME file points to correct domain

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Nexes** - Premier Mobile App Development

- 🌐 Website: [https://cyberg.app](https://cyberg.app)
- 📧 Email: hello@nexes.dev
- 📅 Consultation: [Book a Free Quote](https://calendly.com/nexes9/meeting)

---

*Built with ❤️ by the Nexes development team*
