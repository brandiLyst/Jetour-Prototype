# VoiceAI Automotive Assistant Landing Page

A beautiful, modern landing page for showcasing an AI-powered voice assistant designed for the automotive industry in Saudi Arabia. Built with clean HTML, CSS, and JavaScript - perfect for hosting on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, elegant interface with automotive industry theming
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Demo Section**: Placeholder for ElevenLabs voice integration
- **Smooth Animations**: Professional animations and transitions
- **Arabic & English Ready**: Designed for the Saudi market
- **GitHub Pages Compatible**: No build process required
- **Accessibility Focused**: WCAG compliant with keyboard navigation

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Customization Guide

### 1. Update Contact Information

The LinkedIn URL has been updated to:

```html
<!-- LinkedIn profile links are set to -->
<a href="https://www.linkedin.com/in/fahad-ramxan/" target="_blank">
```

### 2. Add Your ElevenLabs Integration

The demo section is ready for ElevenLabs integration. Look for these functions in `script.js`:

```javascript
// Replace these functions with actual ElevenLabs API calls
function startRecording() { /* Your ElevenLabs code here */ }
function processVoiceInput() { /* Your ElevenLabs code here */ }
```

### 3. Customize Colors and Branding

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a237e;        /* Main brand color */
    --secondary-color: #ff6b35;      /* Accent color */
    /* Update other colors as needed */
}
```

### 4. Update Company Information

- Change the company name in the navigation and footer
- Update the hero section title and description
- Modify feature descriptions to match your specific services

## 🚀 Deployment to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: Deploy from a branch
5. **Choose branch**: main (or master)
6. **Select folder**: / (root)
7. **Save** and wait for deployment

Your site will be available at: `https://yourusername.github.io/repository-name`

## 🎨 Design Features

### Color Palette
- **Primary**: Deep blue (#1a237e) - Professional, trustworthy
- **Secondary**: Orange (#ff6b35) - Energy, innovation
- **Gradients**: Modern gradient overlays for visual appeal

### Typography
- **Font**: Inter - Clean, modern, highly readable
- **Hierarchy**: Clear heading structure for SEO and accessibility

### Animations
- **Hero Section**: Sliding animations on page load
- **Voice Waves**: Animated sound visualization
- **Scroll Effects**: Parallax and fade-in animations
- **Hover States**: Interactive button and card effects

## 📱 Mobile Optimization

- **Responsive Grid**: Adapts to all screen sizes
- **Touch-Friendly**: Large buttons and touch targets
- **Mobile Menu**: Hamburger navigation for small screens
- **Performance**: Optimized images and animations

## 🔧 Technical Features

### JavaScript Functionality
- Smooth scrolling navigation
- Interactive demo simulation
- Mobile menu toggle
- Scroll-based animations
- Counter animations for stats
- Keyboard accessibility
- Touch gesture support

### CSS Features
- CSS Grid and Flexbox layouts
- Custom CSS properties (variables)
- Modern animations and transitions
- Mobile-first responsive design
- Print stylesheet
- High contrast mode support

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: Screen readers and keyboard navigation

## 📊 Performance

- **Lightweight**: No external dependencies except Google Fonts and Font Awesome
- **Fast Loading**: Optimized CSS and JavaScript
- **SEO Ready**: Semantic HTML and meta tags
- **PWA Ready**: Service worker placeholder included

## 🔮 ElevenLabs Integration Guide

To integrate ElevenLabs voice synthesis:

1. **Get API Key**: Sign up for ElevenLabs and get your API key
2. **Update JavaScript**: Replace the demo functions with actual API calls
3. **Add Audio Handling**: Implement audio playback for responses
4. **Error Handling**: Add proper error handling for API failures

Example integration structure:

```javascript
// Add to script.js
async function callElevenLabsAPI(text) {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/voice-id', {
        method: 'POST',
        headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': 'your-api-key'
        },
        body: JSON.stringify({
            text: text,
            model_id: "eleven_monolingual_v1",
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.5
            }
        })
    });
    
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
}
```

## 📧 Support

For questions or customization help, connect with me on LinkedIn using the contact button in the footer.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the automotive industry in Saudi Arabia**
