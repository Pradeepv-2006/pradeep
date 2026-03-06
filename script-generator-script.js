// AI Script Generator - Advanced Script Writing Engine
// Generates platform-optimized scripts with emotional hooks, pattern interrupts, storytelling, and CTAs

// Script Generation Database
const scriptDatabase = {
    emotionalHooks: {
        beginners: [
            "I discovered a method that changed everything...",
            "Most people don't know this simple trick...",
            "This will blow your mind when you find out...",
            "What I'm about to share took me 3 years to learn...",
            "If you're struggling with this, you're not alone..."
        ],
        entrepreneurs: [
            "I made a mistake that cost me $50,000, but here's what I learned...",
            "This strategy grew my business 300% in 6 months...",
            "The biggest myth about success that nobody talks about...",
            "I interviewed 100+ successful entrepreneurs and found this pattern...",
            "This one decision changed my entire business trajectory..."
        ],
        professionals: [
            "After 15 years in this industry, here's what actually works...",
            "I used to do it wrong, then I discovered this approach...",
            "The difference between mediocre and exceptional professionals...",
            "This will accelerate your career in unexpected ways...",
            "Corporate leaders don't want you to know this..."
        ],
        students: [
            "This study hack improved my grades by 35%...",
            "I wish someone told me this when I was struggling...",
            "This changed how I think about learning forever...",
            "Most students don't realize this about success...",
            "If you're stressed about exams, this will help..."
        ],
        creators: [
            "I went from 0 to 100K followers with this one change...",
            "The algorithm secret nobody's talking about...",
            "Here's exactly what separates viral creators from the rest...",
            "This growth strategy worked across 5 different platforms...",
            "The most dangerous mistake new creators make..."
        ],
        fitness: [
            "I lost 50 lbs using this science-backed approach...",
            "Fitness coaches don't want you to know this trick...",
            "The real reason you're not seeing results yet...",
            "This body transformation took only 90 days...",
            "What the fitness industry got wrong about your goals..."
        ],
        general: [
            "This simple insight changed my perspective completely...",
            "I used to believe this, but I was completely wrong...",
            "This will make you think differently about everything...",
            "What I'm about to share is counterintuitive but works...",
            "Most people never discover this important truth..."
        ],
        tech: [
            "This new AI breakthrough is absolutely insane...",
            "Technology is about to change in this shocking way...",
            "I've been testing this new tool and it's revolutionary...",
            "The future of tech looks completely different than we thought...",
            "This technical insight will blow your mind..."
        ]
    },

    patternInterrupts: {
        pause: [
            "[PAUSE FOR 2 SECONDS - Let it sink in]",
            "[STOP - Look directly at camera for 3 seconds]",
            "[WAIT - Don't scroll past this next part]",
            "[HOLD ON - This is the important part]",
            "[PAUSE HERE - Breathe and absorb this]"
        ],
        shift: [
            "But here's the thing nobody talks about...",
            "Now, what most people miss is this...",
            "Here's where it gets interesting...",
            "This is where it changes everything...",
            "But that's not even the best part..."
        ],
        question: [
            "What if I told you there was an easier way?",
            "Have you ever wondered why this happens?",
            "What's the one thing holding you back?",
            "Do you know what 90% of people get wrong?",
            "What if everything you knew was backwards?"
        ],
        reframe: [
            "Think about it differently...",
            "Let me flip this on its head...",
            "What if I told you the opposite is true?",
            "Here's the perspective you've been missing...",
            "Switch your mindset for a moment..."
        ],
        visual: [
            "[ON-SCREEN TEXT: The shocking truth]",
            "[B-ROLL: Dramatic change scene]",
            "[JUMP CUT: To different location]",
            "[ZOOM IN: For emphasis]",
            "[OVERLAY: Important statistic]"
        ]
    },

    storytellingElements: {
        setup: [
            "Let me set the scene for you...",
            "So here's how it all started...",
            "Picture this moment in time...",
            "Imagine you're in this situation...",
            "Let me paint a picture for you..."
        ],
        conflict: [
            "But then everything went wrong...",
            "That's when I hit rock bottom...",
            "The problem was much bigger than I thought...",
            "I was facing a massive obstacle...",
            "Everything fell apart when..."
        ],
        transformation: [
            "Then I had an epiphany...",
            "Everything changed when I discovered...",
            "The breakthrough moment came when...",
            "That's when I realized the solution was...",
            "The turning point was when I understood..."
        ],
        resolution: [
            "Now my life looks completely different...",
            "And today I'm experiencing results I never imagined...",
            "The best part? Here's what happened next...",
            "Since then, everything has transformed...",
            "That decision became the best one I ever made..."
        ]
    },

    platformOptimization: {
        youtube: {
            openingTechnique: "Hook within first 3 seconds",
            retentionTactics: [
                "Use b-roll cuts every 5-10 seconds",
                "Add on-screen text for key points",
                "Include frequent camera cuts and zooms",
                "Build curiosity with pattern interrupts",
                "Use pacing changes to maintain interest"
            ],
            lengthGuidance: "8-12 minutes optimal for algorithm",
            placementCTA: "Place CTAs at 25%, 75%, and end",
            thumbnailHint: "Create curiosity gap in thumbnail"
        },
        "youtube-short": {
            openingTechnique: "Immediate hook in first frame",
            retentionTactics: [
                "Constant movement and changes",
                "Trending sounds and music",
                "Text overlays throughout",
                "Fast pacing and quick cuts",
                "Hook in first 0.5 seconds"
            ],
            lengthGuidance: "15-60 seconds maximum",
            placementCTA: "CTA in last 3-5 seconds",
            thumbnailHint: "Vertical format, bold text"
        },
        tiktok: {
            openingTechnique: "Stop thumb scroll in first frame",
            retentionTactics: [
                "Use trending sounds and effects",
                "Follow the trend within first 2 secs",
                "Text on screen constantly",
                "High energy and pacing",
                "Use captions and emojis"
            ],
            lengthGuidance: "15-45 seconds ideal",
            placementCTA: "CTA in description and video",
            thumbnailHint: "Trending, eye-catching, emotional"
        },
        instagram: {
            openingTechnique: "Hook within 1 second",
            retentionTactics: [
                "Use high-quality visuals",
                "Trending audio and effects",
                "Caption strategy critical",
                "Call to action in caption",
                "Consistent posting schedule"
            ],
            lengthGuidance: "30-90 seconds for Reels",
            placementCTA: "CTA in description and caption",
            thumbnailHint: "Professional, aesthetic, clear"
        },
        linkedin: {
            openingTechnique: "Professional hook with relevance",
            retentionTactics: [
                "Start with relatable workplace scenario",
                "Include relevant statistic or insight",
                "Build credibility with expertise",
                "Professional tone throughout",
                "Clear professional value prop"
            ],
            lengthGuidance: "3-5 minutes optimal",
            placementCTA: "Soft CTA in description",
            thumbnailHint: "Professional, business-relevant"
        },
        podcast: {
            openingTechnique: "Intriguing audio hook",
            retentionTactics: [
                "Use vocal variety and pacing",
                "Include compelling stories",
                "Thought-provoking questions",
                "Strategic pauses for reflection",
                "Build narrative tension"
            ],
            lengthGuidance: "20-60 minutes typical",
            placementCTA: "Multiple CTAs spaced throughout",
            thumbnailHint: "Compelling episode title in show notes"
        }
    },

    ctaStrategies: {
        subscribe: {
            timing: "At 25% and 75% of video, plus end",
            language: [
                "If you found this valuable, subscribe for more content like this",
                "Make sure to hit subscribe so you don't miss future videos",
                "Subscribe to join our growing community of [audience type]",
                "Don't forget to subscribe - we release new content every [day]",
                "Subscribe and turn on notifications to stay updated"
            ]
        },
        link: {
            timing: "Within first 30 seconds and end of video",
            language: [
                "I've put the link to [resource] in the description",
                "Click the link in the bio to get [benefit]",
                "Check the description for the full resource guide",
                "Link in description for the free tool I mentioned",
                "Head over to [URL] to get started immediately"
            ]
        },
        comment: {
            timing: "Early in video and at 50%",
            language: [
                "Let me know in the comments which tip resonates most with you",
                "What's your experience with this? Drop a comment below",
                "Reply in the comments - I read and respond to every one",
                "Which point do you relate to most? Comment below",
                "Share your thoughts in the comments - I'd love to hear from you"
            ]
        },
        share: {
            timing: "At 50% and near end",
            language: [
                "If you know someone who needs to hear this, share this video",
                "Send this to someone you think would benefit from this",
                "Tag someone who needs to watch this",
                "Share this with your [community/team/friends]",
                "If this helped you, share it with your network"
            ]
        },
        join: {
            timing: "Throughout and end of video",
            language: [
                "Join our community of [X] like-minded [audience type]",
                "Join the movement and become part of our group",
                "Click to join our exclusive community",
                "We're building a community around [topic] - join us",
                "Join thousands of [audience type] in our network"
            ]
        },
        multiple: {
            timing: "Distributed throughout video",
            language: "Multiple CTAs strategically placed"
        }
    },

    engagementMetrics: {
        youtube: {
            hookDeadline: "3 seconds to hook viewer",
            retentionJumpPoint: "15-20 seconds (where drop-off happens)",
            CTAPosition: "Mid-roll and end-roll best performing",
            keywordDensity: "Mention main topic 3-5 times naturally"
        },
        tiktok: {
            hookDeadline: "0.5 seconds (first frame critical)",
            retentionJumpPoint: "3 seconds (where swipe happens)",
            CTAPosition: "Last 3 seconds with text overlay",
            trendingFormatUsage: "First trend appearance within 2 seconds"
        },
        instagram: {
            hookDeadline: "1 second to stop scroll",
            retentionJumpPoint: "5-7 seconds",
            CTAPosition: "First line of caption",
            hashtagStrategy: "30 hashtags maximum, mix popular/niche"
        },
        podcast: {
            hookDeadline: "First 30 seconds to hook",
            retentionJumpPoint: "5-10 minutes (commercial break point)",
            CTAPosition: "Mid-episode and outro",
            callbackFrequency: "Reference hook multiple times"
        }
    }
};

// Initialize form event listener
document.addEventListener('DOMContentLoaded', function() {
    const scriptForm = document.getElementById('scriptForm');
    if (scriptForm) {
        scriptForm.addEventListener('submit', generateScript);
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userData');
            localStorage.removeItem('googleToken');
            window.location.href = 'index.html';
        });
    }
});

// Main script generation function
function generateScript(event) {
    event.preventDefault();

    // Get form values
    const topic = document.getElementById('scriptTopic').value.trim();
    const audienceType = document.getElementById('audienceType').value;
    const platform = document.getElementById('scriptPlatform').value;
    const length = document.getElementById('scriptLength').value;
    const emotionalTone = document.getElementById('emotionalTone').value;
    const scriptStyle = document.getElementById('scriptStyle').value;
    const goal = document.getElementById('scriptGoal').value;
    const ctaType = document.getElementById('scriptCTA').value;
    const additionalContext = document.getElementById('additionalContext').value;

    // Validate
    if (!topic || !audienceType || !platform || !length || !emotionalTone || !scriptStyle || !goal || !ctaType) {
        alert('Please fill in all required fields');
        return;
    }

    // Show loading state
    const btn = document.querySelector('button[type="submit"]');
    const btnSpan = btn.querySelector('span:first-child');
    const spinner = btn.querySelector('.loading-spinner');
    btn.disabled = true;
    btnSpan.textContent = 'Generating Script...';
    spinner.style.display = 'inline-block';

    // Simulate AI processing
    setTimeout(() => {
        const script = buildOptimizedScript(
            topic,
            audienceType,
            platform,
            length,
            emotionalTone,
            scriptStyle,
            goal,
            ctaType,
            additionalContext
        );

        displayScript(script);

        // Reset button
        btn.disabled = false;
        btnSpan.textContent = 'Generate Script';
        spinner.style.display = 'none';
    }, 2500);
}

// Build optimized script
function buildOptimizedScript(topic, audience, platform, length, tone, style, goal, ctaType, context) {
    const script = {
        platform: platform,
        length: length,
        style: style,
        sections: []
    };

    const platformConfig = scriptDatabase.platformOptimization[platform];
    const emotionalHook = getRandomFromArray(scriptDatabase.emotionalHooks[audience]);
    const timeframe = getScriptTimeframe(length);

    // SECTION 1: HOOK & OPENING (0-10% of video)
    script.sections.push({
        title: '🎯 Hook & Opening',
        subtitle: `${timeframe.hookDuration}`,
        content: buildHookSection(topic, audience, emotionalHook, style, platform, platformConfig),
        tips: [
            `Within the first ${timeframe.hookDuration}, you must capture attention`,
            platformConfig.openingTechnique,
            'Use pattern interrupt to stop viewers from scrolling'
        ]
    });

    // SECTION 2: PATTERN INTERRUPTS (Throughout)
    script.sections.push({
        title: '⚡ Pattern Interrupts & Pacing',
        subtitle: 'Maintain engagement throughout',
        content: buildPatternInterrupts(platform, style),
        tips: [
            'Change something every 5-10 seconds',
            'Use variety: visuals, voicing, background',
            'Build curiosity gaps to keep viewers watching'
        ]
    });

    // SECTION 3: STORYTELLING FRAMEWORK
    script.sections.push({
        title: '📖 Storytelling Arc',
        subtitle: 'Connect emotionally with audience',
        content: buildStorytellingArc(topic, audience, tone, style, context),
        tips: [
            'Make it personal and relatable',
            'Create tension before resolution',
            'Use specific details over generic statements'
        ]
    });

    // SECTION 4: BODY CONTENT (Main value delivery)
    script.sections.push({
        title: '💡 Main Content (Value Delivery)',
        subtitle: `${timeframe.bodyDuration} - Core message`,
        content: buildMainContent(topic, audience, style, goal, length, context),
        tips: [
            'Deliver your main value proposition clearly',
            'Use stories and examples to illustrate points',
            'Build toward your big reveal or conclusion'
        ]
    });

    // SECTION 5: ENGAGEMENT TACTICS
    script.sections.push({
        title: '🎬 Engagement Tactics for ' + platform.toUpperCase(),
        subtitle: 'Platform-specific strategies',
        content: buildEngagementTactics(platform, style, goal),
        tips: platformConfig.retentionTactics
    });

    // SECTION 6: CALL-TO-ACTION
    script.sections.push({
        title: '🎯 Call-To-Action (CTA)',
        subtitle: `Type: ${ctaType} | Placement: ${scriptDatabase.ctaStrategies[ctaType].timing}`,
        content: buildCTA(ctaType, audience, topic, platform),
        tips: [
            'Make your CTA specific and compelling',
            'Include multiple CTAs if appropriate for platform',
            'Urgency increases conversion rates'
        ]
    });

    // SECTION 7: TECHNICAL SPECIFICATIONS
    script.sections.push({
        title: '🎥 Technical & Production Notes',
        subtitle: 'Optimization details',
        content: buildTechnicalSpecs(platform, length, topic),
        tips: [
            'Follow platform specifications exactly',
            'Optimize for mobile viewing',
            'Use recommended file formats and dimensions'
        ]
    });

    // SECTION 8: PERFORMANCE METRICS
    script.sections.push({
        title: '📊 Expected Performance & Key Metrics',
        subtitle: 'What to measure',
        content: buildMetricsSection(platform, length, topic, audience),
        tips: [
            'Track metrics from day 1',
            'A/B test thumbnails and titles',
            'Adjust based on performance data'
        ]
    });

    return script;
}

// Build hook section with emotional connection
function buildHookSection(topic, audience, hook, style, platform, platformConfig) {
    let content = '';

    // Opening hook
    content += `📌 OPENING LINE:\n"${hook}"\n\n`;

    // Add context about why they should watch
    content += `WHY WATCH THIS:\nIn the next ${style === 'tutorial' ? '5-10 minutes' : '30-60 seconds'}, I'll show you:\n`;
    content += `• The #1 mistake ${audience} make with ${topic}\n`;
    content += `• The proven method to ${generateBenefit(topic)}\n`;
    content += `• How to ${generateActionStep(topic)} starting today\n\n`;

    // Add pattern interrupt
    content += `${getRandomFromArray(scriptDatabase.patternInterrupts.pause)}\n\n`;

    // Curiosity question
    content += `🤔 CURIOSITY QUESTION:\n"${getRandomFromArray(scriptDatabase.patternInterrupts.question)}"\n\n`;

    content += `ANSWER: Yes, and here's exactly how...`;

    return content;
}

// Build pattern interrupts section
function buildPatternInterrupts(platform, style) {
    let content = '📍 INTERRUPT POINTS (every 30-45 seconds):\n\n';

    const interrupts = [
        getRandomFromArray(scriptDatabase.patternInterrupts.shift),
        getRandomFromArray(scriptDatabase.patternInterrupts.reframe),
        getRandomFromArray(scriptDatabase.patternInterrupts.visual),
        getRandomFromArray(scriptDatabase.patternInterrupts.question)
    ];

    interrupts.forEach((interrupt, index) => {
        content += `${index + 1}. ${interrupt}\n`;
    });

    content += `\n🔄 PACING VARIATION:\n`;
    content += `• Slow down for important points (3-5 seconds)\n`;
    content += `• Speed up during explanations (2-3 seconds)\n`;
    content += `• Use silence/pauses (2 seconds) for emphasis\n`;
    content += `• Quick cuts during high-energy sections\n`;

    if (platform === 'tiktok' || platform === 'youtube-short' || platform === 'instagram') {
        content += `\n⚡ SHORT-FORM SPECIFIC:\n`;
        content += `• Cut every 2-3 seconds maximum\n`;
        content += `• Use trending sounds and effects\n`;
        content += `• Text overlay constantly\n`;
        content += `• Maintain high energy throughout\n`;
    }

    return content;
}

// Build storytelling arc
function buildStorytellingArc(topic, audience, tone, style, context) {
    let content = '';

    // Act 1: Setup
    content += `📍 ACT 1 - SETUP & RELATABLE PROBLEM (0-15% of video):\n`;
    content += `${getRandomFromArray(scriptDatabase.storytellingElements.setup)}\n`;
    content += `Introduce the relatable struggle that ${audience} face with ${topic}.\n`;
    content += `Share a personal experience or common scenario.\n\n`;

    // Act 2: Conflict
    content += `📍 ACT 2 - CONFLICT & OBSTACLE (15-40% of video):\n`;
    content += `${getRandomFromArray(scriptDatabase.storytellingElements.conflict)}\n`;
    content += `Describe the pain point or challenge in detail.\n`;
    content += `Build tension and emotional investment.\n`;
    content += `Make it specific to your audience's situation.\n\n`;

    // Act 3: Transformation
    content += `📍 ACT 3 - AH-HA MOMENT & SOLUTION (40-70% of video):\n`;
    content += `${getRandomFromArray(scriptDatabase.storytellingElements.transformation)}\n`;
    content += `Reveal the breakthrough or solution.\n`;
    content += `Explain the "why" behind the solution.\n`;
    content += `Connect it back to the original problem.\n\n`;

    // Act 4: Resolution
    content += `📍 ACT 4 - RESOLUTION & EMPOWERMENT (70-100% of video):\n`;
    content += `${getRandomFromArray(scriptDatabase.storytellingElements.resolution)}\n`;
    content += `Show the positive results or transformation.\n`;
    content += `Provide actionable next steps.\n`;
    content += `End on an inspiring or motivating note.\n`;

    if (context) {
        content += `\n📝 ADDITIONAL ELEMENTS TO INCLUDE:\n${context}`;
    }

    return content;
}

// Build main content section
function buildMainContent(topic, audience, style, goal, length, context) {
    let content = '';

    // Three main points framework
    content += `🎯 THREE CORE POINTS:\n\n`;

    // Point 1
    content += `POINT #1: The Foundation\n`;
    content += `• What: ${generateMainPoint1(topic)}\n`;
    content += `• Why it matters: Explains the underlying principle\n`;
    content += `• Story/Example: Share a relevant case study or analogy\n`;
    content += `• Takeaway: [Clear, actionable takeaway]\n\n`;

    // Point 2
    content += `POINT #2: The Method/Strategy\n`;
    content += `• What: ${generateMainPoint2(topic)}\n`;
    content += `• Why it works: Connect to psychology/data\n`;
    content += `• Step-by-step: Break down into 3-5 simple steps\n`;
    content += `• Common mistake: Address what people get wrong\n\n`;

    // Point 3
    content += `POINT #3: The Results/Impact\n`;
    content += `• What: ${generateMainPoint3(topic)}\n`;
    content += `• Real-world example: Show proof or case study\n`;
    content += `• Transformation: Demonstrate the before/after\n`;
    content += `• Your result: Share your personal success\n\n`;

    content += `✅ CONTENT DELIVERY:\n`;
    content += `• Use data/statistics to build credibility\n`;
    content += `• Include 2-3 relevant examples or stories\n`;
    content += `• Add visual elements (b-roll, graphics, animations)\n`;
    content += `• Maintain pacing appropriate for ${length} format\n`;

    return content;
}

// Build engagement tactics
function buildEngagementTactics(platform, style, goal) {
    let content = `💬 ENGAGEMENT TRIGGERS:\n\n`;

    const tactics = [
        'Ask viewers questions (especially unanswerable until later)',
        'Create information gaps: "Wait until the end to see why"',
        'Use controversy or counterintuitive statements',
        'Build curiosity with teases and reveals',
        'Reference personal stories and vulnerabilities',
        'Use numbers and statistics for credibility',
        'Include humor appropriate to your audience',
        'Create FOMO: "Fewer than 1% know this secret"'
    ];

    tactics.forEach((tactic, index) => {
        content += `${index + 1}. ${tactic}\n`;
    });

    content += `\n🎯 GOAL-SPECIFIC TACTICS:\n`;

    if (goal === 'views') {
        content += `✓ Maximize initial impressions: Viral hook in first 3 seconds\n`;
        content += `✓ Algorithm optimization: Strong retention curve\n`;
        content += `✓ Thumbnail: Create click-through desire\n`;
        content += `✓ Title: Include curiosity gap or number\n`;
    } else if (goal === 'retention') {
        content += `✓ Keep every 15-20 seconds: Pattern interrupt\n`;
        content += `✓ Build momentum: Slow beginning, high-energy middle\n`;
        content += `✓ Delivery pace: Match platform expectations\n`;
        content += `✓ Content structure: Regular payoffs to prevent drop-off\n`;
    } else if (goal === 'engagement') {
        content += `✓ Ask questions throughout video\n`;
        content += `✓ Reference comments from previous videos\n`;
        content += `✓ Create response-worthy content\n`;
        content += `✓ Make controversial statements carefully\n`;
    } else if (goal === 'conversion') {
        content += `✓ Build trust through expertise and vulnerability\n`;
        content += `✓ Create clear problem → solution connection\n`;
        content += `✓ Include social proof and testimonials\n`;
        content += `✓ Make CTA impossible to miss\n`;
    } else if (goal === 'subscribers') {
        content += `✓ Build parasocial connection throughout\n`;
        content += `✓ Consistent messaging about why to subscribe\n`;
        content += `✓ Create content series they don't want to miss\n`;
        content += `✓ End with strong value promise for next video\n`;
    }

    return content;
}

// Build CTA section
function buildCTA(ctaType, audience, topic, platform) {
    let content = '';
    const ctaLanguage = scriptDatabase.ctaStrategies[ctaType].language;

    content += `📢 CTA STRATEGY:\n`;
    content += `Timing: ${scriptDatabase.ctaStrategies[ctaType].timing}\n\n`;

    content += `PRIMARY CTA:\n"${getRandomFromArray(ctaLanguage)}"\n\n`;

    content += `SECONDARY CTAs:\n`;
    for (let i = 1; i <= 2; i++) {
        content += `${i}. "${getRandomFromArray(ctaLanguage)}"\n`;
    }

    content += `\n🔑 CTA PSYCHOLOGY:\n`;
    content += `• Make it specific: Not "click here" but "watch the follow-up video"\n`;
    content += `• Create urgency: "Limited time" or "Subscribe before [X]"\n`;
    content += `• Use social proof: "Join 50K others who..."\n`;
    content += `• Make it easy: Clear instructions on where/how to click\n`;
    content += `• Reciprocity principle: Give value first, then ask\n`;

    content += `\n💾 CTA PLACEMENT:\n`;
    content += `• First CTA: ${platform === 'tiktok' ? '15-20%' : '25-30%'} through video\n`;
    content += `• Second CTA: ${platform === 'tiktok' ? '40-50%' : '50-75%'} through video\n`;
    content += `• Final CTA: Last 5-10 seconds with visual/text overlay\n`;

    return content;
}

// Build technical specifications
function buildTechnicalSpecs(platform, length, topic) {
    let specs = {
        youtube: {
            resolution: '4K (3840×2160) or 1080p (1920×1080)',
            fps: '24, 30, or 60 fps',
            bitrate: '8-16 Mbps (for 1080p)',
            audio: 'AAC codec, 128 kbps, 48kHz',
            format: 'MP4 (.mp4)',
            maxLength: '12 hours',
            aspect: '16:9'
        },
        'youtube-short': {
            resolution: '1080p (1920×1080)',
            fps: '30 fps',
            bitrate: '8 Mbps',
            audio: 'AAC codec, 128 kbps',
            format: 'MP4 (.mp4)',
            maxLength: '60 seconds',
            aspect: '9:16'
        },
        tiktok: {
            resolution: '1080p (1080×1920)',
            fps: '30 fps minimum',
            bitrate: '8 Mbps',
            audio: 'Trending sounds + original audio mix',
            format: 'MP4 (.mp4)',
            maxLength: '10 minutes',
            aspect: '9:16'
        },
        instagram: {
            resolution: '1080p (1920×1080)',
            fps: '30 fps',
            bitrate: '6-8 Mbps',
            audio: 'AAC codec, 128 kbps',
            format: 'MP4 (.mp4)',
            maxLength: '90 seconds for Reels',
            aspect: '1:1 or 9:16'
        },
        linkedin: {
            resolution: '1080p (1920×1080)',
            fps: '24-30 fps',
            bitrate: '5-8 Mbps',
            audio: 'AAC codec, 128 kbps',
            format: 'MP4 (.mp4)',
            maxLength: '10 minutes',
            aspect: '16:9 or 1:1'
        },
        podcast: {
            resolution: 'N/A (audio only)',
            fps: 'N/A',
            bitrate: '192 kbps (MP3) or 128 kbps (AAC)',
            audio: 'Mono or stereo, 44.1kHz or 48kHz',
            format: 'MP3, AAC, or WAV',
            maxLength: 'Unlimited',
            aspect: 'N/A'
        }
    };

    const platformSpec = specs[platform];
    let content = `🎥 VIDEO SPECIFICATIONS:\n\n`;

    for (const [key, value] of Object.entries(platformSpec)) {
        content += `• ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    }

    content += `\n📱 MOBILE OPTIMIZATION:\n`;
    content += `• Use large, readable text (18pt minimum)\n`;
    content += `• Keep important content in center 80% of screen\n`;
    content += `• Ensure audio is clear without headphones\n`;
    content += `• Test on actual mobile devices\n`;

    content += `\n📊 SEO & METADATA:\n`;
    content += `• Title: Include main keyword within first 60 characters\n`;
    content += `• Description: First 150 chars are critical\n`;
    content += `• Tags: Mix broad + niche keywords\n`;
    content += `• Hashtags: Research trending + niche combos\n`;

    return content;
}

// Build metrics section
function buildMetricsSection(platform, length, topic, audience) {
    let content = `📊 KEY PERFORMANCE INDICATORS (KPIs):\n\n`;

    content += `PRIMARY METRICS:\n`;
    content += `• View Count Target: [Based on channel size]\n`;
    content += `• Average View Duration (AVD): Aim for 50%+ of video length\n`;
    content += `• Click-Through Rate (CTR): 3-5% is good, 5-10% is excellent\n`;
    content += `• Engagement Rate: Comments + likes + shares / views\n`;
    content += `• Subscriber Conversion: How many new subscribers gained\n\n`;

    content += `PLATFORM-SPECIFIC METRICS:\n`;

    if (platform === 'youtube') {
        content += `✓ Impression CTR: % of people who click after seeing\n`;
        content += `✓ Average View Duration vs Expected Duration\n`;
        content += `✓ Audience retention curve (retention rate)\n`;
        content += `✓ Click rate on CTAs\n`;
    } else if (platform === 'tiktok') {
        content += `✓ Video plays on For You Page\n`;
        content += `✓ Completion rate (watch to end %)\n`;
        content += `✓ Average watch time\n`;
        content += `✓ Shares count (critical for virality)\n`;
    } else if (platform === 'instagram') {
        content += `✓ Reach (unique accounts who saw content)\n`;
        content += `✓ Impressions (total content views)\n`;
        content += `✓ Saves and shares (stronger than likes)\n`;
        content += `✓ Profile visits and follower growth\n`;
    }

    content += `\n🎯 OPTIMIZATION CHECKLIST:\n`;
    content += `☐ Post time: When your audience is most active\n`;
    content += `☐ Hashtag strategy: Research 5-10 relevant tags\n`;
    content += `☐ Caption: Compelling, includes CTA\n`;
    content += `☐ Thumbnail: Eye-catching, clear text\n`;
    content += `☐ A/B testing: Try different titles/thumbnails\n`;

    return content;
}

// Display script in results panel
function displayScript(script) {
    const resultsContainer = document.getElementById('scriptResultsContainer');
    const noResults = document.getElementById('noScriptResults');
    const output = document.getElementById('scriptOutput');

    // Hide empty state
    noResults.style.display = 'none';
    resultsContainer.style.display = 'block';

    // Clear previous results
    output.innerHTML = '';

    // Create header with script meta
    const header = document.createElement('div');
    header.className = 'script-header-meta';
    header.innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
            <span class="timing-badge">Platform: ${script.platform.toUpperCase()}</span>
            <span class="timing-badge">Length: ${script.length}</span>
            <span class="timing-badge">Style: ${script.style}</span>
        </div>
    `;
    output.appendChild(header);

    // Add each section
    script.sections.forEach((section, index) => {
        const sectionEl = createScriptSection(section, index + 1);
        output.appendChild(sectionEl);
    });

    // Add action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'script-actions';
    actionsDiv.innerHTML = `
        <button class="btn-action" onclick="copyScriptToClipboard()">📋 Copy Full Script</button>
        <button class="btn-action btn-primary" onclick="downloadScript('${script.platform}')">📥 Download as PDF</button>
        <button class="btn-action" onclick="saveScriptToDraft()">💾 Save Draft</button>
        <button class="btn-action" onclick="refineScript()">✏️ Refine</button>
    `;
    output.appendChild(actionsDiv);

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Create individual script section element
function createScriptSection(section, sectionNum) {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'script-section';
    sectionEl.style.animation = `slideDownIn 0.4s ease ${sectionNum * 0.1}s both`;

    let html = `
        <h3>${section.title}</h3>
        ${section.subtitle ? `<div class="timing-badge">${section.subtitle}</div>` : ''}
        <div class="script-section-content">${section.content}</div>
    `;

    if (section.tips && section.tips.length > 0) {
        html += `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">`;
        html += `<strong style="color: #6366f1; display: block; margin-bottom: 8px;">💡 Pro Tips:</strong>`;
        section.tips.forEach(tip => {
            html += `<div class="pattern-interrupt" style="border-left-color: #6366f1; background: #f0f4ff; color: #4b5563; font-style: normal;">✓ ${tip}</div>`;
        });
        html += `</div>`;
    }

    sectionEl.innerHTML = html;
    return sectionEl;
}

// Copy script to clipboard
function copyScriptToClipboard() {
    const scriptOutput = document.getElementById('scriptOutput').innerText;
    navigator.clipboard.writeText(scriptOutput).then(() => {
        alert('✓ Script copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
}

// Download script as PDF
function downloadScript(platform) {
    alert('PDF download feature coming soon! For now, copy and paste into Google Docs or Word.');
}

// Save script to draft
function saveScriptToDraft() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData.email) {
        alert('Please log in first to save drafts');
        window.location.href = 'login.html';
        return;
    }

    const scriptText = document.getElementById('scriptOutput').innerText;
    const drafts = JSON.parse(localStorage.getItem('scriptDrafts') || '[]');
    
    drafts.push({
        id: Date.now(),
        title: `Script - ${new Date().toLocaleDateString()}`,
        content: scriptText,
        createdAt: new Date().toISOString(),
        platform: document.getElementById('scriptPlatform').value
    });

    localStorage.setItem('scriptDrafts', JSON.stringify(drafts));
    alert('✓ Script saved to drafts!');
}

// Refine script with different parameters
function refineScript() {
    alert('Refine feature: Change any parameters and click "Generate Script" again for variations!');
}

// Helper functions
function getScriptTimeframe(length) {
    const timeframes = {
        short: { hookDuration: '0-3 seconds', bodyDuration: '10-50 seconds' },
        medium: { hookDuration: '0-10 seconds', bodyDuration: '2-4 minutes' },
        long: { hookDuration: '0-15 seconds', bodyDuration: '6-12 minutes' },
        ultra: { hookDuration: '0-20 seconds', bodyDuration: '15-45 minutes' }
    };
    return timeframes[length];
}

function generateBenefit(topic) {
    return `master ${topic.toLowerCase()} and achieve better results`;
}

function generateActionStep(topic) {
    return `get started with ${topic.toLowerCase()} today`;
}

function generateMainPoint1(topic) {
    return `Understanding the core principle of ${topic}`;
}

function generateMainPoint2(topic) {
    return `The proven method to implement ${topic} successfully`;
}

function generateMainPoint3(topic) {
    return `Real-world results and transformations from ${topic}`;
}

function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
