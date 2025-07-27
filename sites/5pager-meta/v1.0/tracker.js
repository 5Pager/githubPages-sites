// 5Pager UTM Tracking & Lead Capture System
(function() {
    'use strict';
    
    // Initialize tracking on page load
    document.addEventListener('DOMContentLoaded', function() {
        initializeTracking();
        setupFormTracking();
        trackPageView();
    });
    
    function initializeTracking() {
        // Capture UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmData = {
            source: urlParams.get('utm_source') || 'direct',
            medium: urlParams.get('utm_medium') || 'none',
            campaign: urlParams.get('utm_campaign') || 'none',
            content: urlParams.get('utm_content') || 'none',
            term: urlParams.get('utm_term') || 'none',
            // 5Pager specific tracking
            packet: urlParams.get('5p_packet') || 'none',
            entry: getEntryPage(),
            intent: urlParams.get('5p_intent') || 'browse',
            timestamp: new Date().toISOString(),
            sessionId: getOrCreateSessionId()
        };
        
        // Store UTM data in sessionStorage
        sessionStorage.setItem('5pager_utm', JSON.stringify(utmData));
        
        // Store in localStorage for lead attribution
        const leadData = JSON.parse(localStorage.getItem('5pager_lead_data') || '{}');
        if (!leadData.firstVisit) {
            leadData.firstVisit = utmData;
            leadData.visitCount = 1;
        } else {
            leadData.visitCount = (leadData.visitCount || 1) + 1;
        }
        leadData.lastVisit = utmData;
        localStorage.setItem('5pager_lead_data', JSON.stringify(leadData));
    }
    
    function getEntryPage() {
        const path = window.location.pathname;
        if (path.includes('about')) return 'about';
        if (path.includes('method')) return 'method';
        if (path.includes('services')) return 'services';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }
    
    function getOrCreateSessionId() {
        let sessionId = sessionStorage.getItem('5pager_session');
        if (!sessionId) {
            sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('5pager_session', sessionId);
        }
        return sessionId;
    }
    
    function trackPageView() {
        const utmData = JSON.parse(sessionStorage.getItem('5pager_utm') || '{}');
        const pageData = {
            ...utmData,
            page: getEntryPage(),
            url: window.location.href,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
        
        // Send to analytics (replace with actual endpoint)
        sendTrackingData('pageview', pageData);
        
        // Console log for development
        console.log('5Pager Tracking - Page View:', pageData);
    }
    
    function setupFormTracking() {
        // Track form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent default submission for demo
                
                const formData = new FormData(form);
                const leadData = JSON.parse(localStorage.getItem('5pager_lead_data') || '{}');
                
                const submission = {
                    // Form data
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    business: formData.get('business'),
                    challenge: formData.get('challenge'),
                    urgency: formData.get('urgency'),
                    
                    // Attribution data
                    ...leadData.firstVisit,
                    
                    // Submission details
                    formType: 'clarity_interview',
                    submissionTime: new Date().toISOString(),
                    pageSubmitted: getEntryPage(),
                    visitCount: leadData.visitCount || 1
                };
                
                // Send lead data
                sendTrackingData('lead_submission', submission);
                
                // Show success message (replace with actual form handling)
                showFormSuccess();
                
                console.log('5Pager Tracking - Lead Submission:', submission);
            });
        });
        
        // Track form field interactions
        const formFields = document.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                trackFieldInteraction(field.name || field.id, 'focus');
            });
            
            field.addEventListener('blur', function() {
                if (field.value.length > 0) {
                    trackFieldInteraction(field.name || field.id, 'complete');
                }
            });
        });
    }
    
    function trackFieldInteraction(fieldName, action) {
        const utmData = JSON.parse(sessionStorage.getItem('5pager_utm') || '{}');
        const interactionData = {
            ...utmData,
            fieldName: fieldName,
            action: action,
            timestamp: new Date().toISOString()
        };
        
        sendTrackingData('field_interaction', interactionData);
    }
    
    function sendTrackingData(eventType, data) {
        // Replace this with actual endpoint
        const endpoint = '/api/track'; // This would be your actual tracking endpoint
        
        // For now, just store in localStorage for demo
        const trackingLog = JSON.parse(localStorage.getItem('5pager_tracking_log') || '[]');
        trackingLog.push({
            eventType: eventType,
            data: data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('5pager_tracking_log', JSON.stringify(trackingLog));
        
        // In production, send to your analytics endpoint:
        /*
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventType: eventType,
                data: data
            })
        }).catch(err => console.log('Tracking error:', err));
        */
    }
    
    function showFormSuccess() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 12px;
                box-shadow: 0 4px 16px rgba(0,0,0,0.2);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
            ">
                <h3 style="color: #2563eb; margin-bottom: 1rem;">Application Submitted!</h3>
                <p style="margin-bottom: 1.5rem;">We'll review your application within 24 hours and get back to you about scheduling your clarity interview.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #2563eb;
                    color: white;
                    border: none;
                    padding: 0.5rem 1.5rem;
                    border-radius: 6px;
                    cursor: pointer;
                ">Close</button>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 9999;
            " onclick="this.parentElement.remove()"></div>
        `;
        
        document.body.appendChild(successDiv);
    }
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track quarter milestones
            if (maxScroll >= 25 && maxScroll < 50 && !window.tracked25) {
                sendTrackingData('scroll_depth', { depth: 25 });
                window.tracked25 = true;
            } else if (maxScroll >= 50 && maxScroll < 75 && !window.tracked50) {
                sendTrackingData('scroll_depth', { depth: 50 });
                window.tracked50 = true;
            } else if (maxScroll >= 75 && !window.tracked75) {
                sendTrackingData('scroll_depth', { depth: 75 });
                window.tracked75 = true;
            }
        }
    });
    
    // Track CTA clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-primary')) {
            const utmData = JSON.parse(sessionStorage.getItem('5pager_utm') || '{}');
            sendTrackingData('cta_click', {
                ...utmData,
                ctaText: e.target.textContent,
                ctaLocation: getEntryPage(),
                timestamp: new Date().toISOString()
            });
        }
    });
    
    // Expose tracking data for debugging
    window.get5PagerTracking = function() {
        return {
            utm: JSON.parse(sessionStorage.getItem('5pager_utm') || '{}'),
            leadData: JSON.parse(localStorage.getItem('5pager_lead_data') || '{}'),
            trackingLog: JSON.parse(localStorage.getItem('5pager_tracking_log') || '[]')
        };
    };
    
})();
