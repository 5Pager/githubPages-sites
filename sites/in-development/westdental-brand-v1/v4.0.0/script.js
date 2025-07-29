/* West Dental Interactive JavaScript */
/* Founder Personality-Driven Interactions & Micro-Animations */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        timings: {
            calm: 800,
            gentle: 300,
            confident: 200
        },
        breakpoints: {
            mobile: 768,
            tablet: 1024,
            desktop: 1280
        },
        animations: {
            enabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        }
    };

    // Navigation Management
    class NavigationController {
        constructor() {
            this.header = document.querySelector('.navigation-header');
            this.mobileToggle = document.querySelector('.mobile-menu-toggle');
            this.mobileNav = document.querySelector('.nav-mobile');
            this.scrollThreshold = 50;
            this.init();
        }

        init() {
            this.bindEvents();
            this.handleInitialScroll();
        }

        bindEvents() {
            // Scroll effect with founder's calm timing
            let scrollTimer = null;
            window.addEventListener('scroll', () => {
                if (scrollTimer) clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => this.handleScroll(), 16); // 60fps
            });

            // Mobile menu toggle
            if (this.mobileToggle) {
                this.mobileToggle.addEventListener('click', (e) => {
                    this.toggleMobileMenu();
                });
            }

            // Smooth scroll for anchor links
            this.setupSmoothScroll();

            // Keyboard navigation
            this.setupKeyboardNavigation();
        }

        handleScroll() {
            if (!this.header) return;

            const scrollY = window.scrollY;
            if (scrollY > this.scrollThreshold) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }

        handleInitialScroll() {
            this.handleScroll();
        }

        toggleMobileMenu() {
            if (!this.mobileToggle || !this.mobileNav) return;

            const isExpanded = this.mobileToggle.getAttribute('aria-expanded') === 'true';
            this.mobileToggle.setAttribute('aria-expanded', !isExpanded);

            if (this.mobileNav) {
                this.mobileNav.classList.toggle('active');

                // Focus management for accessibility
                if (!isExpanded) {
                    const firstLink = this.mobileNav.querySelector('a');
                    if (firstLink) firstLink.focus();
                }
            }

            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        }

        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        const headerHeight = this.header ? this.header.offsetHeight : 0;
                        const targetPosition = target.offsetTop - headerHeight - 20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        // Close mobile menu if open
                        if (this.mobileNav && this.mobileNav.classList.contains('active')) {
                            this.toggleMobileMenu();
                        }
                    }
                });
            });
        }

        setupKeyboardNavigation() {
            // Escape key closes mobile menu
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.mobileNav && this.mobileNav.classList.contains('active')) {
                    this.toggleMobileMenu();
                }
            });

            // Focus trap for mobile menu
            if (this.mobileNav) {
                this.setupFocusTrap(this.mobileNav);
            }
        }

        setupFocusTrap(element) {
            const focusableElements = element.querySelectorAll(
                'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
            );
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            element.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusableElement) {
                            firstFocusableElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }
    }

    // Scroll Reveal Animation System
    class ScrollRevealController {
        constructor() {
            this.elements = document.querySelectorAll('.scroll-reveal');
            this.observer = null;
            this.init();
        }

        init() {
            if (!CONFIG.animations.enabled) {
                // If animations are disabled, immediately reveal all elements
                this.elements.forEach(el => el.classList.add('revealed'));
                return;
            }

            this.setupIntersectionObserver();
            this.observeElements();
        }

        setupIntersectionObserver() {
            const options = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Founder's calm reveal timing
                        setTimeout(() => {
                            entry.target.classList.add('revealed');
                        }, Math.random() * 100); // Slight stagger for natural feel
                    }
                });
            }, options);
        }

        observeElements() {
            this.elements.forEach(el => {
                this.observer.observe(el);
            });
        }
    }

    // Interactive Elements Enhancement
    class InteractionEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.enhanceCTAButtons();
            this.enhanceValueCards();
            this.enhanceTestimonialCards();
            this.setupHoverStates();
        }

        enhanceCTAButtons() {
            const buttons = document.querySelectorAll('.hero-cta-primary, .primary-cta-button, .final-cta-button, .nav-cta-button');

            buttons.forEach(button => {
                // Gentle hover effects reflecting founder's approach
                button.addEventListener('mouseenter', () => {
                    if (CONFIG.animations.enabled) {
                        button.style.transform = 'translateY(-3px)';
                        button.style.transition = `all ${CONFIG.timings.gentle}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                    }
                });

                button.addEventListener('mouseleave', () => {
                    if (CONFIG.animations.enabled) {
                        button.style.transform = 'translateY(0)';
                    }
                });

                // Focus enhancement for accessibility
                button.addEventListener('focus', () => {
                    button.style.outline = '3px solid #E6A444';
                    button.style.outlineOffset = '2px';
                });

                button.addEventListener('blur', () => {
                    button.style.outline = '';
                    button.style.outlineOffset = '';
                });

                // Click tracking
                button.addEventListener('click', (e) => {
                    this.trackInteraction('cta_click', {
                        button_text: button.textContent.trim(),
                        section: this.getParentSection(button)
                    });
                });
            });
        }

        enhanceValueCards() {
            const cards = document.querySelectorAll('.value-card');

            cards.forEach((card, index) => {
                // Staggered entrance animation
                if (CONFIG.animations.enabled) {
                    card.style.animationDelay = `${index * 200}ms`;
                }

                // Gentle hover interaction
                card.addEventListener('mouseenter', () => {
                    if (CONFIG.animations.enabled) {
                        const icon = card.querySelector('.value-icon-container');
                        if (icon) {
                            icon.style.transform = 'scale(1.1) rotate(5deg)';
                        }
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (CONFIG.animations.enabled) {
                        const icon = card.querySelector('.value-icon-container');
                        if (icon) {
                            icon.style.transform = 'scale(1) rotate(0deg)';
                        }
                    }
                });
            });
        }

        enhanceTestimonialCards() {
            const cards = document.querySelectorAll('.testimonial-card');

            cards.forEach((card, index) => {
                // Staggered entrance animation
                if (CONFIG.animations.enabled) {
                    card.style.animationDelay = `${index * 300}ms`;
                }

                // Star rating animation on hover
                card.addEventListener('mouseenter', () => {
                    const stars = card.querySelectorAll('.star');
                    stars.forEach((star, starIndex) => {
                        setTimeout(() => {
                            star.style.transform = 'scale(1.1)';
                            star.style.filter = 'brightness(1.2)';
                        }, starIndex * 50);
                    });
                });

                card.addEventListener('mouseleave', () => {
                    const stars = card.querySelectorAll('.star');
                    stars.forEach(star => {
                        star.style.transform = 'scale(1)';
                        star.style.filter = 'brightness(1)';
                    });
                });
            });
        }

        setupHoverStates() {
            // Logo hover effect
            const logoLink = document.querySelector('.logo-link');
            if (logoLink) {
                logoLink.addEventListener('mouseenter', () => {
                    if (CONFIG.animations.enabled) {
                        const icon = logoLink.querySelector('.logo-icon');
                        if (icon) {
                            icon.style.transform = 'rotate(-5deg) scale(1.05)';
                        }
                    }
                });

                logoLink.addEventListener('mouseleave', () => {
                    if (CONFIG.animations.enabled) {
                        const icon = logoLink.querySelector('.logo-icon');
                        if (icon) {
                            icon.style.transform = 'rotate(0deg) scale(1)';
                        }
                    }
                });
            }

            // Image hover effects
            const images = document.querySelectorAll('.hero-image');
            images.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    if (CONFIG.animations.enabled) {
                        img.style.transform = 'scale(1.02)';
                    }
                });

                img.addEventListener('mouseleave', () => {
                    if (CONFIG.animations.enabled) {
                        img.style.transform = 'scale(1)';
                    }
                });
            });
        }

        getParentSection(element) {
            const section = element.closest('section');
            return section ? section.className.split(' ')[0] : 'unknown';
        }

        trackInteraction(eventName, properties = {}) {
            // Analytics tracking - replace with your preferred analytics service
            if (typeof gtag !== 'undefined') {
                gtag('event', eventName, properties);
            } else if (typeof analytics !== 'undefined') {
                analytics.track(eventName, properties);
            } else {
                console.log('Track:', eventName, properties);
            }
        }
    }

    // Form Enhancement (for future contact forms)
    class FormEnhancer {
        constructor() {
            this.forms = document.querySelectorAll('form');
            this.init();
        }

        init() {
            this.forms.forEach(form => {
                this.enhanceForm(form);
            });
        }

        enhanceForm(form) {
            // Add floating labels
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                this.addFloatingLabel(input);
            });

            // Form validation
            form.addEventListener('submit', (e) => {
                this.handleFormSubmission(e, form);
            });
        }

        addFloatingLabel(input) {
            const wrapper = document.createElement('div');
            wrapper.className = 'input-wrapper';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);

            const label = document.createElement('label');
            label.className = 'floating-label';
            label.textContent = input.placeholder || 'Enter value';
            label.setAttribute('for', input.id);
            wrapper.appendChild(label);

            // Handle label state
            const handleLabelState = () => {
                if (input.value || input === document.activeElement) {
                    label.classList.add('active');
                } else {
                    label.classList.remove('active');
                }
            };

            input.addEventListener('focus', handleLabelState);
            input.addEventListener('blur', handleLabelState);
            input.addEventListener('input', handleLabelState);

            // Initial state
            handleLabelState();
        }

        handleFormSubmission(e, form) {
            e.preventDefault();

            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    this.showFieldError(field, 'This field is required');
                    isValid = false;
                } else {
                    this.clearFieldError(field);
                }
            });

            if (isValid) {
                this.submitForm(form);
            }
        }

        showFieldError(field, message) {
            this.clearFieldError(field);

            const error = document.createElement('div');
            error.className = 'field-error';
            error.textContent = message;
            field.parentNode.appendChild(error);
            field.classList.add('error');
        }

        clearFieldError(field) {
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) {
                existingError.remove();
            }
            field.classList.remove('error');
        }

        submitForm(form) {
            // Show loading state
            const submitButton = form.querySelector('[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }

            // Replace with actual form submission logic
            setTimeout(() => {
                this.showSuccessMessage(form);
                form.reset();

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }
            }, 2000);
        }

        showSuccessMessage(form) {
            const message = document.createElement('div');
            message.className = 'success-message';
            message.textContent = 'Thank you! Your message has been sent.';
            form.parentNode.insertBefore(message, form);

            setTimeout(() => {
                message.remove();
            }, 5000);
        }
    }

    // Performance Monitor
    class PerformanceMonitor {
        constructor() {
            this.metrics = {
                loadTime: 0,
                domContentLoaded: 0,
                firstPaint: 0,
                firstContentfulPaint: 0
            };
            this.init();
        }

        init() {
            this.measureLoadTimes();
            this.setupPerformanceObserver();
        }

        measureLoadTimes() {
            // DOM Content Loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.metrics.domContentLoaded = performance.now();
                });
            } else {
                this.metrics.domContentLoaded = 0; // Already loaded
            }

            // Window Load
            if (document.readyState !== 'complete') {
                window.addEventListener('load', () => {
                    this.metrics.loadTime = performance.now();
                    this.reportMetrics();
                });
            } else {
                this.metrics.loadTime = 0; // Already loaded
                this.reportMetrics();
            }
        }

        setupPerformanceObserver() {
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (entry.name === 'first-paint') {
                            this.metrics.firstPaint = entry.startTime;
                        } else if (entry.name === 'first-contentful-paint') {
                            this.metrics.firstContentfulPaint = entry.startTime;
                        }
                    });
                });

                observer.observe({ entryTypes: ['paint'] });
            }
        }

        reportMetrics() {
            console.log('West Dental Performance Metrics:', this.metrics);

            // Report to analytics if needed
            if (typeof gtag !== 'undefined') {
                gtag('event', 'performance_metrics', {
                    load_time: Math.round(this.metrics.loadTime),
                    dom_ready: Math.round(this.metrics.domContentLoaded),
                    first_paint: Math.round(this.metrics.firstPaint),
                    first_contentful_paint: Math.round(this.metrics.firstContentfulPaint)
                });
            }
        }
    }

    // Accessibility Enhancements
    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.enhanceScreenReaderSupport();
            this.setupFocusManagement();
            this.setupReducedMotionSupport();
        }

        setupKeyboardNavigation() {
            // Skip to content functionality
            const skipLink = document.querySelector('.skip-to-content');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }

            // Escape key functionality
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    // Close any open modals, menus, etc.
                    this.closeAllOverlays();
                }
            });
        }

        enhanceScreenReaderSupport() {
            // Add ARIA live regions for dynamic content
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'false');
            liveRegion.className = 'sr-only';
            liveRegion.id = 'live-region';
            document.body.appendChild(liveRegion);

            // Announce page changes
            this.announcePageChanges();
        }

        setupFocusManagement() {
            // Ensure focusable elements are properly highlighted
            const focusableElements = document.querySelectorAll(
                'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );

            focusableElements.forEach(element => {
                element.addEventListener('focus', () => {
                    element.classList.add('focused');
                });

                element.addEventListener('blur', () => {
                    element.classList.remove('focused');
                });
            });
        }

        setupReducedMotionSupport() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.body.classList.add('reduce-motion');
                CONFIG.animations.enabled = false;
            }
        }

        announcePageChanges() {
            const liveRegion = document.getElementById('live-region');
            if (liveRegion) {
                // Announce when sections come into view
                const sections = document.querySelectorAll('section[aria-labelledby]');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const heading = document.getElementById(entry.target.getAttribute('aria-labelledby'));
                            if (heading) {
                                liveRegion.textContent = `Now viewing: ${heading.textContent}`;
                            }
                        }
                    });
                }, { threshold: 0.5 });

                sections.forEach(section => observer.observe(section));
            }
        }

        closeAllOverlays() {
            // Close mobile menu
            const nav = new NavigationController();
            if (nav.mobileNav && nav.mobileNav.classList.contains('active')) {
                nav.toggleMobileMenu();
            }
        }
    }

    // Image Lazy Loading and Error Handling
    class ImageManager {
        constructor() {
            this.images = document.querySelectorAll('img');
            this.init();
        }

        init() {
            this.setupErrorHandling();
            this.setupLazyLoading();
        }

        setupErrorHandling() {
            this.images.forEach(img => {
                img.addEventListener('error', () => {
                    this.handleImageError(img);
                });

                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            });
        }

        setupLazyLoading() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            this.loadImage(img);
                            imageObserver.unobserve(img);
                        }
                    });
                });

                this.images.forEach(img => {
                    if (img.dataset.src) {
                        imageObserver.observe(img);
                    }
                });
            }
        }

        loadImage(img) {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        }

        handleImageError(img) {
            console.warn('Image failed to load:', img.src);

            // Hide broken image or replace with placeholder
            img.style.display = 'none';

            // Optionally replace with placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = 'Image unavailable';
            img.parentNode.insertBefore(placeholder, img);
        }
    }

    // Initialize all components when DOM is ready
    function initializeApp() {
        new NavigationController();
        new ScrollRevealController();
        new InteractionEnhancer();
        new FormEnhancer();
        new PerformanceMonitor();
        new AccessibilityEnhancer();
        new ImageManager();

        // Mark app as loaded
        document.body.classList.add('app-loaded');

        console.log('West Dental interactive features initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate layouts if needed
            window.dispatchEvent(new CustomEvent('westdental:resize'));
        }, 250);
    });

    // Export for external use if needed
    window.WestDental = {
        CONFIG,
        NavigationController,
        ScrollRevealController,
        InteractionEnhancer
    };

})();
