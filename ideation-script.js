// ========== Content Ideation Data & Analysis ==========

// Trend data and audience psychology database
const contentDatabase = {
    trends: {
        'AI Technology': ['AI tools trending', 'ChatGPT updates', 'AI ethics', 'Machine learning', 'Generative AI'],
        'Fitness': ['HIIT workouts', 'Weight loss hacks', 'Gym fails', 'Transformation stories', 'Supplement reviews'],
        'Digital Marketing': ['SEO tips', 'Content marketing', 'Social media strategies', 'Email marketing', 'Conversion optimization'],
        'Gaming': ['New game releases', 'Gaming reviews', 'Esports', 'Streaming tips', 'Game walkthroughs'],
        'Finance': ['Crypto news', 'Stock market', 'Budgeting tips', 'Investment strategies', 'Financial freedom'],
        'Lifestyle': ['Life hacks', 'Productivity tips', 'Minimalism', 'Self-improvement', 'Work-life balance'],
        'Technology': ['Tech reviews', 'Product launches', 'Gadgets', 'Software updates', 'Tech news'],
        'Business': ['Startup tips', 'Entrepreneurship', 'Business strategies', 'Leadership', 'Scaling']
    },

    audiencePsychology: {
        'Curiosity': ['Top 10 secrets...', 'You didn\'t know...', 'What nobody tells you...', 'The truth about...'],
        'Urgency': ['Limited time...', 'Before it\'s too late...', 'Don\'t miss out...', 'Act now...'],
        'Social Proof': ['Everyone\'s doing it...', 'Trending now...', 'Millions already...', 'Celebrity approved...'],
        'Fear of Missing Out': ['Latest...', 'Breaking news...', 'Just dropped...', 'Only X hours left...'],
        'Self-improvement': ['How to...', 'Learn...', 'Master...', 'Improve your...']
    },

    platformAlgorithms: {
        'youtube': {
            'focus': 'Watch time, CTR, subscribers',
            'tactics': ['Strong thumbnails', 'Pattern interrupts', 'Hook in first 3 seconds', 'Series content'],
            'idealLength': '8-15 minutes',
            'uploadFrequency': '2-3x per week',
            'monetization': ['Ad revenue (high CPM)', 'Sponsorships', 'Super Chat', 'Channel membership']
        },
        'tiktok': {
            'focus': 'Completion rate, shares, saves',
            'tactics': ['Fast cuts', 'Trending audio', 'Jump cuts', 'Clear hook'],
            'idealLength': '15-60 seconds',
            'uploadFrequency': 'Daily',
            'monetization': ['Creator Fund', 'Gifts', 'Brand deals', 'TikTok Shop']
        },
        'instagram': {
            'focus': 'Engagement rate, saves, shares',
            'tactics': ['Aesthetic visuals', 'Story hooks', 'Carousel posts', 'Calls to action'],
            'idealLength': '30-90 seconds (Reels)',
            'uploadFrequency': '4-5x per week',
            'monetization': ['Ad breaks', 'Sponsorships', 'Affiliate links', 'Brand partnerships']
        },
        'linkedin': {
            'focus': 'Professional engagement, shares',
            'tactics': ['Personal insights', 'Industry news', 'Career advice', 'Thought leadership'],
            'idealLength': '300-500 words',
            'uploadFrequency': '3-4x per week',
            'monetization': ['Sponsored content', 'Consulting', 'Course promotion', 'Affiliate']
        },
        'twitter': {
            'focus': 'Retweets, replies, engagement',
            'tactics': ['Threading', 'Timely topics', 'Questions', 'Controversial takes'],
            'idealLength': 'Under 280 characters',
            'uploadFrequency': 'Multiple times daily',
            'monetization': ['Twitter Blue', 'Ad partnerships', 'Link clicks', 'Community notes']
        },
        'blog': {
            'focus': 'SEO, dwell time, shares',
            'tactics': ['Long-form', 'LSI keywords', 'Internal links', 'Multimedia'],
            'idealLength': '1500-3000 words',
            'uploadFrequency': '2-4x per week',
            'monetization': ['Ads (high), Sponsorships', 'Affiliate', 'Email list', 'Digital products']
        },
        'podcast': {
            'focus': 'Downloads, listener retention',
            'tactics': ['Unique angle', 'Guest interviews', 'Audio quality', 'Consistency'],
            'idealLength': '30-60 minutes',
            'uploadFrequency': 'Weekly',
            'monetization': ['Sponsorships (high)', 'Patreon', 'Premium content', 'Affiliate']
        }
    },

    contentHooks: {
        'Tutorial/How-To': [
            'In this video, I\'ll show you the exact steps to...',
            'Here\'s a proven system to...',
            'Follow along as I teach you how to...',
            'The complete guide to...',
            'Step-by-step tutorial: How to...'
        ],
        'Viral/Entertaining': [
            'You won\'t believe what happened when...',
            'This absolutely shocked me...',
            'Watch until the end...',
            'I wasn\'t prepared for this...',
            'The craziest thing just happened...'
        ],
        'Educational': [
            'Let me break down how...',
            'Here\'s what most people get wrong about...',
            'The science behind...',
            'Deep dive into...',
            'Everything you need to know about...'
        ],
        'Storytelling': [
            'This is a story about...',
            'Let me tell you what changed my life...',
            'Here\'s how I went from... to...',
            'My biggest lesson from...',
            'The day everything changed...'
        ],
        'Trending/News': [
            'Breaking: Major update in...',
            'This just happened and everyone\'s talking about it...',
            'The latest news on...',
            'Here\'s what you missed about...',
            'Everyone\'s reacting to...'
        ]
    },

    monetizationStrategies: {
        'youtube': {
            'adRevenue': 'High CPM (depends on niche)',
            'sponsorships': 'Mid-roll + Pre-roll deals',
            'affiliates': '15-50% commission per sale',
            'estRevenue': '$0.25-4 per 1000 views'
        },
        'tiktok': {
            'creatorFund': '$0.02-0.04 per 1000 views',
            'gifts': '50% revenue share',
            'sponsorships': '$200-20,000 per post',
            'estRevenue': '$0.50-$1.50 per 1000 views'
        },
        'instagram': {
            'adBreaks': 'Revenue sharing program',
            'sponsorships': '$100-10,000 per post',
            'affiliates': '5-20% commission',
            'estRevenue': '$0.50-$1.50 per 1000 reaches'
        },
        'blog': {
            'adsense': 'CPM $0.25-5',
            'sponsorships': '$500-5,000 per post',
            'affiliates': '5-50% commission',
            'estRevenue': '$1-10 per 1000 pageviews'
        }
    }
};

// ========== Form Submission Handler ==========
document.getElementById('ideationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateContentIdeas();
});

// ========== Main Content Idea Generation Function ==========
function generateContentIdeas() {
    const generateBtn = document.getElementById('generateBtn');
    const spinner = generateBtn.querySelector('.loading-spinner');
    const niche = document.getElementById('niche').value.trim();
    const audience = document.getElementById('audience').value.trim();
    const platform = document.getElementById('platform').value;
    const contentFormat = document.getElementById('contentFormat').value;
    const goals = getSelectedGoals();
    const trendingTopics = document.getElementById('trendingTopics').value.trim();

    // Disable button and show loading
    generateBtn.disabled = true;
    spinner.style.display = 'inline-block';

    // Simulate AI processing time
    setTimeout(() => {
        // Generate ideas
        const ideas = generateIdeas(niche, audience, platform, contentFormat, goals, trendingTopics);
        
        // Display results
        displayResults(ideas);

        // Re-enable button
        generateBtn.disabled = false;
        spinner.style.display = 'none';
    }, 2000);
}

// ========== Generate Ideas Logic ==========
function generateIdeas(niche, audience, platform, contentFormat, goals, trendingTopics) {
    const ideas = [];
    const platformData = contentDatabase.platformAlgorithms[platform];
    const hooks = contentDatabase.contentHooks[contentFormat] || [];

    // Generate 3-5 unique content ideas
    for (let i = 0; i < 4; i++) {
        const idea = {
            id: i + 1,
            title: generateTitle(niche, contentFormat, i),
            hook: hooks[i % hooks.length],
            format: contentFormat,
            platform: platform,
            
            // Content Strategy
            contentStrategy: generateContentStrategy(contentFormat, platform, audience),
            
            // Hooks & titles
            alternativeHooks: generateAlternativeHooks(niche, contentFormat),
            seoTitle: generateSEOTitle(niche, contentFormat),
            
            // Posting Strategy
            postingStrategy: generatePostingStrategy(platform, goals),
            
            // Engagement Optimization
            engagementTips: generateEngagementTips(platform, audience),
            
            // Hashtags & Keywords
            hashtags: generateHashtags(niche, contentFormat),
            keywords: generateKeywords(niche, contentFormat),
            
            // Revenue Potential
            revenueMetrics: generateRevenueMetrics(platform, niche),
            monetizationOpportunities: generateMonetizationOpportunities(platform),
            
            // Algorithm Tips
            algorithmTips: platformData.tactics,
            
            // Estimated Performance
            estimatedMetrics: generateEstimatedMetrics(platform, goals),
            
            // Audience Psychology Hook
            psychologyAngle: selectPsychologyHook(goals)
        };
        
        ideas.push(idea);
    }

    return ideas;
}

// ========== Helper Functions ==========

function generateTitle(niche, format, index) {
    const titles = {
        'Tutorial/How-To': [
            `The Complete ${niche} Guide: Step-by-Step Tutorial`,
            `Master ${niche} in 2024: Everything You Need to Know`,
            `${niche} for Beginners: Complete Training Guide`,
            `The Fastest Way to Learn ${niche}`
        ],
        'Viral/Entertaining': [
            `I Tried ${niche} for 30 Days - Here's What Happened`,
            `${niche}: The Most Insane Challenge Yet`,
            `${niche} Reality Check - This Blew My Mind`,
            `Biggest ${niche} Fails Compilation`
        ],
        'Educational': [
            `What You Don't Know About ${niche}`,
            `${niche}: The Complete Science Breakdown`,
            `Why Everyone Gets ${niche} Wrong`,
            `The Dark Side of ${niche}`
        ],
        'Storytelling': [
            `How ${niche} Changed My Life - My Story`,
            `From Zero to Hero in ${niche}`,
            `My ${niche} Journey: The Honest Truth`,
            `The Day ${niche} Saved My Career`
        ],
        'Trending/News': [
            `${niche}: Major Update You Need to See`,
            `Breaking: Everything Changed in ${niche}`,
            `${niche} 2024 Trends: What's Actually Happening`,
            `Latest ${niche} News Everyone's Talking About`
        ]
    };

    const titleList = titles[format] || titles['Tutorial/How-To'];
    return titleList[index % titleList.length];
}

function generateContentStrategy(format, platform, audience) {
    const strategies = {
        'Tutorial/How-To': `Create a step-by-step walkthrough that solves a specific problem. Open with the result you'll achieve, then guide viewers through each step. Use text overlays on ${platform} to highlight key points.`,
        'Viral/Entertaining': `Lead with the most interesting moment first. Use pattern interrupts every 3-5 seconds. Create emotional reactions and include unexpected twists. Make it shareable for ${platform} algorithm.`,
        'Educational': `Provide unique insights and data. Structure: Problem → Solution → Implementation. Use visuals to explain complex concepts. Target ${platform}'s algorithm by keeping viewers engaged.`,
        'Storytelling': `Build narrative tension from the start. Use the hero's journey: challenge → journey → transformation. Connect emotionally with your ${audience}. Include personal details.`,
        'Trending/News': `Stay current and react quickly. Provide your unique perspective on trending topics. Include expert analysis or predictions. Leverage trending sounds/hashtags on ${platform}.`
    };

    return strategies[format] || strategies['Tutorial/How-To'];
}

function generateAlternativeHooks(niche, format) {
    const psychHooks = contentDatabase.audiencePsychology;
    const hooks = [];
    
    for (let i = 0; i < 3; i++) {
        const psychType = Object.keys(psychHooks)[i];
        const hookText = psychHooks[psychType][0];
        hooks.push(`${hookText.replace('...', niche + '...')}`);
    }
    
    return hooks;
}

function generateSEOTitle(niche, format) {
    const seoTemplates = [
        `Best ${niche} Guide: Complete 2024 Tutorial & Tips`,
        `${niche} Mastery: How to Get Started in 2024`,
        `The Ultimate ${niche} Resource for Beginners`,
        `${niche} Tips and Tricks: Expert Advice`
    ];
    
    return seoTemplates[Math.floor(Math.random() * seoTemplates.length)];
}

function generatePostingStrategy(platform, goals) {
    const strategies = {
        'youtube': {
            'timing': 'Tuesdays & Thursdays at 4 PM ET (peak watch time)',
            'frequency': '2-3 videos per week minimum',
            'description': 'End screen with next video, playlist, subscribe CTA',
            'strategy': 'Create series/playlists to increase watch time and session time'
        },
        'tiktok': {
            'timing': 'Post at 6-9 AM, 12-2 PM, 7-11 PM ET',
            'frequency': 'Post daily, best results with 3-5 posts/day',
            'description': 'Use trending sounds, hashtags, participate in challenges',
            'strategy': 'Ride trends within 24-48 hours of emergence'
        },
        'instagram': {
            'timing': 'Monday-Thursday 11 AM - 1 PM ET',
            'frequency': '4-5 Reels per week, 1-2 carousel posts',
            'description': 'Use 20-30 hashtags, 5 location tags, CTA in caption',
            'strategy': 'Batch film content, cross-post to Stories'
        },
        'linkedin': {
            'timing': 'Tuesday-Thursday 8-10 AM or 5-6 PM ET',
            'frequency': '3-4 posts per week',
            'description': 'Professional tone, industry insights, personal touch',
            'strategy': 'Engage with comments within first hour'
        },
        'blog': {
            'timing': 'Mid-week publication (Wed-Thu)',
            'frequency': '2-4 posts per week for SEO momentum',
            'description': 'Promote via email, social media, relevant communities',
            'strategy': 'Update top-performing posts monthly'
        }
    };

    return strategies[platform] || strategies['youtube'];
}

function generateEngagementTips(platform, audience) {
    const tips = {
        'youtube': [
            'Ask questions and request comments/likes',
            'Create cliffhangers to encourage watch time',
            'Include community polls in Community Tab',
            'Respond to top comments within 2 hours',
            'Create playlists to increase session time'
        ],
        'tiktok': [
            'Reply with video responses to comments',
            'Use duets and stitches with popular creators',
            'Ask "FYP" viewers to follow (increases reach)',
            'Create trending variations 48-72 hours after trend starts',
            'Use green screen with questions/polls'
        ],
        'instagram': [
            'Ask questions in captions (3x more engagement)',
            'Use story polls, quizzes, and questions',
            'Reply to DMs to build community',
            'Create carousel posts with cliffhangers',
            'Post 3-4x in Stories to appear at top'
        ],
        'linkedin': [
            'Ask for opinions and advice (increases comments)',
            'Share vulnerable stories (humanizes content)',
            'Tag relevant professionals to increase reach',
            'Start conversations instead of selling',
            'Use LinkedIn polls for engagement'
        ],
        'blog': [
            'Include clear CTAs throughout',
            'End with thought-provoking question',
            'Link to related internal articles',
            'Encourage social shares with click-to-tweet',
            'Include downloadable resources'
        ]
    };

    return tips[platform] || tips['youtube'];
}

function generateHashtags(niche, format) {
    const nicheTags = niche.toLowerCase().split(' ').map(word => `#${word}`);
    const formatTags = format === 'Tutorial/How-To' ? ['#HowTo', '#Tutorial', '#Guide'] :
                       format === 'Viral/Entertaining' ? ['#Viral', '#FYP', '#Trending'] :
                       format === 'Educational' ? ['#Education', '#Learning', '#Knowledge'] :
                       ['#Story', '#Journey', '#Transformation'];
    
    return [...nicheTags, ...formatTags, '#2024', '#ContentCreator'];
}

function generateKeywords(niche, format) {
    const keywords = [
        `${niche}`,
        `${niche} tips`,
        `${niche} tutorial`,
        `${niche} guide`,
        `how to ${niche.toLowerCase()}`,
        `${niche} for beginners`,
        `${niche} 2024`,
        `${niche} strategies`,
        `${niche} secrets`,
        `${niche} trends`
    ];
    
    return keywords.slice(0, 5);
}

function generateRevenueMetrics(platform, niche) {
    const metrics = contentDatabase.monetizationStrategies[platform] || {};
    
    return {
        estimatedEarnings: metrics.estRevenue || '$0.50-$2 per 1000 views',
        potentialMonthly: calculateMonthlyRevenue(niche),
        highValuePotential: `${niche} has ${Math.random() > 0.5 ? 'High' : 'Medium'} monetization potential`,
        bestMonetizationMethod: Object.keys(metrics)[0] || 'Ad Revenue'
    };
}

function calculateMonthlyRevenue(niche) {
    // Simulated calculation based on niche
    const niches = {
        'AI Technology': '$500-$2000',
        'Finance': '$800-$3000',
        'Digital Marketing': '$600-$2500',
        'Fitness': '$300-$1500',
        'Gaming': '$400-$2000'
    };
    
    return niches[niche] || '$300-$1500';
}

function generateMonetizationOpportunities(platform) {
    const opportunities = contentDatabase.platformAlgorithms[platform].monetization;
    
    return {
        primary: opportunities[0],
        secondary: opportunities.slice(1),
        strategies: [
            'Create premium/exclusive content',
            'Build email list for affiliate promotions',
            'Develop digital products/courses',
            'Leverage sponsorship opportunities',
            'Cross-promote across platforms'
        ]
    };
}

function generateEstimatedMetrics(platform, goals) {
    const metrics = {};
    
    if (goals.includes('reach')) {
        metrics.reach = { value: '50K-150K', label: 'Estimated Reach' };
    }
    if (goals.includes('engagement')) {
        metrics.engagement = { value: '3-8%', label: 'Engagement Rate' };
    }
    if (goals.includes('monetization')) {
        metrics.revenue = { value: '$50-$300', label: 'Revenue Potential' };
    }
    if (goals.includes('followers')) {
        metrics.followers = { value: '100-500', label: 'New Followers' };
    }
    
    return metrics;
}

function selectPsychologyHook(goals) {
    const psychology = {
        'reach': 'FOMO Hook - "Everyone\'s talking about this..."',
        'engagement': 'Curiosity Gap - "Wait for the twist..."',
        'monetization': 'Social Proof - "Millions already tried this..."',
        'followers': 'Urgency - "Limited time offer/challenge..."'
    };
    
    return psychology[goals[0]] || psychology['reach'];
}

function getSelectedGoals() {
    const checkboxes = document.querySelectorAll('input[name="goals"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// ========== Display Results ==========
function displayResults(ideas) {
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    const outputContainer = document.getElementById('contentIdeasOutput');

    // Hide no results and show results container
    noResults.style.display = 'none';
    resultsContainer.style.display = 'block';

    // Clear previous results
    outputContainer.innerHTML = '';

    // Render each idea
    ideas.forEach(idea => {
        const ideaHTML = createIdeaCard(idea);
        outputContainer.innerHTML += ideaHTML;
    });

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== Create Idea Card HTML ==========
function createIdeaCard(idea) {
    const metrics = idea.estimatedMetrics;
    
    return `
        <div class="idea-card">
            <div class="idea-header">
                <div class="idea-number">${idea.id}</div>
                <div class="idea-title">
                    <h3>${idea.title}</h3>
                    <span class="content-type">${idea.format}</span>
                </div>
            </div>

            <div class="idea-content">
                <div class="idea-section">
                    <h4>🎯 Hook & Opening</h4>
                    <p>"${idea.hook}"</p>
                    <p><strong>Alternative hooks:</strong></p>
                    <ul>
                        ${idea.alternativeHooks.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>

                <div class="idea-section">
                    <h4>📝 Content Strategy</h4>
                    <p>${idea.contentStrategy}</p>
                    <p><strong>Psychology Angle:</strong> ${idea.psychologyAngle}</p>
                </div>
            </div>

            <div class="idea-content">
                <div class="idea-section">
                    <h4>📅 Posting Strategy</h4>
                    <p><strong>Best Time:</strong> ${idea.postingStrategy.timing}</p>
                    <p><strong>Frequency:</strong> ${idea.postingStrategy.frequency}</p>
                    <p><strong>Strategy:</strong> ${idea.postingStrategy.strategy}</p>
                </div>

                <div class="idea-section">
                    <h4>💬 Engagement Tips</h4>
                    <ul>
                        ${idea.engagementTips.slice(0, 4).map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="idea-content">
                <div class="idea-section">
                    <h4>🔑 Keywords & Hashtags</h4>
                    <p><strong>SEO Title:</strong> ${idea.seoTitle}</p>
                    <p><strong>Keywords:</strong> ${idea.keywords.join(', ')}</p>
                    <p><strong>Hashtags:</strong> ${idea.hashtags.join(' ')}</p>
                </div>

                <div class="idea-section">
                    <h4>⚡ Algorithm Tips</h4>
                    <ul>
                        ${idea.algorithmTips.slice(0, 4).map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="metrics-grid">
                ${Object.entries(idea.estimatedMetrics).map(([key, metric]) => `
                    <div class="metric">
                        <div class="metric-label">${metric.label}</div>
                        <div class="metric-value ${getMetricClass(key)}">${metric.value}</div>
                    </div>
                `).join('')}
            </div>

            <div class="monetization-box">
                <h5>💰 Monetization Potential</h5>
                <p><strong>Estimated Earnings:</strong> ${idea.revenueMetrics.estimatedEarnings}</p>
                <p><strong>Monthly Potential:</strong> ${idea.revenueMetrics.potentialMonthly}</p>
                <p><strong>Primary Method:</strong> ${idea.monetizationOpportunities.primary}</p>
                <p><strong>Secondary Options:</strong> ${idea.monetizationOpportunities.secondary.join(', ')}</p>
            </div>

            <div class="idea-actions">
                <button class="idea-btn" onclick="copyToClipboard('${idea.title}')">Copy Idea</button>
                <button class="idea-btn" onclick="saveIdea(${idea.id})">Save to Plan</button>
                <button class="idea-btn" onclick="refineIdea(${idea.id})">Refine Idea</button>
            </div>
        </div>
    `;
}

function getMetricClass(key) {
    return ['reach', 'engagement'].includes(key) ? 'high' : 'medium';
}

// ========== Utility Functions ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('Idea copied to clipboard!');
}

function saveIdea(ideaId) {
    alert(`Idea #${ideaId} saved to your content plan!`);
}

function refineIdea(ideaId) {
    alert(`Refining idea #${ideaId}... (Feature coming soon)`);
}

// ========== Logout Handler ==========
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userData');
        window.location.href = 'index.html';
    }
});

console.log('%cAI Content Ideation Engine Loaded', 'font-size: 14px; color: #6366f1; font-weight: bold;');
