# JSS Sangeetha Sabha - ಸಂಗೀತ ಸಂಭ್ರಮ

## About the Project

JSS Sangeetha Sabha is a prestigious classical music institution dedicated to celebrating and preserving the rich tradition of Carnatic classical music. This website showcases our events, performances, and cultural heritage.

**Live Website**: https://github.com/Novuswebspace/grand-hall-blueprint

## Features

- 🎵 **Event Management**: Browse upcoming classical music concerts and performances
- 🏛️ **Heritage Gallery**: Explore our rich history through curated photo galleries
- 📚 **Conference Archive**: Access past conference recordings and materials
- 🎭 **Artist Profiles**: Learn about renowned musicians and performers
- 📱 **Responsive Design**: Optimized for all devices
- 🌐 **Bilingual Support**: Content in English and Kannada

## Technologies Used

This project is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Backend**: Supabase (Database & Storage)
- **Deployment**: GitHub Pages
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Novuswebspace/grand-hall-blueprint.git
   cd grand-hall-blueprint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run upload-assets` - Upload assets to Supabase storage
- `npm run upload-pictures` - Upload new pictures to storage

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing page hero section
│   ├── EventsGrid.tsx  # Events display component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Events.tsx      # Events listing
│   ├── Gallery.tsx     # Photo gallery
│   └── ...
├── lib/                # Utility functions
│   ├── supabase.ts     # Supabase client
│   ├── assets.ts       # Asset management
│   └── utils.ts        # Helper functions
├── data/               # Static data
└── types/              # TypeScript type definitions
```

## Contributing

We welcome contributions to improve the JSS Sangeetha Sabha website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Cultural Heritage

JSS Sangeetha Sabha has been a cornerstone of classical music education and performance in Mysuru for decades. Our mission is to:

- Preserve and promote Carnatic classical music traditions
- Provide a platform for both established and emerging artists
- Foster appreciation for Indian classical arts
- Bridge traditional and contemporary musical expressions

## Contact

**JSS Sangeetha Sabha**
- Website: [JSS Sangeetha Sabha](https://github.com/Novuswebspace/grand-hall-blueprint)
- Email: info@jsssangeethasabha.org
- Phone: +91-XXX-XXX-XXXX
- Address: Mysuru, Karnataka, India

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- JSS Mahavidyapeetha for institutional support
- All the artists and musicians who have graced our stage
- The classical music community of Mysuru
- Contributors and developers who have helped build this platform

---

**ಸಂಗೀತ ಸಂಭ್ರಮ** - *Celebrating the Divine Art of Music*