# AyushmaanKothari | ePortfolio

A modern, responsive personal portfolio and ePortfolio website built with clean HTML, CSS, and vanilla JavaScript. Fully self-contained static site with no build tools required.

## Features

- **Artistic Developer-First Design** — Premium visual theme with smooth animations and thoughtful UX
- **Dark/Light Mode** — Automatic theme switching with persistent storage
- **Multi-Language Support** — English (EN) and German (GE) with language switcher
- **Responsive Layout** — Desktop, tablet, and mobile-friendly design
- **Smooth Scroll Progress** — Visual indicator of page progress
- **Reveal Animations** — Elegant scroll-triggered content reveals
- **Video Section** — Configurable featured YouTube video
- **Blog Photo Wall** — Auto-loading image gallery from folder
- **Contact Form** — Client-side validation with mailto integration
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, skip links

## Project Structure

```
portfolio-website/
├── index.html                 # Main HTML structure
├── style.css                  # All styles (light/dark modes)
├── script.js                  # JavaScript interactions & config loading
├── video-config.json          # YouTube link configuration
├── robots.txt                 # SEO robots directives
├── sitemap.xml                # SEO sitemap
├── blog-media/                # Blog photo upload folder
│   ├── README.txt             # Photo upload instructions
│   ├── index.json             # Fallback image manifest (optional)
│   └── [your-photos.jpg]      # Add photos here
└── README.md                  # This file
```

## Quick Start

### Run Locally

Navigate to the project folder and start a local HTTP server:

```bash
python -m http.server 5500
```

Open browser to: `http://127.0.0.1:5500`

### Run with Python 3

```bash
python3 -m http.server 5500
```

## How to Use

### Update Featured Video

1. Open `video-config.json`
2. Replace the `youtubeUrl` value with your YouTube link

**Supported formats:**
- Watch URLs: `https://www.youtube.com/watch?v=VIDEO_ID`
- Short URLs: `https://youtu.be/VIDEO_ID`
- Shorts URLs: `https://www.youtube.com/shorts/VIDEO_ID`
- Embed URLs: `https://www.youtube.com/embed/VIDEO_ID`
- Raw video IDs: `VIDEO_ID`

**Example:**
```json
{
  "youtubeUrl": "https://www.youtube.com/watch?v=ysz5S6PUM-U"
}
```

### Add Blog Photos

**Option 1: Local Server (Auto-Discovery)**

Simply drop your images into the `blog-media/` folder:

```
blog-media/
├── photo1.jpg
├── event2.png
├── workshop.webp
└── ...
```

The gallery auto-discovers and displays all images. Layout remains stable regardless of image count.

**Option 2: Hosted Environment (Fallback)**

If your server doesn't allow folder listing, list images in `blog-media/index.json`:

```json
{
  "images": [
    "photo1.jpg",
    "event2.png",
    "workshop.webp"
  ]
}
```

**Supported Formats:**
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`
- `.avif`
- `.bmp`
- `.svg`

### Customize Content

#### Update About Section

Edit the text in `index.html`:
```html
<p data-i18n="about_p1">Your about text here...</p>
```

#### Update Skills

Modify skill categories and items in the Skills section of `index.html`.

#### Update Contact Email

Change the email address in `index.html`:
```html
<a href="mailto:your-email@example.com">Email Me</a>
```

And in `script.js`:
```javascript
window.location.href = "mailto:your-email@example.com?subject=" + subject + "&body=" + body;
```

#### Update Social Links

Replace URLs in the Profiles section of `index.html` for GitHub, LinkedIn, YouTube, LeetCode.

### Translations

The website supports English (EN) and German (GE). Translation strings are stored in `script.js`:

```javascript
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    // ... more keys
  },
  ge: {
    nav_home: "Startseite",
    nav_about: "Über mich",
    // ... more keys
  }
};
```

To add a new language or edit translations, modify the `translations` object.

### Customize Theme Colors

Edit CSS variables in `style.css`:

**Light Mode (`:root`):**
```css
:root {
  --bg: #f4f8ff;
  --accent: #0d7ef3;
  --warm: #ff9a3d;
  /* ... more variables */
}
```

**Dark Mode (`[data-theme="dark"]`):**
```css
[data-theme="dark"] {
  --bg: #080f1f;
  --accent: #3ab7ff;
  --warm: #ffc266;
  /* ... more variables */
}
```

## Features Explained

### Dark/Light Mode

Users can toggle theme via the sun/moon button in the top-right. The selected theme persists in local storage.

### Language Switcher

Click EN or GE in the top navigation to switch languages. All translatable content updates instantly.

### Scroll Progress

A colored progress bar at the top of the page shows scroll position.

### Reveal Animations

Sections animate into view as you scroll. Defined by `.reveal` class in HTML.

### Active Nav Link

Navigation links highlight when their corresponding section is in view.

### Back to Top Button

Floating button appears in the bottom-right after scrolling 500px. Smooth scroll to top.

### Contact Form

- Client-side validation for name, email, and message
- Opens user's email client with pre-filled subject and body
- Language-specific error messages

## Deployment

### Static Hosting

Deploy to any static hosting service:
- **Netlify** — Drag & drop deploy
- **GitHub Pages** — Push to repository
- **Vercel** — Zero-config deployment
- **Any Web Server** — Copy all files to server root

No backend, database, or build process required.

### SEO

- `sitemap.xml` — Search engine sitemap
- `robots.txt` — Crawler directives
- Semantic HTML with proper heading hierarchy
- Meta tags and Open Graph support
- Schema.org structured data included

## Customization Tips

1. **Brand Colors** — Update CSS variables in `style.css`
2. **Fonts** — Change Google Fonts link in `index.html` head
3. **Layout** — Modify grid columns in responsive media queries
4. **Content** — Edit translations and text directly in HTML
5. **Images** — Add blog photos to `blog-media/` folder

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Skip-to-main-content link
- ARIA labels for dynamic content
- Semantic HTML structure
- Keyboard navigation throughout
- Focus indicators on all interactive elements
- High contrast in both light and dark modes

## Performance

- Zero JavaScript framework dependencies
- Lazy loading for images
- Efficient CSS with minimal specificity
- Hardware-accelerated animations
- Optimized for Core Web Vitals

## License

Personal portfolio — feel free to customize for your use.

## Support & Tips

**Common Issues:**

1. **Videos not loading?**
   - Check YouTube link format in `video-config.json`
   - Ensure video is public/embeddable

2. **Blog photos not showing?**
   - Verify images are in `blog-media/` folder
   - For hosted servers, add filenames to `blog-media/index.json`
   - Check file extensions are supported

3. **Changes not appearing?**
   - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
   - Clear browser cache

---

**Last Updated:** May 2026  
**Author:** Ayushmaan Kothari  
**Website:** [ayushmaankothari2006.com](https://ayushmaankothari2006.com)
