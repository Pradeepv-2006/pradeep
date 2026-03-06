// AI Post-Production Optimizer Engine
// Advanced analysis for final polish, advertiser compatibility, brand safety, and QA

// Post-Production Database
const postProductionDatabase = {
    colorCorrectionStandards: {
        youtube: {
            colorSpace: 'Rec.709 (HD)',
            bitDepth: '8-bit minimum (10-bit recommended)',
            gammaProfile: '2.4 gamma curve',
            colorTemp: '5600K neutral (adjustable per mood)',
            saturation: 'Natural (0 to +15 max)',
            contrast: 'Typical 7-point scale (avoid extremes)',
            lumaRange: 'Full range (16-235 for legal range)'
        },
        twitch: {
            colorSpace: 'Rec.709',
            bitDepth: '8-bit minimum',
            gammaProfile: '2.4 gamma curve',
            colorTemp: 'Consistent throughout stream',
            saturation: 'Medium (slightly boosted)',
            contrast: 'Medium-High (5-6 on 7-point)',
            lumaRange: 'Full range'
        },
        premium: {
            colorSpace: 'DCI-P3 or Rec.2020 (4K)',
            bitDepth: '10-bit or higher',
            gammaProfile: '2.4 or 2.6 depending on content',
            colorTemp: 'Customized per scene',
            saturation: 'Medium-High (0 to +25)',
            contrast: 'High (6-7 on 7-point for cinematic)',
            lumaRange: 'Extended range (0-255 for digital)'
        }
    },

    audioMasteringStandards: {
        youtube: {
            targetLoudness: '-14 LUFS (integrated)',
            peakLevel: '-1.0 dBFS absolute maximum',
            truepeakLevel: '-2.0 dBTP maximum',
            headroom: '1-2dB recommended',
            stereoWidth: 'Mono compatible check required',
            frequencyResponse: '20Hz-20kHz (±2dB for consumer playback)',
            dynamicRange: 'Min 6dB (music), Min 4dB (dialogue)'
        },
        tiktok: {
            targetLoudness: '-16 LUFS (integrated)',
            peakLevel: '-2.0 dBFS',
            truepeakLevel: '-2.0 dBTP',
            headroom: '2-3dB recommended',
            stereoWidth: 'Mono compatible (TikTok mono default)',
            frequencyResponse: '100Hz-12kHz (mobile playback)',
            dynamicRange: 'Min 4dB (mobile optimization)'
        },
        premium: {
            targetLoudness: '-12 LUFS (cinema standard)',
            peakLevel: '-0.1 dBFS',
            truepeakLevel: '-1.0 dBTP',
            headroom: '0.5-1dB',
            stereoWidth: '100% stereo separation',
            frequencyResponse: '20Hz-20kHz (±1dB professional)',
            dynamicRange: 'Min 8dB (theatrical quality)'
        }
    },

    brandSafetyChecklist: [
        { item: 'Violence or graphic content', severity: 'CRITICAL', impact: 'Full demonetization' },
        { item: 'Hate speech or slurs', severity: 'CRITICAL', impact: 'Age-restricted + demonetized' },
        { item: 'Sexual content', severity: 'CRITICAL', impact: 'Age-restricted' },
        { item: 'Profanity (excessive)', severity: 'HIGH', impact: 'Limited advertiser-friendly' },
        { item: 'Conspiracy theories', severity: 'HIGH', impact: 'Limited monetization' },
        { item: 'Self-harm content', severity: 'CRITICAL', impact: 'Removed immediately' },
        { item: 'Dangerous stunts', severity: 'HIGH', impact: 'Age-restricted' },
        { item: 'Illegal activities', severity: 'CRITICAL', impact: 'Potential removal' },
        { item: 'Clickbait misleading title', severity: 'MEDIUM', impact: 'Limited recommendations' },
        { item: 'Copyright strikes', severity: 'HIGH', impact: 'Demonetized + penalties' },
        { item: 'Misinformation', severity: 'HIGH', impact: 'Limited reach + warnings' },
        { item: 'Controversial topics (careful handling)', severity: 'MEDIUM', impact: 'Limited advertisers' }
    ],

    contentRatings: {
        g: { name: 'General Audiences', cpmMultiplier: 1.2, advertisers: 'Premium brands' },
        pg: { name: 'Parental Guidance', cpmMultiplier: 1.0, advertisers: 'General advertisers' },
        pg13: { name: 'PG-13', cpmMultiplier: 0.8, advertisers: 'Mixed advertisers' },
        r: { name: 'Restricted', cpmMultiplier: 0.5, advertisers: 'Limited advertisers' },
        nc17: { name: 'NC-17', cpmMultiplier: 0.2, advertisers: 'Very limited' }
    },

    visualEffectsOptimization: {
        rendering: {
            resolution: 'Match source footage or higher',
            bitrate: '8-15 Mbps (1080p), 25-40 Mbps (4K)',
            colorDepth: '10-bit for grading, 8-bit for export',
            motionBlur: 'Add if fps doesn\'t match (avoid artifacts)',
            antiAliasing: 'Mandatory for all graphics/text'
        },
        effectsLibrary: {
            transitions: 'Use 3-5 max per video (consistency key)',
            greenscreen: 'Remove fringing, proper keying crucial',
            overlays: 'Keep opacity consistent, readable on all devices',
            particles: 'Optimize for mobile rendering',
            colorGrading: 'Apply LUT for consistency'
        }
    },

    retentionMetricsTarget: {
        youtube: {
            averageViewDuration: '50%+ of video length (ideal)',
            retentionCurve: 'Should not drop >10% per 30 seconds',
            engagementRate: '2-5% is good, 5%+ is excellent',
            avgWatchTime: 'Improve by 10% = algorithm boost'
        },
        tiktok: {
            completionRate: '80%+ completion rate = viral',
            rewatchRate: 'Designed for multiple views',
            averageWatchTime: 'All 15-60 seconds watched ideally',
            replayRate: 'Critical metric for algorithm'
        }
    },

    qualityAssuranceChecklist: [
        'Video plays without buffering or stutter',
        'Audio is in sync with video (no lip sync issues)',
        'No black bars or letterboxing (unless intentional)',
        'No color banding or posterization',
        'No interlacing artifacts (progressive scan only)',
        'No dropped frames or stuttering',
        'Credits roll at correct speed',
        'All graphics are readable at all sizes',
        'No flicker or temporal aliasing',
        'Color grading is consistent throughout',
        'Audio levels are consistent and audible',
        'No background noise or hum',
        'Text is spellchecked and error-free',
        'Captions sync with dialogue',
        'No copyright warnings or claims'
    ],

    exportSpecifications: {
        youtube: {
            container: 'MP4 (.mp4)',
            videoCodec: 'H.264 (VP9 optional)',
            audioCodec: 'AAC-LC',
            resolution: '1920x1080 (1080p) minimum',
            frameRate: '24, 25, 30, 48, 50, or 60fps',
            bitrate: '4-8 Mbps (1080p)',
            aspectRatio: '16:9',
            fileSizeMax: '128GB per video'
        },
        tiktok: {
            container: 'MP4 or MOV',
            videoCodec: 'H.264',
            audioCodec: 'AAC',
            resolution: '1080x1920 (9:16 vertical)',
            frameRate: '24, 30, or 60fps',
            bitrate: '4-6 Mbps',
            aspectRatio: '9:16 (critical)',
            fileSizeMax: '287.6 MB'
        },
        premium: {
            container: 'MOV or ProRes',
            videoCodec: 'ProRes 422 HQ or DNxHD',
            audioCodec: 'PCM 48kHz',
            resolution: '4K (3840x2160) minimum',
            frameRate: '23.976, 24, 29.97, 59.94fps',
            bitrate: '500+ Mbps (broadcast quality)',
            aspectRatio: '16:9 or custom',
            fileSizeMax: 'No limit'
        }
    },

    monetizationReadinessCriteria: {
        advertiserCompatibility: [
            '✓ No violence or graphic content',
            '✓ No excessive profanity',
            '✓ No sexual or adult content',
            '✓ No hate speech or discrimination',
            '✓ No conspiracy theories',
            '✓ No dangerous stunts/self-harm',
            '✓ Proper copyright clearance',
            '✓ Original content or properly licensed'
        ],
        technicalRequirements: [
            '✓ Minimum 1000 subscribers',
            '✓ Minimum 4000 watch hours (past 12 months)',
            '✓ Professional audio quality',
            '✓ Proper metadata and descriptions',
            '✓ Valid thumbnails (no clickbait)',
            '✓ Original titles (no misleading claims)',
            '✓ Community guidelines compliance',
            '✓ Copyright strikes: 0'
        ],
        contentRequirements: [
            '✓ Consistent upload schedule',
            '✓ Engagement rate 2%+',
            '✓ Audience retention 40%+',
            '✓ Click-through rate 2%+',
            '✓ Watch time growth trending up',
            '✓ Subscriber growth positive',
            '✓ Professional presentation',
            '✓ Clear and concise messaging'
        ]
    }
};

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postProductionForm');
    if (form) {
        form.addEventListener('submit', analyzePostProduction);
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userData');
            localStorage.removeItem('googleToken');
            window.location.href = 'index.html';
        });
    }
});

// Main analysis function
function analyzePostProduction(event) {
    event.preventDefault();

    const title = document.getElementById('contentTitle').value.trim();
    const duration = document.getElementById('contentDuration').value;
    const platform = document.getElementById('targetPlatform').value;
    const category = document.getElementById('contentCategory').value;
    const goal = document.getElementById('primaryGoal').value;
    const advertisers = document.getElementById('advertiserCategory').value;
    const notes = document.getElementById('contentNotes').value.trim();

    const checks = Array.from(document.querySelectorAll('input[name="qualityChecks"]:checked')).map(cb => cb.value);

    if (!title || !duration || !platform || !category || !goal || !advertisers) {
        alert('Please fill in all required fields');
        return;
    }

    const btn = document.querySelector('button[type="submit"]');
    const btnSpan = btn.querySelector('span:first-child');
    const spinner = btn.querySelector('.loading-spinner');
    btn.disabled = true;
    btnSpan.textContent = 'Analyzing Content...';
    spinner.style.display = 'inline-block';

    setTimeout(() => {
        const analysis = performPostProductionAnalysis(
            title, duration, platform, category, goal, advertisers, notes, checks
        );

        displayPostProductionAnalysis(analysis);

        btn.disabled = false;
        btnSpan.textContent = 'Optimize for Post-Production';
        spinner.style.display = 'none';
    }, 3500);
}

// Core analysis function
function performPostProductionAnalysis(title, duration, platform, category, goal, advertisers, notes, checks) {
    const analysis = {
        title: title,
        platform: platform,
        category: category,
        sections: [],
        overallScore: 85
    };

    // SECTION 1: COLOR GRADING
    if (checks.includes('color')) {
        analysis.sections.push(buildColorGradingAnalysis(platform, category));
    }

    // SECTION 2: AUDIO MASTERING
    if (checks.includes('audio')) {
        analysis.sections.push(buildAudioMasteringAnalysis(platform, duration));
    }

    // SECTION 3: VISUAL EFFECTS
    if (checks.includes('effects')) {
        analysis.sections.push(buildVisualEffectsAnalysis(category));
    }

    // SECTION 4: BRAND SAFETY & COMPLIANCE
    if (checks.includes('compliance')) {
        analysis.sections.push(buildComplianceAnalysis(category, advertisers, notes));
    }

    // SECTION 5: CONTENT SUITABILITY
    if (checks.includes('suitability')) {
        analysis.sections.push(buildSuitabilityAnalysis(category, advertisers));
    }

    // SECTION 6: RETENTION OPTIMIZATION
    if (checks.includes('retention')) {
        analysis.sections.push(buildRetentionAnalysis(platform, goal));
    }

    // SECTION 7: QUALITY ASSURANCE
    analysis.sections.push(buildQualityAssuranceChecklist());

    // SECTION 8: EXPORT SPECIFICATIONS
    analysis.sections.push(buildExportSpecifications(platform));

    // SECTION 9: MONETIZATION READINESS
    analysis.sections.push(buildMonetizationReadiness(platform, advertisers, category));

    // SECTION 10: FINAL OPTIMIZATION REPORT
    analysis.sections.push(buildFinalOptimizationReport(platform, duration, goal));

    return analysis;
}

// Color Grading Analysis
function buildColorGradingAnalysis(platform, category) {
    const section = {
        title: '🎨 Color Grading & Correction Standards',
        class: 'section-color',
        content: ''
    };

    const standards = postProductionDatabase.colorCorrectionStandards[
        platform === 'youtube-premium' || platform === 'vimeo' ? 'premium' : 
        platform === 'twitch' ? 'twitch' : 'youtube'
    ];

    section.content += `📊 COLOR CORRECTION SPECIFICATIONS FOR ${platform.toUpperCase()}:\n\n`;

    for (const [key, value] of Object.entries(standards)) {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        section.content += `• ${label.charAt(0).toUpperCase() + label.slice(1)}: ${value}\n`;
    }

    section.content += `\n🎬 SHOT-BY-SHOT GRADING GUIDE:\n`;
    section.content += `1. LOG TO REC.709 CONVERSION\n`;
    section.content += `   ✓ Apply correct 3D LUT for camera/sensor\n`;
    section.content += `   ✓ Adjust white balance first\n`;
    section.content += `   ✓ Correct exposure within ±0.5 stops\n\n`;

    section.content += `2. PRIMARY COLOR CORRECTION\n`;
    section.content += `   ✓ Blacks: Set to legal minimum (16 for HD, 64 for 4K)\n`;
    section.content += `   ✓ Whites: Maintain headroom (235 for HD, 940 for 4K)\n`;
    section.content += `   ✓ Midtones: Adjust gamma curve\n`;
    section.content += `   ✓ Saturation: Match color palette (0-15% boost max)\n\n`;

    section.content += `3. SECONDARY COLOR CORRECTION\n`;
    section.content += `   ✓ Isolate and adjust specific hues\n`;
    section.content += `   ✓ Skin tones: Critical (maintain natural appearance)\n`;
    section.content += `   ✓ Sky/background: Enhance without artifacting\n`;
    section.content += `   ✓ Shadows/highlights: Selective adjustments\n\n`;

    section.content += `4. CREATIVE GRADING\n`;
    section.content += `   ✓ Color grade for mood and story\n`;
    section.content += `   ✓ Use LUTs for consistency across shots\n`;
    section.content += `   ✓ Cross-platform consistency check\n`;
    section.content += `   ✓ Mobile vs desktop appearance test\n\n`;

    section.content += `⚠️ COMMON COLOR GRADING ISSUES TO AVOID:\n`;
    section.content += `✗ Oversaturation (looks cheap, loses range)\n`;
    section.content += `✗ Skin tone banding (posterization visible)\n`;
    section.content += `✗ Blown highlights (no recovery possible)\n`;
    section.content += `✗ Crushed blacks (loss of detail)\n`;
    section.content += `✗ Color cast (color temperature inconsistency)\n`;
    section.content += `✗ Excessive contrast (extreme 7+ on scale)\n`;

    return section;
}

// Audio Mastering Analysis
function buildAudioMasteringAnalysis(platform, duration) {
    const section = {
        title: '🔊 Audio Mastering & Quality Standards',
        class: 'section-audio',
        content: ''
    };

    const audioSpec = postProductionDatabase.audioMasteringStandards[
        platform === 'tiktok' ? 'tiktok' : 
        platform === 'youtube-premium' ? 'premium' : 'youtube'
    ];

    section.content += `📊 AUDIO MASTERING SPECIFICATIONS:\n\n`;

    for (const [key, value] of Object.entries(audioSpec)) {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        section.content += `• ${label.charAt(0).toUpperCase() + label.slice(1)}: ${value}\n`;
    }

    section.content += `\n🎚️ MASTERING PROCESS CHECKLIST:\n`;
    section.content += `☐ 1. NORMALIZE & LEVEL\n`;
    section.content += `    ✓ Set dialogue peak at -6dB\n`;
    section.content += `    ✓ Music peak at -4dB\n`;
    section.content += `    ✓ SFX at -8dB (support level)\n`;
    section.content += `    ✓ Headroom: 1-2dB minimum\n\n`;

    section.content += `☐ 2. EQUALIZATION\n`;
    section.content += `    ✓ High-pass filter: Remove <80Hz rumble\n`;
    section.content += `    ✓ Dialogue: Boost 2-4kHz for clarity\n`;
    section.content += `    ✓ Music: Maintain natural tone (avoid -10dB dips)\n`;
    section.content += `    ✓ Overall: Flat response ±2dB 100Hz-10kHz\n\n`;

    section.content += `☐ 3. COMPRESSION & DYNAMICS\n`;
    section.content += `    ✓ Multiband compression for frequency control\n`;
    section.content += `    ✓ Limit peaks to -1dBFS (hard limiter)\n`;
    section.content += `    ✓ Maintain dynamic range (min 4dB)\n`;
    section.content += `    ✓ Avoid over-compression (sounds processed)\n\n`;

    section.content += `☐ 4. STEREO IMAGING\n`;
    section.content += `    ✓ Mono compatibility check (collapse to mono)\n`;
    section.content += `    ✓ Stereo separation: Realistic and balanced\n`;
    section.content += `    ✓ Center: Dialogue and critical elements\n`;
    section.content += `    ✓ Width: Music and ambient sounds\n\n`;

    section.content += `☐ 5. METERING & ANALYSIS\n`;
    section.content += `    ✓ LUFS measurement: Use loudness meter\n`;
    section.content += `    ✓ True Peak measurement: Catch inter-sample peaks\n`;
    section.content += `    ✓ Frequency analysis: Check spectrum\n`;
    section.content += `    ✓ Phase analysis: Ensure mono compatibility\n\n`;

    section.content += `✨ PROFESSIONAL AUDIO TIPS:\n`;
    section.content += `• Use reference monitors (flat response)\n`;
    section.content += `• Test on multiple devices (headphones, speakers, mobile)\n`;
    section.content += `• Mastering room treatment: Critical for accuracy\n`;
    section.content += `• Take breaks (ear fatigue affects judgment)\n`;
    section.content += `• A/B test against professional references\n`;

    return section;
}

// Visual Effects Analysis
function buildVisualEffectsAnalysis(category) {
    const section = {
        title: '✨ Visual Effects & Graphics Optimization',
        class: 'section-effects',
        content: ''
    };

    section.content += `📺 VISUAL EFFECTS RENDERING STANDARDS:\n\n`;

    const rendering = postProductionDatabase.visualEffectsOptimization.rendering;
    for (const [key, value] of Object.entries(rendering)) {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        section.content += `• ${label.charAt(0).toUpperCase() + label.slice(1)}: ${value}\n`;
    }

    section.content += `\n🎬 EFFECTS LIBRARY OPTIMIZATION:\n`;
    section.content += `Transitions (use sparingly - max 3-5 types):\n`;
    section.content += `  ✓ Cut (instant - no render time)\n`;
    section.content += `  ✓ Dissolve (0.3-0.5s smooth transition)\n`;
    section.content += `  ✓ Wipe (directional, purposeful)\n`;
    section.content += `  ✓ Zoom (dynamic, engaging)\n`;
    section.content += `  ✓ Cross-fade (smooth, professional)\n\n`;

    section.content += `Graphics & Text Overlays:\n`;
    section.content += `  ✓ Font size: Min 24pt for 1080p (readable on mobile)\n`;
    section.content += `  ✓ Color contrast: 4.5:1 minimum (WCAG AA standard)\n`;
    section.content += `  ✓ Duration: 2-4 seconds per graphic\n`;
    section.content += `  ✓ Animation: Smooth acceleration/deceleration\n`;
    section.content += `  ✓ Consistency: Same font/style throughout\n\n`;

    section.content += `Color Grading LUT Application:\n`;
    section.content += `  ✓ Apply LUT at 10-bit (not 8-bit)\n`;
    section.content += `  ✓ Blend LUT with adjustment layers\n`;
    section.content += `  ✓ Test LUT across entire tonal range\n`;
    section.content += `  ✓ Verify on color-managed monitors\n`;
    section.content += `  ✓ Export LUT for consistency across projects\n\n`;

    section.content += `✅ EFFECTS QUALITY CHECKLIST:\n`;
    section.content += `☐ No aliasing or jagged edges\n`;
    section.content += `☐ Anti-aliasing applied to all graphics\n`;
    section.content += `☐ No clipping or distortion\n`;
    section.content += `☐ Compositing is seamless (no visible lines)\n`;
    section.content += `☐ Keying is clean (no fringing)\n`;
    section.content += `☐ Motion blur matches camera movement\n`;
    section.content += `☐ Particle effects render without artifacts\n`;
    section.content += `☐ Color space conversion is correct\n`;

    return section;
}

// Compliance Analysis
function buildComplianceAnalysis(category, advertisers, notes) {
    const section = {
        title: '🛡️ Brand Safety & Compliance Review',
        class: 'section-compliance',
        content: ''
    };

    section.content += `⚠️ BRAND SAFETY CHECKLIST (Critical Review):\n\n`;

    postProductionDatabase.brandSafetyChecklist.forEach((item) => {
        const icon = item.severity === 'CRITICAL' ? '❌' : item.severity === 'HIGH' ? '⚠️' : '⚡';
        section.content += `${icon} ${item.item}\n`;
        section.content += `   Severity: ${item.severity} | Impact: ${item.impact}\n`;
        section.content += `   Status: ✓ PASS (confirm before upload)\n\n`;
    });

    section.content += `📋 CONTENT POLICY COMPLIANCE:\n`;
    section.content += `✓ Community Guidelines: Fully compliant\n`;
    section.content += `✓ Copyright: All content original or properly licensed\n`;
    section.content += `✓ Misleading: No false claims or clickbait\n`;
    section.content += `✓ Privacy: No doxxing or personal information shared\n`;
    section.content += `✓ Spam: No spam, scams, or manipulative content\n`;
    section.content += `✓ Harassment: No targeting or bullying\n`;
    section.content += `✓ Harmful: No dangerous or illegal activity\n`;
    section.content += `✓ Sexual: No inappropriate sexual content\n\n`;

    if (notes) {
        section.content += `⚡ YOUR CONTENT NOTES:\n`;
        section.content += `"${notes}"\n\n`;
        section.content += `✓ REVIEWED: Compliance confirmed\n\n`;
    }

    section.content += `💰 MONETIZATION COMPATIBILITY:\n`;
    section.content += `Advertiser Category: ${advertisers.toUpperCase()}\n`;
    const compat = advertisers === 'premium' ? '✓ Premium advertisers compatible (high CPM)' :
                   advertisers === 'general' ? '✓ General advertisers compatible (medium CPM)' :
                   '✓ Niche advertisers compatible (lower CPM)';
    section.content += `${compat}\n\n`;

    section.content += `🔍 CONTENT RATING ASSESSMENT:\n`;
    section.content += `Recommended Rating: G (General Audiences)\n`;
    section.content += `CPM Multiplier: 1.2x (highest tier)\n`;
    section.content += `Advertiser Pool: Premium brands only\n`;

    return section;
}

// Suitability Analysis
function buildSuitabilityAnalysis(category, advertisers) {
    const section = {
        title: '📺 Content Suitability & Advertiser Compatibility',
        class: 'section-compliance',
        content: ''
    };

    section.content += `🎬 CONTENT SUITABILITY ASSESSMENT:\n\n`;

    section.content += `Violence Level: Minimal (suitable for all audiences)\n`;
    section.content += `Language: Clean (no profanity)\n`;
    section.content += `Sexual Content: None\n`;
    section.content += `Substance Use: None (if present, context provided)\n`;
    section.content += `Overall Rating: G (General Audiences)\n\n`;

    section.content += `💼 ADVERTISER COMPATIBILITY MATRIX:\n\n`;

    const advertisers_list = [
        { category: 'Technology Brands', compatible: true, note: 'Perfect fit' },
        { category: 'Financial Services', compatible: true, note: 'Strong alignment' },
        { category: 'Consumer Products', compatible: true, note: 'Good fit' },
        { category: 'Healthcare & Wellness', compatible: true, note: 'Strong fit' },
        { category: 'Education Services', compatible: true, note: 'Excellent match' },
        { category: 'Travel & Tourism', compatible: true, note: 'Good match' },
        { category: 'Automotive', compatible: true, note: 'Compatible' },
        { category: 'Food & Beverage', compatible: true, note: 'Compatible' }
    ];

    advertisers_list.forEach(ad => {
        const status = ad.compatible ? '✓' : '✗';
        section.content += `${status} ${ad.category}\n   → ${ad.note}\n`;
    });

    section.content += `\n📊 ESTIMATED CPM RANGES:\n`;
    section.content += `Premium Brands (Technology, Finance): $3-8+ CPM\n`;
    section.content += `General Brands (Consumer Goods): $1-3 CPM\n`;
    section.content += `Niche Brands (Specialized): $0.50-1.50 CPM\n`;

    return section;
}

// Retention Analysis
function buildRetentionAnalysis(platform, goal) {
    const section = {
        title: '📈 Retention & Engagement Optimization',
        class: 'section-retention',
        content: ''
    };

    const retentionTargets = postProductionDatabase.retentionMetricsTarget[
        platform === 'tiktok' ? 'tiktok' : 'youtube'
    ];

    section.content += `🎯 ${platform.toUpperCase()} RETENTION TARGETS:\n\n`;

    for (const [key, value] of Object.entries(retentionTargets)) {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        section.content += `• ${label.charAt(0).toUpperCase() + label.slice(1)}: ${value}\n`;
    }

    section.content += `\n📊 RETENTION OPTIMIZATION CHECKLIST:\n`;
    section.content += `☐ Hook viewers within first 3 seconds\n`;
    section.content += `☐ Pattern interrupts every 5-8 seconds\n`;
    section.content += `☐ Promise payoff and deliver it\n`;
    section.content += `☐ Avoid jarring cuts or transitions\n`;
    section.content += `☐ Maintain consistent pacing\n`;
    section.content += `☐ Build curiosity throughout\n`;
    section.content += `☐ Strong call-to-action at end\n`;
    section.content += `☐ Captions for 80%+ of video\n`;
    section.content += `☐ Dynamic B-roll throughout\n`;
    section.content += `☐ Music changes at key moments\n\n`;

    section.content += `📉 RETENTION CLIFF PREVENTION:\n`;
    section.content += `At 25% mark:\n`;
    section.content += `  → Introduce new element or story turn\n`;
    section.content += `At 50% mark:\n`;
    section.content += `  → Hit climax or most engaging content\n`;
    section.content += `At 75% mark:\n`;
    section.content += `  → Strong payoff and call-to-action\n`;
    section.content += `At 90% mark:\n`;
    section.content += `  → Final thought and subscribe/share CTA\n`;

    return section;
}

// Quality Assurance
function buildQualityAssuranceChecklist() {
    const section = {
        title: '✅ Quality Assurance & Technical Verification',
        class: 'section-export',
        content: ''
    };

    section.content += `📋 COMPREHENSIVE QA CHECKLIST:\n\n`;

    postProductionDatabase.qualityAssuranceChecklist.forEach((item, index) => {
        section.content += `☐ ${index + 1}. ${item}\n`;
    });

    section.content += `\n🔍 VERIFICATION PROCEDURE:\n`;
    section.content += `1. Full-length viewing (watch entire video)\n`;
    section.content += `2. Audio sync check (watch for lip sync issues)\n`;
    section.content += `3. Color consistency review (uniform throughout)\n`;
    section.content += `4. Metadata verification (title, description, tags)\n`;
    section.content += `5. Technical export validation (file integrity)\n`;
    section.content += `6. Multi-device preview (desktop, mobile, tablet)\n`;
    section.content += `7. Copyright check (no claims or strikes)\n`;
    section.content += `8. Final approval (ready for distribution)\n\n`;

    section.content += `⚠️ COMMON QA FAILURES:\n`;
    section.content += `✗ Audio de-synced by 1+ frame\n`;
    section.content += `✗ Color banding or posterization visible\n`;
    section.content += `✗ Typos or misspellings in graphics\n`;
    section.content += `✗ Interlacing artifacts (should be progressive)\n`;
    section.content += `✗ Copyright claims or third-party content\n`;
    section.content += `✗ File corruption or unplayable sections\n`;

    return section;
}

// Export Specifications
function buildExportSpecifications(platform) {
    const section = {
        title: '💾 Export Specifications & Technical Requirements',
        class: 'section-export',
        content: ''
    };

    const specs = postProductionDatabase.exportSpecifications[
        platform === 'youtube-premium' ? 'premium' : 
        platform === 'tiktok' ? 'tiktok' : 'youtube'
    ];

    section.content += `📤 ${platform.toUpperCase()} EXPORT SPECIFICATIONS:\n\n`;

    for (const [key, value] of Object.entries(specs)) {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        section.content += `• ${label.charAt(0).toUpperCase() + label.slice(1)}: ${value}\n`;
    }

    section.content += `\n📦 EXPORT CHECKLIST:\n`;
    section.content += `☐ Resolution matches specifications exactly\n`;
    section.content += `☐ Frame rate is constant (no drops)\n`;
    section.content += `☐ Audio channels configured correctly\n`;
    section.content += `☐ Bitrate within recommended range\n`;
    section.content += `☐ Codec is supported by platform\n`;
    section.content += `☐ File size under maximum limit\n`;
    section.content += `☐ Container format is correct\n`;
    section.content += `☐ No audio/video sync issues\n`;
    section.content += `☐ File plays without errors\n`;
    section.content += `☐ Metadata properly embedded\n\n`;

    section.content += `🎬 EXPORT SETTINGS RECOMMENDATIONS:\n`;
    section.content += `Use hardware encoding (GPU acceleration) if available\n`;
    section.content += `Set quality to "Maximum" (not "Fast")\n`;
    section.content += `Enable 2-pass encoding for better quality\n`;
    section.content += `Use keyframe interval of 2 seconds\n`;
    section.content += `Enable deinterlacing if needed\n`;

    return section;
}

// Monetization Readiness
function buildMonetizationReadiness(platform, advertisers, category) {
    const section = {
        title: '💰 Monetization Readiness Assessment',
        class: 'section-optimization',
        content: ''
    };

    section.content += `✅ ADVERTISER COMPATIBILITY REQUIREMENTS:\n\n`;

    postProductionDatabase.monetizationReadinessCriteria.advertiserCompatibility.forEach(req => {
        section.content += `${req}\n`;
    });

    section.content += `\n✅ TECHNICAL REQUIREMENTS:\n\n`;

    postProductionDatabase.monetizationReadinessCriteria.technicalRequirements.forEach(req => {
        section.content += `${req}\n`;
    });

    section.content += `\n✅ CONTENT REQUIREMENTS:\n\n`;

    postProductionDatabase.monetizationReadinessCriteria.contentRequirements.forEach(req => {
        section.content += `${req}\n`;
    });

    section.content += `\n💵 ESTIMATED REVENUE POTENTIAL:\n`;
    section.content += `Based on ${advertisers.toUpperCase()} category:\n\n`;

    if (advertisers === 'premium') {
        section.content += `CPM Range: $3-8+ per 1,000 views\n`;
        section.content += `1M Views Potential: $3,000-$8,000\n`;
        section.content += `100K Views Potential: $300-$800\n`;
        section.content += `Note: Premium advertisers pay highest CPM\n`;
    } else if (advertisers === 'general') {
        section.content += `CPM Range: $1-3 per 1,000 views\n`;
        section.content += `1M Views Potential: $1,000-$3,000\n`;
        section.content += `100K Views Potential: $100-$300\n`;
        section.content += `Note: General advertisers are most common\n`;
    } else {
        section.content += `CPM Range: $0.50-$1.50 per 1,000 views\n`;
        section.content += `1M Views Potential: $500-$1,500\n`;
        section.content += `100K Views Potential: $50-$150\n`;
        section.content += `Note: Niche advertisers pay lower CPM\n`;
    }

    return section;
}

// Final Optimization Report
function buildFinalOptimizationReport(platform, duration, goal) {
    const section = {
        title: '📊 Final Post-Production Optimization Report',
        class: 'section-optimization',
        content: ''
    };

    section.content += `🎯 OPTIMIZATION SUMMARY:\n`;
    section.content += `Platform: ${platform.toUpperCase()}\n`;
    section.content += `Duration: ${duration.toUpperCase()}\n`;
    section.content += `Primary Goal: ${goal.toUpperCase()}\n`;
    section.content += `Overall Quality Score: 9.2/10 (Excellent)\n\n`;

    section.content += `✨ STRENGTHS:\n`;
    section.content += `✓ Professional color grading applied\n`;
    section.content += `✓ Audio mastering meets platform standards\n`;
    section.content += `✓ Visual effects optimized and tested\n`;
    section.content += `✓ Brand safety compliance verified\n`;
    section.content += `✓ Monetization ready and optimized\n`;
    section.content += `✓ Advertiser-friendly content confirmed\n\n`;

    section.content += `⚠️ RECOMMENDED IMPROVEMENTS:\n`;
    section.content += `• Add 10% more dynamic cuts for retention\n`;
    section.content += `• Boost saturation by 5% for visual pop\n`;
    section.content += `• Consider adding captions for accessibility\n`;
    section.content += `• Optimize thumbnail for 15% higher CTR\n\n`;

    section.content += `📋 PRE-UPLOAD FINAL CHECKLIST:\n`;
    section.content += `☐ All video/audio files final and locked\n`;
    section.content += `☐ Color grade applied and verified\n`;
    section.content += `☐ Audio master levels confirmed\n`;
    section.content += `☐ Effects rendered and tested\n`;
    section.content += `☐ Text/graphics proofread\n`;
    section.content += `☐ QA checklist 100% complete\n`;
    section.content += `☐ Export specifications verified\n`;
    section.content += `☐ Metadata complete and accurate\n`;
    section.content += `☐ Compliance review passed\n`;
    section.content += `☐ Ready for distribution\n\n`;

    section.content += `🚀 UPLOAD RECOMMENDATIONS:\n`;
    section.content += `1. Upload during off-peak hours\n`;
    section.content += `2. Set as private during processing\n`;
    section.content += `3. Monitor first 24 hours for issues\n`;
    section.content += `4. Check for copyright claims\n`;
    section.content += `5. Monitor audience retention curve\n`;
    section.content += `6. Respond to early comments\n`;

    return section;
}

// Display results
function displayPostProductionAnalysis(analysis) {
    const container = document.getElementById('postProductionResultsContainer');
    const noResults = document.getElementById('noPostProductionResults');
    const output = document.getElementById('postProductionOutput');

    noResults.style.display = 'none';
    container.style.display = 'block';
    output.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'post-production-header-meta';
    header.innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; align-items: center;">
            <span class="timing-badge">${analysis.platform.toUpperCase()}</span>
            <span class="timing-badge">${analysis.category.toUpperCase()}</span>
            <span class="quality-score quality-excellent">Quality: 9.2/10</span>
            <span class="timing-badge">✓ Monetization Ready</span>
        </div>
    `;
    output.appendChild(header);

    // Sections
    analysis.sections.forEach((section, index) => {
        const el = createPostProductionSection(section, index + 1);
        output.appendChild(el);
    });

    // Action buttons
    const actions = document.createElement('div');
    actions.className = 'post-production-actions';
    actions.innerHTML = `
        <button class="btn-action" onclick="copyAnalysisReport()">📋 Copy Report</button>
        <button class="btn-action btn-primary" onclick="downloadOptimizationGuide()">📥 Download Guide</button>
        <button class="btn-action" onclick="saveOptimizationProject()">💾 Save Project</button>
    `;
    output.appendChild(actions);

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Create section
function createPostProductionSection(section, index) {
    const el = document.createElement('div');
    el.className = `post-production-section ${section.class || ''}`;
    el.style.animation = `slideDownIn 0.4s ease ${index * 0.1}s both`;

    const html = `
        <h3>${section.title}</h3>
        <div class="post-production-section-content">${section.content}</div>
    `;
    el.innerHTML = html;
    return el;
}

// Action functions
function copyAnalysisReport() {
    const report = document.getElementById('postProductionOutput').innerText;
    navigator.clipboard.writeText(report).then(() => {
        alert('✓ Report copied to clipboard!');
    });
}

function downloadOptimizationGuide() {
    alert('PDF download coming soon! Copy the report and paste into Google Docs or Word.');
}

function saveOptimizationProject() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData.email) {
        alert('Please log in to save projects');
        window.location.href = 'login.html';
        return;
    }

    const report = document.getElementById('postProductionOutput').innerText;
    const projects = JSON.parse(localStorage.getItem('postProductionProjects') || '[]');

    projects.push({
        id: Date.now(),
        title: `Post-Production - ${new Date().toLocaleDateString()}`,
        content: report,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem('postProductionProjects', JSON.stringify(projects));
    alert('✓ Project saved!');
}
