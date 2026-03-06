// Post-Production Expert Script
// Advanced video optimization for watch time, engagement, and monetization

const postProdExpertDatabase = {
    // Smart cuts strategy based on content type and platform
    smartCutsStrategy: {
        short: {
            name: "Short Form (30-90s)",
            avgSceneLength: "2-4 seconds",
            cutFrequency: "Every 3-5 seconds",
            jumpCuts: true,
            transitions: "Fast cuts with effects",
            potentialSavings: "5-15 seconds",
            keyPoints: [
                "Cut on action or impact",
                "Remove hesitation and dead air",
                "Use jump cuts for dynamic feel",
                "Keep pacing aggressive"
            ]
        },
        medium: {
            name: "Medium Form (3-8 minutes)",
            avgSceneLength: "4-8 seconds",
            cutFrequency: "Every 5-8 seconds",
            jumpCuts: "Optional",
            transitions: "Mix of cuts and transitions",
            potentialSavings: "15-30 seconds",
            keyPoints: [
                "Cut between topics/scenes",
                "Remove long pauses and intros",
                "Use B-roll to cover cuts",
                "Maintain rhythm and flow"
            ]
        },
        long: {
            name: "Long Form (10-20 minutes)",
            avgSceneLength: "8-15 seconds",
            cutFrequency: "Every 8-12 seconds",
            jumpCuts: false,
            transitions: "Smooth transitions, minimal cuts",
            potentialSavings: "30-60 seconds",
            keyPoints: [
                "Plan scenes carefully",
                "Use chapters for engagement",
                "Cut between segments naturally",
                "Maintain conversational flow"
            ]
        },
        verylong: {
            name: "Very Long Form (20+ minutes)",
            avgSceneLength: "15-30 seconds",
            cutFrequency: "Every 12-20 seconds",
            jumpCuts: false,
            transitions: "Subtle transitions",
            potentialSavings: "60-120 seconds",
            keyPoints: [
                "Use chapters extensively",
                "Strategic B-roll breaks",
                "Scene transitions between topics",
                "Maintain viewer interest throughout"
            ]
        }
    },

    // Caption optimization strategies
    captionStrategy: {
        seo: {
            name: "SEO Optimization",
            keywordPlacement: "First 2-3 words critical",
            updateFrequency: "Monthly trend checks",
            examples: ["[POWERFUL MUSIC]", "[QUICK CUT]", "[IMPORTANT MOMENT]"],
            strategy: [
                "Use trending keywords naturally",
                "Include search terms in first line",
                "Add sound descriptions for searchability",
                "Use brackets for [SOUND] descriptions"
            ]
        },
        accessibility: {
            name: "Accessibility Focus",
            format: "Full dialogue + sounds + music cues",
            timing: "0.5-2 seconds per caption",
            examples: ["[Uplifting music plays]", "[Author speaks rapidly]", "[Audience applauds]"],
            strategy: [
                "Include ALL spoken words",
                "Describe significant sounds",
                "Mark music mood and intensity",
                "Note speaker emotions"
            ]
        },
        engagement: {
            name: "Engagement Captions",
            tone: "Conversational and trendy",
            style: "Emojis and animations OK",
            examples: ["He said WHAT?! 😱", "Wait for it... ⏳", "This changes EVERYTHING 🔥"],
            strategy: [
                "Mirror spoken emphasis",
                "Add personality and tone",
                "Strategic pause captions",
                "Build suspense and curiosity"
            ]
        }
    },

    // Visual enhancement techniques
    visualEnhancement: {
        colorGrading: {
            category: "Color & Tone",
            techniques: [
                { name: "Warm Grading", lut: "Summer.lut", mood: "Energetic, friendly, warm" },
                { name: "Cool Grading", lut: "Winter.lut", mood: "Professional, serious, calm" },
                { name: "Cinematic", lut: "FilmStock.lut", mood: "Premium, high-production value" },
                { name: "Vibrant", lut: "Vivid.lut", mood: "Bold, attention-grabbing, trendy" }
            ]
        },
        overlays: {
            category: "Visual Elements",
            types: [
                { name: "Text Overlays", purpose: "Emphasize key points, 2-4 seconds each" },
                { name: "Lower Thirds", purpose: "Guest names/titles, builds credibility" },
                { name: "Progress Bars", purpose: "Show video progress, increase perceived value" },
                { name: "Highlight Boxes", purpose: "Draw attention to key moments" }
            ]
        },
        effects: {
            category: "Motion & Effects",
            recommendations: [
                { type: "Zoom", timing: "0.2-0.5s", use: "Emphasize important moments" },
                { type: "Transition", timing: "0.3-0.5s", use: "Between topics/scenes" },
                { type: "Freeze", timing: "0.5-1s", use: "Build suspense or show key frame" },
                { type: "Speed Ramp", timing: "0.5-2s", use: "Show importance, comedic effect" }
            ]
        }
    },

    // Platform-specific formatting
    platformFormats: {
        youtube: {
            platform: "YouTube",
            aspectRatio: "16:9",
            resolution: "1920x1080 (minimum)",
            frameRate: "30fps or 60fps",
            maxDuration: "No limit (for monetization: 8+ minutes recommended)",
            cutStrategy: "Smooth, professional cuts",
            captionIssue: "Critical - 85% watch without sound",
            colorSpace: "Rec.709",
            recommendations: [
                "Hook in first 3 seconds",
                "Add chapters every 2-3 minutes",
                "Use end screens at 20 seconds before end",
                "Enable monetization at 8+ minutes"
            ]
        },
        youtubeShort: {
            platform: "YouTube Shorts",
            aspectRatio: "9:16",
            resolution: "1080x1920",
            frameRate: "30fps",
            maxDuration: "60 seconds",
            cutStrategy: "Fast, aggressive cuts",
            captionIssue: "Essential - most watch muted",
            colorSpace: "Rec.709",
            recommendations: [
                "Hook in first 1 second",
                "Use full-screen captions",
                "Fast pacing throughout",
                "Trending audio/music"
            ]
        },
        tiktok: {
            platform: "TikTok",
            aspectRatio: "9:16",
            resolution: "1080x1920",
            frameRate: "24-60fps",
            maxDuration: "10 minutes (varies by account)",
            cutStrategy: "Ultra-fast cuts, jump cuts",
            captionIssue: "Critical - 70% sound off",
            colorSpace: "Wide color gamut",
            recommendations: [
                "Grab attention immediately (0.3s)",
                "Constant visual changes",
                "Bold text overlays",
                "Trendy effects and transitions"
            ]
        },
        instagram: {
            platform: "Instagram Reels",
            aspectRatio: "9:16",
            resolution: "1080x1920",
            frameRate: "23-60fps",
            maxDuration: "90 seconds",
            cutStrategy: "Fast cuts with style",
            captionIssue: "Important - 50% sound off",
            colorSpace: "Vibrant, saturated",
            recommendations: [
                "Aesthetic focus",
                "Trending music integration",
                "Hashtag strategy critical",
                "Engagement calls-to-action"
            ]
        },
        twitch: {
            platform: "Twitch",
            aspectRatio: "16:9",
            resolution: "1920x1080 (recommended)",
            frameRate: "60fps (preferred)",
            maxDuration: "Unlimited (live)",
            cutStrategy: "Minimal cuts for streams",
            captionIssue: "Not critical for live",
            colorSpace: "Rec.709",
            recommendations: [
                "Consistent broadcasting schedule",
                "Chat interaction paramount",
                "Quality bitrate 6000+ Kbps",
                "Multi-platform streaming benefits"
            ]
        },
        facebook: {
            platform: "Facebook",
            aspectRatio: "16:9 or 1:1",
            resolution: "1200x627 (1:1: 1200x1200)",
            frameRate: "24-60fps",
            maxDuration: "No official limit",
            cutStrategy: "Moderate cuts",
            captionIssue: "Very important - 85% muted",
            colorSpace: "Rec.709",
            recommendations: [
                "Captions absolutely essential",
                "Longer videos perform well",
                "Native video over links",
                "Text overlay strategy critical"
            ]
        }
    },

    // Ad placement optimization
    adPlacement: {
        preroll: {
            type: "Pre-Roll Ad",
            position: "0-5 seconds",
            impact: "Low viewer frustration, high dropout if too long",
            strategy: "Keep intro quick, hook viewers immediately after",
            recommended: true,
            timing: "5-20 seconds max"
        },
        midroll: {
            type: "Mid-Roll Ads",
            position: "25%, 50%, 75% of video",
            impact: "High revenue, moderate viewer frustration",
            strategy: "Place at natural breaks or topic transitions",
            recommended: "2-3 per 10+ minute video",
            timing: "Two main opportunities"
        },
        postroll: {
            type: "Post-Roll Ad",
            position: "After main content",
            impact: "Lower CPM, acceptable to viewers",
            strategy: "Add 'Thank you' slide, tease next video",
            recommended: true,
            timing: "Always include"
        }
    },

    // Monetization multipliers and CPM data
    monetizationFactors: {
        niche: {
            tech: { baseCPM: "3-8", multiplier: 1.8, adFrequency: "High" },
            finance: { baseCPM: "4-12", multiplier: 2.0, adFrequency: "Very High" },
            business: { baseCPM: "2-6", multiplier: 1.5, adFrequency: "High" },
            education: { baseCPM: "1.5-4", multiplier: 1.2, adFrequency: "Medium" },
            lifestyle: { baseCPM: "1-3", multiplier: 0.8, adFrequency: "Medium" },
            entertainment: { baseCPM: "0.5-2", multiplier: 0.5, adFrequency: "Low" },
            gaming: { baseCPM: "1-4", multiplier: 1.0, adFrequency: "Medium" },
            fitness: { baseCPM: "1-3", multiplier: 0.9, adFrequency: "Low-Medium" }
        },
        engagement: {
            high: "1.5x-2.0x CPM boost",
            medium: "1.0x CPM baseline",
            low: "0.5x-0.8x CPM penalty"
        },
        watchTime: {
            "50%+ AVD": "1.3x CPM multiplier",
            "40-50% AVD": "1.1x CPM multiplier",
            "30-40% AVD": "1.0x CPM baseline",
            "<30% AVD": "0.7x CPM penalty"
        }
    },

    // Sponsorship integration guide
    sponsorshipGuide: {
        placement: {
            intro: {
                timing: "15-30 seconds in",
                duration: "10-15 seconds",
                style: "Quick mention, natural transition",
                impact: "Lower engagement impact if natural"
            },
            mid: {
                timing: "35-50% through",
                duration: "15-30 seconds",
                style: "Full integration, story-driven",
                impact: "Highest retention at this point"
            },
            outro: {
                timing: "Last 30 seconds",
                duration: "10-20 seconds",
                style: "Thank you mention, product show",
                impact: "Lower engagement but captures interested viewers"
            }
        },
        integration: [
            "Genuine product usage > Obvious endorsement",
            "Show real benefits and use cases",
            "Integrate into narrative naturally",
            "Include unique discount codes",
            "Disclose sponsorship (required by FTC)"
        ]
    },

    // Retention hooks and strategies
    retentionHooks: {
        pattern: {
            name: "Pattern Interrupt",
            timing: "Every 30-45 seconds",
            examples: ["Visual change", "Topic shift", "Sound effect", "Animation"],
            effectiveness: "Stops thumb scrolling"
        },
        curiosity: {
            name: "Curiosity Gap",
            timing: "After 20% of video",
            examples: ["Tease outcome", "Promise reveal", "Build mystery"],
            effectiveness: "Compels watching to end"
        },
        hooks: {
            name: "Engagement Hook",
            timing: "0-3 seconds + at 25%, 50%, 75%",
            examples: ["Question", "Bold statement", "Visual hook"],
            effectiveness: "Increases watch time"
        },
        cliffhanger: {
            name: "Cliffhanger/Tease",
            timing: "Near the end",
            examples: ["Next video preview", "Unexpected reveal", "Call to action"],
            effectiveness: "Drives repeat viewing and subscriptions"
        }
    }
};

// Main analysis function
function analyzePostProduction(event) {
    event.preventDefault();
    
    // Get form values
    const title = document.getElementById('expertTitle').value;
    const duration = document.getElementById('expertDuration').value;
    const platform = document.getElementById('expertPlatform').value;
    const niche = document.getElementById('expertNiche').value;
    const monetization = document.getElementById('expertMonetization').value;
    const goal = document.getElementById('expertGoal').value;
    const notes = document.getElementById('expertNotes').value;
    
    // Get focus areas
    const focusAreas = Array.from(document.querySelectorAll('input[name="focus"]:checked')).map(cb => cb.value);
    
    // Show loading state
    const btn = document.getElementById('analyzeBtn');
    const spinner = btn.querySelector('.loading-spinner');
    btn.classList.add('disabled');
    spinner.style.display = 'inline-block';
    
    // Simulate analysis time
    setTimeout(() => {
        // Perform analysis
        const analysis = performPostProductionAnalysis(title, duration, platform, niche, monetization, goal, focusAreas);
        
        // Display results
        displayExpertResults(analysis);
        
        // Reset button
        btn.classList.remove('disabled');
        spinner.style.display = 'none';
    }, 3500);
}

// Core analysis engine
function performPostProductionAnalysis(title, duration, platform, niche, monetization, goal, focusAreas) {
    const analysis = {
        title,
        duration,
        platform,
        niche,
        monetization,
        goal,
        timestamp: new Date().toLocaleString()
    };
    
    // Generate analysis sections
    if (focusAreas.includes('cuts')) {
        analysis.smartCuts = buildSmartCutsAnalysis(duration, platform);
    }
    if (focusAreas.includes('captions')) {
        analysis.captions = buildCaptionStrategy(platform, niche, title);
    }
    if (focusAreas.includes('visuals')) {
        analysis.visuals = buildVisualEnhancement(platform, niche);
    }
    if (focusAreas.includes('pacing')) {
        analysis.pacing = buildPacingStrategy(duration, platform);
    }
    if (focusAreas.includes('monetization')) {
        analysis.monetization = buildMonetizationStrategy(niche, duration, platform, monetization);
    }
    if (focusAreas.includes('retention')) {
        analysis.retention = buildRetentionStrategy(platform, duration);
    }
    
    return analysis;
}

// Smart cuts analysis
function buildSmartCutsAnalysis(duration, platform) {
    const cuts = postProdExpertDatabase.smartCutsStrategy[duration];
    
    return {
        title: "✂️ Smart Cut Analysis",
        content: `
            <p><strong>Duration Profile:</strong> ${cuts.name}</p>
            <p><strong>Scene Length:</strong> ${cuts.avgSceneLength}</p>
            <p><strong>Cut Frequency:</strong> ${cuts.cutFrequency}</p>
            <p><strong>Expected Time Savings:</strong> ${cuts.potentialSavings}</p>
            
            <h4 style="margin-top: 15px;">Key Cutting Techniques:</h4>
            <ul>
                ${cuts.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
            
            <div class="cut-strategy-box">
                <strong>Platform Consideration (${platform}):</strong>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    ${platform === 'youtube-short' || platform === 'tiktok' ? 
                        'Use aggressive jump cuts and fast transitions to maintain engagement on short-form content.' :
                        platform === 'youtube' ?
                        'Balance visual interest with professional appearance. Use B-roll and transitions to mask cuts.' :
                        'Adapt cut style to platform norms - maintain native feel for best performance.'}
                </p>
            </div>
            
            <div style="margin-top: 15px;">
                <strong>Implementation Checklist:</strong>
                <ul style="font-size: 0.9rem;">
                    <li>✓ Identify every instance of dead air, long pauses</li>
                    <li>✓ Cut on action for seamless transitions</li>
                    <li>✓ Use B-roll to mask any abrupt cuts</li>
                    <li>✓ Maintain audio continuity across cuts</li>
                    <li>✓ Preview cuts in sequence for rhythm</li>
                </ul>
            </div>
        `
    };
}

// Caption strategy
function buildCaptionStrategy(platform, niche, title) {
    const platformData = postProdExpertDatabase.platformFormats[platform];
    const strategy = postProdExpertDatabase.captionStrategy.engagement;
    
    return {
        title: "📝 Caption Optimization Strategy",
        content: `
            <p><strong>Platform Impact Level:</strong> <span style="color: #ef4444;">CRITICAL (${platformData.captionIssue})</span></p>
            
            <div class="caption-box">
                <strong>Caption Strategy for ${platform}:</strong>
                <p style="margin-top: 8px;">${strategy.tone}</p>
                <ul style="margin-top: 8px; font-size: 0.9rem;">
                    ${strategy.strategy.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <h4 style="margin-top: 15px;">SEO-Optimized Keywords:</h4>
            <p style="font-size: 0.9rem; color: #555;">
                "How to", "${niche}", "Best practices", "Complete guide", "Tutorial", "Tips and tricks"
            </p>
            
            <h4 style="margin-top: 15px;">Caption Examples from Your Content:</h4>
            <div style="background: #f3f4f6; padding: 12px; border-radius: 8px; margin-top: 8px; font-family: monospace; font-size: 0.85rem;">
                <p>[INTRO MUSIC PLAYS] 🎵</p>
                <p>He said WHAT?! 😱</p>
                <p>Wait for the plot twist...</p>
                <p>[KEY MOMENT] This changes EVERYTHING 🔥</p>
            </div>
            
            <div class="caption-box" style="margin-top: 15px;">
                <strong>Timing Guide:</strong>
                <ul style="font-size: 0.9rem;">
                    <li>Opening text: 2-3 seconds (hook viewers immediately)</li>
                    <li>Main captions: 1.5-2 seconds per line</li>
                    <li>Emphasis: 0.5-1 second for impact lines</li>
                    <li>Closing tease: 2-3 seconds (drive subscriptions)</li>
                </ul>
            </div>
        `
    };
}

// Visual enhancement guide
function buildVisualEnhancement(platform, niche) {
    const platformData = postProdExpertDatabase.platformFormats[platform];
    const visuals = postProdExpertDatabase.visualEnhancement;
    
    return {
        title: "✨ Visual Enhancement Guide",
        content: `
            <p><strong>Platform Standards:</strong> ${platformData.resolution} @ ${platformData.frameRate}, ${platformData.aspectRatio}</p>
            <p><strong>Color Space:</strong> ${platformData.colorSpace}</p>
            
            <h4 style="margin-top: 15px;">Color Grading Recommendations:</h4>
            <ul style="font-size: 0.9rem;">
                <li><strong>Warm Grading:</strong> Perfect for lifestyle/business content - creates approachable feeling</li>
                <li><strong>Cinematic:</strong> Best for premium/educational content - increases perceived value</li>
                <li><strong>Vibrant:</strong> Ideal for entertainment/TikTok - maximizes attention on small screens</li>
                <li><strong>Cool/Professional:</strong> For tech/finance content - builds credibility</li>
            </ul>
            
            <div class="visual-box" style="margin-top: 15px;">
                <strong>Motion Graphics Recommendations:</strong>
                <ul style="font-size: 0.9rem;">
                    <li>Text Overlays: Every 10-15 seconds maximum</li>
                    <li>Lower Thirds: Essential for ${niche === 'business' ? 'guest credibility' : 'viewer retention'}</li>
                    <li>Progress Indicators: Show value progression throughout video</li>
                    <li>Effect Frequency: Balance between engaging and overwhelming</li>
                </ul>
            </div>
            
            <h4 style="margin-top: 15px;">Recommended Effects Timeline:</h4>
            <div style="background: #fef3c7; border-left: 3px solid #f59e0b; padding: 12px; border-radius: 6px; margin-top: 8px; font-size: 0.9rem;">
                <p><strong>0:00-0:05</strong> - Intro effect (zoom, fade, or transition)</p>
                <p><strong>Every 30s</strong> - Pattern interrupt (cut, effect, or overlay)</p>
                <p><strong>Key moments</strong> - Emphasis effects (slow-mo, zoom, highlight)</p>
                <p><strong>Topic changes</strong> - Transition effects</p>
                <p><strong>Final 10s</strong> - Outro animation and CTA</p>
            </div>
        `
    };
}

// Pacing strategy
function buildPacingStrategy(duration, platform) {
    const platformData = postProdExpertDatabase.platformFormats[platform];
    const durationConfig = postProdExpertDatabase.smartCutsStrategy[duration];
    
    return {
        title: "⏱️ Pacing & Flow Optimization",
        content: `
            <p><strong>Optimal Pacing for ${platform}:</strong></p>
            
            <div class="pace-box">
                <strong>Hook Period (0:00-0:05):</strong>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    ${platform === 'tiktok' ? 
                        'CRITICAL: Grab attention in first 0.5-1 second. Show your value immediately.' :
                        platform === 'youtube-short' ?
                        'First 3 seconds are crucial. Hook viewers immediately with visuals or bold statement.' :
                        'First 5 seconds determine 50% of retention. Make viewers care about your content.'}
                </p>
            </div>
            
            <div class="pace-box" style="margin-top: 10px;">
                <strong>Content Delivery Rhythm:</strong>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    Scene length: ${durationConfig.avgSceneLength} | Cut frequency: ${durationConfig.cutFrequency}
                </p>
            </div>
            
            <h4 style="margin-top: 15px;">Retention Curve Optimization:</h4>
            <div style="background: #dbeafe; border-left: 3px solid #3b82f6; padding: 12px; border-radius: 6px; font-size: 0.9rem;">
                <p><strong>25% Mark:</strong> Introduce first transformation or key point</p>
                <p style="margin-top: 8px;"><strong>50% Mark:</strong> Major reveal or most compelling content</p>
                <p style="margin-top: 8px;"><strong>75% Mark:</strong> Build anticipation for conclusion</p>
                <p style="margin-top: 8px;"><strong>Final 10%:</strong> Strong CTA and next video tease</p>
            </div>
            
            <h4 style="margin-top: 15px;">Avoiding Retention Cliffs:</h4>
            <ul style="font-size: 0.9rem; margin-top: 10px;">
                <li>Don't introduce lengthy explanations - break into digestible chunks</li>
                <li>Change visuals/camera angle every 10-15 seconds</li>
                <li>Use audio variety - music, SFX, voice, silence</li>
                <li>Eliminate long static shots without visual interest</li>
                <li>Plant curiosity gaps at strategic points</li>
            </ul>
        `
    };
}

// Monetization strategy
function buildMonetizationStrategy(niche, duration, platform, monetization) {
    const niches = postProdExpertDatabase.monetizationFactors.niche;
    const nicheData = niches[niche] || { baseCPM: "1-3", multiplier: 1.0, adFrequency: "Medium" };
    const adPlacement = postProdExpertDatabase.adPlacement;
    
    return {
        title: "💰 Monetization & Revenue Optimization",
        content: `
            <h4>Revenue Potential Analysis:</h4>
            <div class="metric-grid">
                <div class="metric-item">
                    <span class="metric-label">Niche CPM Range</span>
                    <span class="metric-value">$${nicheData.baseCPM}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">CPM Multiplier</span>
                    <span class="metric-value">${nicheData.multiplier}x</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Ad Frequency</span>
                    <span class="metric-value">${nicheData.adFrequency}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Platform</span>
                    <span class="metric-value">${platform.toUpperCase()}</span>
                </div>
            </div>
            
            <div class="monetization-box" style="margin-top: 15px;">
                <strong>Monetization Strategy: ${monetization.toUpperCase()}</strong>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    ${monetization === 'ads-only' ?
                        'Focus on high ad frequency and premium advertiser appeal. Longer content performs better with mid-rolls.' :
                    monetization === 'sponsorships' ?
                        'Integrate naturally without compromising viewer experience. Best timing: 30-50% through content.' :
                    monetization === 'mixed' ?
                        'Balance ad revenue and sponsorships. Sponsorships for sustained income, ads for consistent baseline.' :
                    monetization === 'affiliate' ?
                        'Link products in description. Ensure genuine use case and strong CTA at video end.' :
                        'Diversify: ads, sponsorships, affiliates, and community support. Maximum revenue potential.'}
                </p>
            </div>
            
            <h4 style="margin-top: 15px;">Ad Placement Strategy:</h4>
            <div style="background: #ecf0ff; border-left: 3px solid #06b6d4; padding: 12px; border-radius: 6px; margin-top: 8px; font-size: 0.9rem;">
                <p><strong>Pre-Roll (0s):</strong> 5-20 second ad - Hook content fast after ad</p>
                <p style="margin-top: 8px;"><strong>Mid-Roll 1 (25%):</strong> Natural break point - maximum viewer tolerance</p>
                <p style="margin-top: 8px;"><strong>Mid-Roll 2 (75%):</strong> Secondary monetization opportunity</p>
                <p style="margin-top: 8px;"><strong>Post-Roll:</strong> Always include for final revenue stream</p>
            </div>
            
            <h4 style="margin-top: 15px;">Estimated Monthly Revenue (1M Views):</h4>
            <div class="monetization-box">
                <ul style="font-size: 0.9rem;">
                    <li><strong>Ads Only:</strong> $${Math.round(1000 * nicheData.multiplier).toLocaleString()} - $${Math.round(8000 * nicheData.multiplier).toLocaleString()}</li>
                    <li><strong>With Sponsorship:</strong> $${Math.round(5000 * nicheData.multiplier).toLocaleString()} - $${Math.round(20000 * nicheData.multiplier).toLocaleString()}</li>
                    <li><strong>All Streams:</strong> $${Math.round(15000 * nicheData.multiplier).toLocaleString()}+ potential</li>
                </ul>
            </div>
        `
    };
}

// Retention strategy
function buildRetentionStrategy(platform, duration) {
    const platformData = postProdExpertDatabase.platformFormats[platform];
    const hooks = postProdExpertDatabase.retentionHooks;
    
    return {
        title: "📈 Retention & Engagement Strategy",
        content: `
            <p><strong>Platform Target:</strong> ${platformData.maxDuration}</p>
            
            <h4 style="margin-top: 15px;">Retention Hook Implementation:</h4>
            
            <div class="retention-box">
                <strong>Pattern Interrupts (Every 30-45s):</strong>
                <ul style="font-size: 0.9rem; margin-top: 8px;">
                    <li>Visual: Scene change, cut, camera angle shift</li>
                    <li>Audio: Music change, sound effect, speaker change</li>
                    <li>Text: New on-screen graphic or caption</li>
                    <li>Effect: Zoom, transition, animation</li>
                </ul>
            </div>
            
            <div class="retention-box" style="margin-top: 10px;">
                <strong>Curiosity Gaps (After 20% of video):</strong>
                <ul style="font-size: 0.9rem; margin-top: 8px;">
                    <li>Tease the outcome before revealing</li>
                    <li>"Wait until you see this..."</li>
                    <li>Promise transformation: "By the end, you'll..."</li>
                    <li>Build mystery before big reveal</li>
                </ul>
            </div>
            
            <div class="retention-box" style="margin-top: 10px;">
                <strong>Engagement Moments (Throughout Video):</strong>
                <ul style="font-size: 0.9rem; margin-top: 8px;">
                    <li>Direct questions to audience: "What would you do?"</li>
                    <li>Polls and interaction requests</li>
                    <li>Surprising statements or facts</li>
                    <li>Call-outs to common misconceptions</li>
                </ul>
            </div>
            
            <h4 style="margin-top: 15px;">Cliffhanger & Outro Strategy:</h4>
            <div style="background: #fce7f3; border-left: 3px solid #ec4899; padding: 12px; border-radius: 6px; margin-top: 8px; font-size: 0.9rem;">
                <p><strong>Last 10 seconds:</strong></p>
                <p style="margin-top: 8px;">✓ Show preview of next video<br/>
                ✓ End on interesting note<br/>
                ✓ Strong call-to-action<br/>
                ✓ Subscribe/Like/Comment request<br/>
                ✓ Hint at bonus content
                </p>
            </div>
        `
    };
}

// Display results
function displayExpertResults(analysis) {
    const resultsContainer = document.getElementById('expertResultsContainer');
    const noResults = document.getElementById('noExpertResults');
    const output = document.getElementById('expertOutput');
    
    // Hide empty state
    noResults.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Build output HTML
    let html = '';
    
    if (analysis.smartCuts) {
        html += createExpertSection('smart-cuts', analysis.smartCuts);
    }
    if (analysis.captions) {
        html += createExpertSection('captions', analysis.captions);
    }
    if (analysis.visuals) {
        html += createExpertSection('visuals', analysis.visuals);
    }
    if (analysis.pacing) {
        html += createExpertSection('pacing', analysis.pacing);
    }
    if (analysis.monetization) {
        html += createExpertSection('monetization', analysis.monetization);
    }
    if (analysis.retention) {
        html += createExpertSection('retention', analysis.retention);
    }
    
    // Add action buttons
    html += `
        <div class="action-buttons">
            <button class="btn-action primary" onclick="copyExpertAnalysis()">📋 Copy Full Analysis</button>
            <button class="btn-action" onclick="downloadExpertGuide()">📥 Download Optimization Guide</button>
            <button class="btn-action" onclick="saveExpertProject()">💾 Save Project</button>
        </div>
    `;
    
    output.innerHTML = html;
    
    // Scroll to results
    setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Create expert section
function createExpertSection(type, sectionData) {
    return `
        <div class="expert-section ${type}">
            <h3>${sectionData.title}</h3>
            <div class="section-content">
                ${sectionData.content}
            </div>
        </div>
    `;
}

// Action functions
function copyExpertAnalysis() {
    const output = document.getElementById('expertOutput').innerText;
    navigator.clipboard.writeText(output).then(() => {
        alert('✓ Analysis copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy. Please try again.');
    });
}

function downloadExpertGuide() {
    const output = document.getElementById('expertOutput').innerText;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
    element.setAttribute('download', 'post-production-expert-guide.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    alert('✓ Guide downloaded!');
}

function saveExpertProject() {
    const title = document.getElementById('expertTitle').value || 'Untitled Project';
    const projects = JSON.parse(localStorage.getItem('expertProjects')) || [];
    
    const project = {
        id: Date.now(),
        title: title,
        analysis: document.getElementById('expertOutput').innerHTML,
        timestamp: new Date().toLocaleString()
    };
    
    projects.push(project);
    localStorage.setItem('expertProjects', JSON.stringify(projects));
    alert(`✓ Project "${title}" saved successfully!`);
}

// Event listeners
document.getElementById('expertForm').addEventListener('submit', analyzePostProduction);

// Logout handler
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userData');
        localStorage.removeItem('googleToken');
        window.location.href = 'index.html';
    }
});

// Auth check
window.addEventListener('load', function() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
        window.location.href = 'login.html';
    }
});
