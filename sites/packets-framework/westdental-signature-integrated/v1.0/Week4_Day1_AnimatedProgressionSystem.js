/**
 * Week 4 Day 1: Animated Progression System
 * Five-Act Eye Journey Story Implementation
 * "The Journey to Self-Respectful Smile Recognition"
 */

class AnimatedProgressionSystem {
    constructor() {
        this.currentAct = 0;
        this.timeElapsed = 0;
        this.scrollProgress = 0;
        this.userEngagement = {
            hovers: 0,
            clicks: 0,
            scrollEvents: 0,
            dwellTime: 0
        };

        // Five-Act Structure Timing (from EyeJourney_Story_Framework.json)
        this.acts = {
            act1_arrival: {
                timeframe: { start: 0, end: 10 },
                components: ['comp_001', 'comp_007'],
                storyFunction: 'Safe harbor establishment and brand differentiation',
                emotionalGoal: 'Immediate calm and curiosity activation',
                archetype: 'safe_harbor'
            },
            act2_exploration: {
                timeframe: { start: 10, end: 45 },
                components: ['comp_002', 'comp_008', 'comp_012', 'comp_013', 'comp_014'],
                storyFunction: 'Value discovery and service education',
                emotionalGoal: 'Growing interest and possibility awareness',
                archetype: 'owl_wisdom'
            },
            act3_trust_building: {
                timeframe: { start: 30, end: 60 },
                components: ['comp_004', 'comp_009', 'comp_015', 'comp_016', 'comp_017'],
                storyFunction: 'Credibility establishment and anti-chain positioning',
                emotionalGoal: 'Trust development and safety confirmation',
                archetype: 'safe_harbor'
            },
            act4_recognition: {
                timeframe: { start: 45, end: 75 },
                components: ['comp_003', 'comp_005', 'comp_010'],
                storyFunction: 'Self-recognition breakthrough and transformation vision',
                emotionalGoal: 'Personal connection and authentic empowerment',
                archetype: 'mirror_recognition'
            },
            act5_action: {
                timeframe: { start: 60, end: 120 },
                components: ['comp_006', 'comp_011'],
                storyFunction: 'Confident decision invitation with gentle urgency',
                emotionalGoal: 'Empowered action without pressure',
                archetype: 'integrated_all'
            }
        };

        // Component Animation States
        this.componentStates = {
            dormant: 'signature-dormant',
            awakening: 'signature-awakening',
            active: 'signature-active',
            resonating: 'signature-resonating',
            climactic: 'signature-climactic'
        };

        // Archetype Expression Intensities
        this.archetypeIntensities = {
            owl_wisdom: {
                low: 0.3,
                medium: 0.6,
                high: 0.9,
                peak: 1.0
            },
            safe_harbor: {
                low: 0.4,
                medium: 0.7,
                high: 0.9,
                peak: 1.0
            },
            mirror_recognition: {
                low: 0.2,
                medium: 0.5,
                high: 0.8,
                peak: 1.0
            }
        };

        this.init();
    }

    init() {
        this.startTimeTracking();
        this.setupScrollTracking();
        this.setupUserEngagementTracking();
        this.setupIntersectionObserver();
        this.initializeComponentStates();
        this.startProgressionLoop();
    }

    startTimeTracking() {
        this.startTime = Date.now();
        setInterval(() => {
            this.timeElapsed = (Date.now() - this.startTime) / 1000;
            this.updateProgressionBasedOnTime();
        }, 100);
    }

    setupScrollTracking() {
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            this.userEngagement.scrollEvents++;
            this.scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.updateProgressionBasedOnScroll();
            }, 50);
        });
    }

    setupUserEngagementTracking() {
        // Track meaningful interactions that indicate engagement
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches('[class*="comp_"]')) {
                this.userEngagement.hovers++;
                this.enhanceComponentOnHover(e.target);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('[class*="comp_"]')) {
                this.userEngagement.clicks++;
                this.triggerComponentResonance(e.target);
            }
        });

        // Track dwell time for each act
        setInterval(() => {
            this.userEngagement.dwellTime++;
        }, 1000);
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerComponentAwakening(entry.target);
                } else {
                    this.returnComponentToDormant(entry.target);
                }
            });
        }, {
            threshold: [0.1, 0.3, 0.6, 0.9],
            rootMargin: '0px 0px -20% 0px'
        });

        // Observe all components
        Object.values(this.acts).forEach(act => {
            act.components.forEach(compId => {
                const element = document.querySelector(`[data-component="${compId}"]`);
                if (element) {
                    this.observer.observe(element);
                }
            });
        });
    }

    initializeComponentStates() {
        // Set all components to dormant state initially
        Object.values(this.acts).forEach(act => {
            act.components.forEach(compId => {
                const element = document.querySelector(`[data-component="${compId}"]`);
                if (element) {
                    element.classList.add(this.componentStates.dormant);
                    element.setAttribute('data-archetype', act.archetype);
                    element.setAttribute('data-act', this.getActNameByComponent(compId));
                }
            });
        });
    }

    updateProgressionBasedOnTime() {
        const currentAct = this.getCurrentActByTime();
        if (currentAct !== this.currentAct) {
            this.transitionToAct(currentAct);
        }
        this.updateEmotionalIntensity();
    }

    updateProgressionBasedOnScroll() {
        // Enhance progression based on scroll position
        const scrollBasedAct = this.getCurrentActByScroll();
        this.enhanceActBasedOnScroll(scrollBasedAct);
    }

    getCurrentActByTime() {
        for (const [actName, act] of Object.entries(this.acts)) {
            if (this.timeElapsed >= act.timeframe.start && this.timeElapsed <= act.timeframe.end) {
                return actName;
            }
        }
        return 'act5_action'; // Default to final act if beyond timeline
    }

    getCurrentActByScroll() {
        if (this.scrollProgress < 0.2) return 'act1_arrival';
        if (this.scrollProgress < 0.4) return 'act2_exploration';
        if (this.scrollProgress < 0.6) return 'act3_trust_building';
        if (this.scrollProgress < 0.8) return 'act4_recognition';
        return 'act5_action';
    }

    transitionToAct(newAct) {
        this.currentAct = newAct;
        const act = this.acts[newAct];

        console.log(`🎭 Transitioning to ${newAct}: ${act.storyFunction}`);

        // Activate components for this act
        act.components.forEach(compId => {
            this.activateComponent(compId, act.archetype, act.emotionalGoal);
        });

        // Update document body with current act class
        document.body.className = document.body.className.replace(/act-\w+/g, '');
        document.body.classList.add(`act-${newAct.split('_')[0]}`);

        // Trigger act-specific animations
        this.triggerActAnimation(newAct);
    }

    activateComponent(compId, archetype, emotionalGoal) {
        const element = document.querySelector(`[data-component="${compId}"]`);
        if (!element) return;

        // Remove previous states
        Object.values(this.componentStates).forEach(state => {
            element.classList.remove(state);
        });

        // Add active state
        element.classList.add(this.componentStates.active);

        // Add archetype-specific activation
        element.classList.add(`${archetype}-active`);

        // Set emotional goal as data attribute for CSS targeting
        element.setAttribute('data-emotional-goal', emotionalGoal.replace(/\s+/g, '-').toLowerCase());

        // Trigger entrance animation
        this.triggerComponentEntrance(element, archetype);
    }

    triggerComponentEntrance(element, archetype) {
        const entranceAnimations = {
            owl_wisdom: 'gentle-fade-up',
            safe_harbor: 'warm-embrace',
            mirror_recognition: 'recognition-glow',
            integrated_all: 'harmonious-reveal'
        };

        const animationClass = `entrance-${entranceAnimations[archetype]}`;
        element.classList.add(animationClass);

        // Remove animation class after completion
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 1000);
    }

    triggerActAnimation(actName) {
        const animations = {
            act1_arrival: this.animateArrival,
            act2_exploration: this.animateExploration,
            act3_trust_building: this.animateTrustBuilding,
            act4_recognition: this.animateRecognition,
            act5_action: this.animateAction
        };

        if (animations[actName]) {
            animations[actName].call(this);
        }
    }

    animateArrival() {
        // Safe harbor establishment - warm, protective feeling
        document.body.style.setProperty('--emotional-temperature', '0.8');
        document.body.style.setProperty('--safety-intensity', '1.0');
        document.body.style.setProperty('--breathing-room-multiplier', '1.2');
    }

    animateExploration() {
        // Owl wisdom activation - thoughtful, organized discovery
        document.body.style.setProperty('--wisdom-intensity', '0.9');
        document.body.style.setProperty('--information-density', '0.7');
        document.body.style.setProperty('--cognitive-load-comfort', '1.0');
    }

    animateTrustBuilding() {
        // Enhanced safe harbor - deeper protective feeling
        document.body.style.setProperty('--safety-intensity', '1.0');
        document.body.style.setProperty('--trust-building-glow', '0.8');
        document.body.style.setProperty('--professional-warmth', '0.9');
    }

    animateRecognition() {
        // Mirror recognition breakthrough - personal connection
        document.body.style.setProperty('--recognition-intensity', '1.0');
        document.body.style.setProperty('--personal-connection-glow', '0.9');
        document.body.style.setProperty('--authenticity-resonance', '1.0');
    }

    animateAction() {
        // Integrated archetype harmony - confident invitation
        document.body.style.setProperty('--wisdom-intensity', '0.8');
        document.body.style.setProperty('--safety-intensity', '0.9');
        document.body.style.setProperty('--recognition-intensity', '0.8');
        document.body.style.setProperty('--action-confidence', '1.0');
    }

    updateEmotionalIntensity() {
        // Calculate emotional intensity based on time, engagement, and scroll
        const timeProgress = Math.min(this.timeElapsed / 120, 1); // 2-minute max
        const engagementBoost = Math.min(this.userEngagement.hovers * 0.1 + this.userEngagement.clicks * 0.2, 0.5);
        const scrollBoost = this.scrollProgress * 0.3;

        const totalIntensity = Math.min(timeProgress + engagementBoost + scrollBoost, 1);

        document.body.style.setProperty('--emotional-intensity', totalIntensity);
        document.body.style.setProperty('--user-engagement-level', engagementBoost);
    }

    enhanceComponentOnHover(element) {
        element.classList.add('signature-enhanced-hover');

        setTimeout(() => {
            element.classList.remove('signature-enhanced-hover');
        }, 300);
    }

    triggerComponentResonance(element) {
        element.classList.add(this.componentStates.resonating);

        // Create ripple effect for mirror recognition components
        if (element.getAttribute('data-archetype') === 'mirror_recognition') {
            this.createRecognitionRipple(element);
        }

        setTimeout(() => {
            element.classList.remove(this.componentStates.resonating);
        }, 1500);
    }

    createRecognitionRipple(element) {
        const ripple = document.createElement('div');
        ripple.classList.add('recognition-ripple');
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }

    triggerComponentAwakening(element) {
        if (!element.classList.contains(this.componentStates.active)) {
            element.classList.add(this.componentStates.awakening);
        }
    }

    returnComponentToDormant(element) {
        // Only return to dormant if not in current act
        const componentId = element.getAttribute('data-component');
        const currentAct = this.acts[this.currentAct];

        if (currentAct && !currentAct.components.includes(componentId)) {
            Object.values(this.componentStates).forEach(state => {
                element.classList.remove(state);
            });
            element.classList.add(this.componentStates.dormant);
        }
    }

    getActNameByComponent(compId) {
        for (const [actName, act] of Object.entries(this.acts)) {
            if (act.components.includes(compId)) {
                return actName;
            }
        }
        return 'unknown';
    }

    enhanceActBasedOnScroll(scrollBasedAct) {
        // Enhance the current act based on scroll position
        if (scrollBasedAct !== this.currentAct) {
            // Create smooth transition between time-based and scroll-based progression
            const element = document.querySelector(`[data-act="${scrollBasedAct}"]`);
            if (element) {
                element.classList.add('scroll-enhanced');
            }
        }
    }

    startProgressionLoop() {
        // Main progression loop
        const progressionLoop = () => {
            this.updateEmotionalIntensity();
            this.checkForClimax();
            requestAnimationFrame(progressionLoop);
        };

        requestAnimationFrame(progressionLoop);
    }

    checkForClimax() {
        // Check if we've reached the recognition climax
        if (this.currentAct === 'act4_recognition' && this.userEngagement.dwellTime > 60) {
            document.body.classList.add('climax-reached');
            this.triggerClimaxEffects();
        }
    }

    triggerClimaxEffects() {
        // Special effects for the recognition breakthrough moment
        const recognitionComponents = this.acts.act4_recognition.components;
        recognitionComponents.forEach(compId => {
            const element = document.querySelector(`[data-component="${compId}"]`);
            if (element) {
                element.classList.add(this.componentStates.climactic);
            }
        });
    }

    // Public methods for external integration
    forceTransitionToAct(actName) {
        if (this.acts[actName]) {
            this.transitionToAct(actName);
        }
    }

    getCurrentProgress() {
        return {
            currentAct: this.currentAct,
            timeElapsed: this.timeElapsed,
            scrollProgress: this.scrollProgress,
            userEngagement: this.userEngagement,
            emotionalIntensity: getComputedStyle(document.body).getPropertyValue('--emotional-intensity')
        };
    }

    // Debug methods
    logCurrentState() {
        console.log('🎭 Current Progression State:', this.getCurrentProgress());
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.animatedProgressionSystem = new AnimatedProgressionSystem();

    // Debug: Log state every 5 seconds
    setInterval(() => {
        window.animatedProgressionSystem.logCurrentState();
    }, 5000);
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimatedProgressionSystem;
}
