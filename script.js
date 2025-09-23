// Smooth scrolling and interactive functionality for VoiceAI Auto landing page

// DOM elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// State management - minimal state needed since ElevenLabs handles voice interactions

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeDemo();
    initializeStats();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger?.addEventListener('click', toggleMobileMenu);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navMenu?.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Active nav link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function toggleMobileMenu() {
    hamburger?.classList.toggle('active');
    navMenu?.classList.toggle('active');
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Demo functionality - ElevenLabs widget handles the demo now
function initializeDemo() {
    // ElevenLabs ConvAI widget is embedded and handles all demo functionality
    console.log('ElevenLabs ConvAI widget loaded');
}

// Demo functions removed - ElevenLabs widget handles all voice interactions

// Stats counter animation
function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepDuration);
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .demo-features, .demo-instructions').forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', handleParallax);
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-icon');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Animation initialization
function initializeAnimations() {
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card,
        .demo-features,
        .demo-instructions {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .feature-card.animate-in,
        .demo-features.animate-in,
        .demo-instructions.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-link.active {
            color: var(--primary-color);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                right: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                transition: right 0.3s ease-in-out;
            }
            
            .nav-menu.active {
                right: 0;
            }
            
            .nav-menu li {
                margin: 1rem 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function scrollToFeatures() {
    document.getElementById('features')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Global functions for button clicks
window.scrollToFeatures = scrollToFeatures;
window.scrollToContact = scrollToContact;

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    handleNavbarScroll();
    updateActiveNavLink();
    handleParallax();
}, 10);

// Replace direct scroll event listener
window.removeEventListener('scroll', handleNavbarScroll);
window.removeEventListener('scroll', updateActiveNavLink);
window.removeEventListener('scroll', handleParallax);
window.addEventListener('scroll', debouncedScrollHandler);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment the following lines if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Space bar to activate microphone
    if (e.code === 'Space' && e.target === micButton) {
        e.preventDefault();
        toggleRecording();
    }
    
    // Escape to close mobile menu
    if (e.code === 'Escape' && navMenu?.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger demo or scroll to next section
        } else {
            // Swipe down - could close mobile menu
            if (navMenu?.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    }
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Add your analytics tracking here
    console.log('Event tracked:', eventName, properties);
}

// Track demo interactions
micButton?.addEventListener('click', () => {
    trackEvent('demo_microphone_clicked', { active: demoActive });
});

// Track navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        trackEvent('navigation_clicked', { 
            target: e.target.textContent,
            href: e.target.href 
        });
    });
});

// Track CTA clicks
document.querySelectorAll('.contact-btn, .btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        trackEvent('cta_clicked', { 
            text: e.target.textContent,
            location: e.target.closest('section')?.id || 'unknown'
        });
    });
});

// Console welcome message
console.log('%c🎤 VoiceAI Auto Landing Page', 'color: #1a237e; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies for the automotive industry', 'color: #666; font-size: 12px;');
console.log('%cReady for ElevenLabs integration!', 'color: #ff6b35; font-size: 14px;');
