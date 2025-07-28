/**
 * Week 4 Day 1: Scroll-Triggered Archetype Progression System
 * Coordinated reveal system for five-act emotional journey
 * "The Journey to Self-Respectful Smile Recognition"
 */

class ScrollTriggeredArchetypeProgression {
    constructor() {
        this.scrollPosition = 0;
        this.viewportHeight = window.innerHeight;
        this.documentHeight = document.documentElement.scrollHeight;
        this.isScrolling = false;
        this.scrollTimeout = null;

        // Five-Act progression thresholds based on scroll position
        this.actThresholds = {
            act1_arrival: { start: 0, end: 0.15 },      // Top 15% - Hero section
            act2_exploration: { start: 0.1, end: 0.45 }, // 10-45% - Services discovery
            act3_trust_building: { start: 0.35, end: 0.65 }, // 35-65% - Trust elements
            act4_recognition: { start: 0.55, end: 0.85 }, // 55-85% - Recognition moment
            act5_action: { start: 0.75, end: 1.0 }      // 75-100% - CTA and footer
        };

        // Component visibility states
        this.componentStates = new Map();

        // Archetype progression intensity curves
        this.archetypeIntensityCurves = {
            owl_wisdom: {
                peak: 0.4,  // Peaks during exploration phase
                curve: (progress) => Math.sin(progress * Math.PI) * 0.9
            },
            safe_harbor: {
                peak: 0.2,  // Strong at beginning, maintained throughout
                curve: (progress) => 0.8 + Math.sin(progress * Math.PI * 0.5) * 0.2
            },
            mirror_recognition: {
                peak: 0.7,  // Peaks during recognition phase
                curve: (progress) => progress > 0.5 ? Math.pow((progress - 0.5) * 2, 2) : 0.1
            }
        };

        // Intersection Observer for precise component tracking
        this.observerOptions = {
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
            rootMargin: '-10% 0px -10% 0px'
        };

        this.init();
    }

    init() {
        this.setupScrollListeners();
        this.setupIntersectionObserver();
        this.setupResizeHandler();
        this.mapComponents();
        this.initializeComponentStates();
        this.calculateInitialPositions();
        this.startProgressionLoop();

        console.log('🌊 Scroll-Triggered Archetype Progression System Initialized');
    }

    setupScrollListeners() {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollPosition();
                    this.updateActProgression();
                    this.updateArchetypeIntensities();
                    this.triggerScrollEnhancements();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Scroll start/stop detection
        window.addEventListener('scroll', () => {
            this.isScrolling = true;
            document.body.classList.add('scrolling');

            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
                document.body.classList.remove('scrolling');
                this.onScrollStop();
            }, 150);
        }, { passive: true });
    }

    setupIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const componentId = entry.target.getAttribute('data-component');
                const archetype = entry.target.getAttribute('data-archetype');
                const act = entry.target.getAttribute('data-act');

                this.updateComponentVisibility(componentId, entry.intersectionRatio, entry.isIntersecting);

                if (entry.isIntersecting) {
                    this.triggerComponentReveal(entry.target, entry.intersectionRatio);
                } else {
                    this.handleComponentExit(entry.target);
                }
            });
        }, this.observerOptions);
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.recalculatePositions();
            }, 250);
        });
    }

    mapComponents() {
        this.components = document.querySelectorAll('[data-component]');
        console.log(`📍 Mapped ${this.components.length} components for scroll progression`);

        this.components.forEach(component => {
            this.intersectionObserver.observe(component);

            const componentId = component.getAttribute('data-component');
            const rect = component.getBoundingClientRect();
            const scrollTop = window.pageYOffset;

            this.componentStates.set(componentId, {
                element: component,
                archetype: component.getAttribute('data-archetype'),
                act: component.getAttribute('data-act'),
                top: rect.top + scrollTop,
                height: rect.height,
                visibilityRatio: 0,
                isActive: false,
                hasRevealed: false,
                revealProgress: 0
            });
        });
    }

    initializeComponentStates() {
        this.components.forEach(component => {
            component.classList.add('scroll-ready');
            component.style.setProperty('--reveal-progress', '0');
            component.style.setProperty('--archetype-intensity', '0');
        });
    }

    calculateInitialPositions() {
        this.updateScrollPosition();
        this.updateActProgression();
        this.updateArchetypeIntensities();
    }

    updateScrollPosition() {
        this.scrollPosition = window.pageYOffset;
        this.documentHeight = document.documentElement.scrollHeight;
        this.viewportHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        this.scrollProgress = this.scrollPosition / (this.documentHeight - this.viewportHeight);
        this.scrollProgress = Math.max(0, Math.min(1, this.scrollProgress));

        // Update CSS custom property for global access
        document.body.style.setProperty('--scroll-progress', this.scrollProgress);
    }

    updateActProgression() {
        const currentAct = this.getCurrentActByScroll();
        const previousAct = document.body.getAttribute('data-current-act');

        if (currentAct !== previousAct) {
            this.transitionToScrollAct(currentAct, previousAct);
        }

        // Update act progression intensity
        const actProgress = this.getActProgress(currentAct);
        document.body.style.setProperty('--act-progress', actProgress);
    }

    getCurrentActByScroll() {
        for (const [actName, threshold] of Object.entries(this.actThresholds)) {
            if (this.scrollProgress >= threshold.start && this.scrollProgress <= threshold.end) {
                return actName;
            }
        }

        // Determine by closest threshold if not in any range
        let closest = 'act1_arrival';
        let closestDistance = Infinity;

        for (const [actName, threshold] of Object.entries(this.actThresholds)) {
            const centerPoint = (threshold.start + threshold.end) / 2;
            const distance = Math.abs(this.scrollProgress - centerPoint);

            if (distance < closestDistance) {
                closestDistance = distance;
                closest = actName;
            }
        }

        return closest;
    }

    getActProgress(actName) {
        const threshold = this.actThresholds[actName];
        if (!threshold) return 0;

        const range = threshold.end - threshold.start;
        const position = this.scrollProgress - threshold.start;
        return Math.max(0, Math.min(1, position / range));
    }

    transitionToScrollAct(newAct, previousAct) {
        console.log(`🎭 Scroll-triggered transition: ${previousAct} → ${newAct} (${Math.round(this.scrollProgress * 100)}%)`);

        // Update body attribute
        document.body.setAttribute('data-current-act', newAct);

        // Remove previous act classes
        if (previousAct) {
            document.body.classList.remove(`scroll-${previousAct}`);
        }

        // Add new act class
        document.body.classList.add(`scroll-${newAct}`);

        // Trigger act-specific scroll effects
        this.triggerActScrollEffects(newAct);

        // Activate components for this act
        this.activateActComponents(newAct);
    }

    updateArchetypeIntensities() {
        // Calculate archetype intensities based on scroll position
        for (const [archetype, config] of Object.entries(this.archetypeIntensityCurves)) {
            const intensity = config.curve(this.scrollProgress);
            document.body.style.setProperty(`--${archetype.replace('_', '-')}-scroll-intensity`, intensity);
        }

        // Update components with their archetype intensities
        this.componentStates.forEach((state, componentId) => {
            if (state.visibilityRatio > 0) {
                const archetypeIntensity = this.archetypeIntensityCurves[state.archetype];
                if (archetypeIntensity) {
                    const intensity = archetypeIntensity.curve(this.scrollProgress) * state.visibilityRatio;
                    state.element.style.setProperty('--archetype-intensity', intensity);
                }
            }
        });
    }

    updateComponentVisibility(componentId, intersectionRatio, isIntersecting) {
        const state = this.componentStates.get(componentId);
        if (!state) return;

        state.visibilityRatio = intersectionRatio;
        state.isActive = isIntersecting && intersectionRatio > 0.1;

        // Update reveal progress based on intersection ratio
        if (isIntersecting) {
            state.revealProgress = Math.min(1, intersectionRatio * 1.2);
        } else {
            state.revealProgress = Math.max(0, state.revealProgress - 0.1);
        }

        state.element.style.setProperty('--reveal-progress', state.revealProgress);
        state.element.style.setProperty('--visibility-ratio', intersectionRatio);
    }

    triggerComponentReveal(element, intersectionRatio) {
        const componentId = element.getAttribute('data-component');
        const state = this.componentStates.get(componentId);

        if (!state || state.hasRevealed) return;

        // Trigger reveal animation based on archetype
        const archetype = element.getAttribute('data-archetype');
        this.applyArchetypeReveal(element, archetype, intersectionRatio);

        // Mark as revealed
        state.hasRevealed = true;
        element.classList.add('scroll-revealed');

        console.log(`✨ Component revealed: ${componentId} (${archetype}) at ${Math.round(intersectionRatio * 100)}% visibility`);
    }

    applyArchetypeReveal(element, archetype, intensity) {
        // Remove any existing reveal classes
        element.classList.remove('reveal-owl-wisdom', 'reveal-safe-harbor', 'reveal-mirror-recognition', 'reveal-integrated-all');

        // Apply archetype-specific reveal
        const revealClass = `reveal-${archetype.replace('_', '-')}`;
        element.classList.add(revealClass);

        // Set reveal timing based on archetype
        const timings = {
            owl_wisdom: '0.8s',
            safe_harbor: '1.0s',
            mirror_recognition: '1.2s',
            integrated_all: '1.5s'
        };

        element.style.setProperty('--reveal-duration', timings[archetype] || '1.0s');
        element.style.setProperty('--reveal-intensity', intensity);
    }

    handleComponentExit(element) {
        const componentId = element.getAttribute('data-component');
        const state = this.componentStates.get(componentId);

        if (!state) return;

        // Gentle fade for components leaving viewport
        element.classList.add('scroll-exiting');

        setTimeout(() => {
            element.classList.remove('scroll-exiting');
        }, 600);
    }

    triggerActScrollEffects(actName) {
        const effects = {
            act1_arrival: () => this.triggerSafeArrivalEffects(),
            act2_exploration: () => this.triggerExplorationEffects(),
            act3_trust_building: () => this.triggerTrustBuildingEffects(),
            act4_recognition: () => this.triggerRecognitionEffects(),
            act5_action: () => this.triggerActionEffects()
        };

        if (effects[actName]) {
            effects[actName]();
        }
    }

    triggerSafeArrivalEffects() {
        document.body.style.setProperty('--emotional-temperature', '0.9');
        document.body.style.setProperty('--safety-intensity', '1.0');
        document.body.style.setProperty('--breathing-room-multiplier', '1.3');
    }

    triggerExplorationEffects() {
        document.body.style.setProperty('--wisdom-intensity', '0.9');
        document.body.style.setProperty('--information-density', '0.8');
        document.body.style.setProperty('--cognitive-load-comfort', '1.0');
    }

    triggerTrustBuildingEffects() {
        document.body.style.setProperty('--safety-intensity', '1.0');
        document.body.style.setProperty('--trust-building-glow', '0.8');
        document.body.style.setProperty('--professional-warmth', '0.9');
    }

    triggerRecognitionEffects() {
        document.body.style.setProperty('--recognition-intensity', '1.0');
        document.body.style.setProperty('--personal-connection-glow', '0.9');
        document.body.style.setProperty('--authenticity-resonance', '1.0');

        // Trigger recognition breakthrough animation
        document.body.classList.add('recognition-breakthrough');

        setTimeout(() => {
            document.body.classList.remove('recognition-breakthrough');
        }, 3000);
    }

    triggerActionEffects() {
        document.body.style.setProperty('--action-confidence', '1.0');
        document.body.style.setProperty('--wisdom-intensity', '0.8');
        document.body.style.setProperty('--safety-intensity', '0.9');
        document.body.style.setProperty('--recognition-intensity', '0.8');
    }

    activateActComponents(actName) {
        // Find components belonging to this act
        const actComponents = Array.from(this.components).filter(
            comp => comp.getAttribute('data-act') === actName
        );

        actComponents.forEach((component, index) => {
            // Staggered activation for visual flow
            setTimeout(() => {
                component.classList.add('act-activated');
                component.classList.add('signature-active');

                // Trigger entrance animation
                const archetype = component.getAttribute('data-archetype');
                this.triggerEntranceAnimation(component, archetype);
            }, index * 200);
        });
    }

    triggerEntranceAnimation(element, archetype) {
        const animations = {
            owl_wisdom: 'entrance-gentle-fade-up',
            safe_harbor: 'entrance-warm-embrace',
            mirror_recognition: 'entrance-recognition-glow',
            integrated_all: 'entrance-harmonious-reveal'
        };

        const animationClass = animations[archetype] || 'entrance-gentle-fade-up';
        element.classList.add(animationClass);

        // Remove animation class after completion
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 1500);
    }

    triggerScrollEnhancements() {
        // Add visual feedback for active scrolling
        if (this.isScrolling) {
            document.body.classList.add('actively-scrolling');
        }

        // Parallax effect for certain elements
        this.applyParallaxEffects();

        // Progressive disclosure based on scroll position
        this.updateProgressiveDisclosure();
    }

    applyParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + this.scrollPosition;
            const elementHeight = rect.height;

            // Only apply parallax when element is near viewport
            if (elementTop < this.scrollPosition + this.viewportHeight &&
                elementTop + elementHeight > this.scrollPosition) {

                const parallaxValue = (this.scrollPosition - elementTop) * speed;
                element.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    }

    updateProgressiveDisclosure() {
        // Show/hide elements based on scroll progress
        const progressiveElements = document.querySelectorAll('[data-reveal-at]');

        progressiveElements.forEach(element => {
            const revealPoint = parseFloat(element.getAttribute('data-reveal-at'));

            if (this.scrollProgress >= revealPoint) {
                element.classList.add('progressively-revealed');
            } else {
                element.classList.remove('progressively-revealed');
            }
        });
    }

    onScrollStop() {
        console.log(`🛑 Scroll stopped at ${Math.round(this.scrollProgress * 100)}%`);

        // Trigger any scroll-stop specific effects
        document.body.classList.add('scroll-stopped');

        setTimeout(() => {
            document.body.classList.remove('scroll-stopped');
        }, 1000);

        // Check for achievement moments
        this.checkScrollAchievements();
    }

    checkScrollAchievements() {
        // Recognition breakthrough achievement
        if (this.scrollProgress >= 0.7 && this.scrollProgress <= 0.8) {
            this.triggerRecognitionAchievement();
        }

        // Journey completion achievement
        if (this.scrollProgress >= 0.95) {
            this.triggerJourneyCompletionAchievement();
        }
    }

    triggerRecognitionAchievement() {
        if (document.body.classList.contains('recognition-achieved')) return;

        document.body.classList.add('recognition-achieved');
        console.log('🎉 Recognition breakthrough achieved!');

        // Special recognition effects
        const recognitionComponents = document.querySelectorAll('[data-archetype="mirror_recognition"]');
        recognitionComponents.forEach(comp => {
            comp.classList.add('achievement-glow');

            setTimeout(() => {
                comp.classList.remove('achievement-glow');
            }, 2000);
        });
    }

    triggerJourneyCompletionAchievement() {
        if (document.body.classList.contains('journey-completed')) return;

        document.body.classList.add('journey-completed');
        console.log('🏆 Complete journey achievement unlocked!');

        // Celebration effects
        document.body.classList.add('celebration-mode');

        setTimeout(() => {
            document.body.classList.remove('celebration-mode');
        }, 3000);
    }

    recalculatePositions() {
        this.viewportHeight = window.innerHeight;
        this.documentHeight = document.documentElement.scrollHeight;

        // Recalculate component positions
        this.componentStates.forEach((state, componentId) => {
            const rect = state.element.getBoundingClientRect();
            const scrollTop = window.pageYOffset;

            state.top = rect.top + scrollTop;
            state.height = rect.height;
        });

        this.updateScrollPosition();
        this.updateActProgression();
    }

    startProgressionLoop() {
        const progressionLoop = () => {
            this.updateArchetypeIntensities();
            this.updateProgressiveDisclosure();
            requestAnimationFrame(progressionLoop);
        };

        requestAnimationFrame(progressionLoop);
    }

    // Public API methods
    jumpToAct(actName) {
        const threshold = this.actThresholds[actName];
        if (!threshold) return;

        const targetScroll = (threshold.start + threshold.end) / 2 * (this.documentHeight - this.viewportHeight);

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }

    getCurrentState() {
        return {
            scrollProgress: this.scrollProgress,
            currentAct: this.getCurrentActByScroll(),
            actProgress: this.getActProgress(this.getCurrentActByScroll()),
            isScrolling: this.isScrolling,
            componentStates: Array.from(this.componentStates.entries()).map(([id, state]) => ({
                id,
                archetype: state.archetype,
                act: state.act,
                visibilityRatio: state.visibilityRatio,
                isActive: state.isActive,
                hasRevealed: state.hasRevealed
            }))
        };
    }

    destroy() {
        this.intersectionObserver.disconnect();
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        clearTimeout(this.scrollTimeout);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.scrollArchetypeProgression = new ScrollTriggeredArchetypeProgression();

    // Debug: Add global access for testing
    window.jumpToAct = (actName) => window.scrollArchetypeProgression.jumpToAct(actName);
    window.getScrollState = () => window.scrollArchetypeProgression.getCurrentState();

    console.log('🌊 Scroll-Triggered Archetype Progression System Ready');
    console.log('🔧 Debug commands: jumpToAct("act4_recognition"), getScrollState()');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollTriggeredArchetypeProgression;
}
