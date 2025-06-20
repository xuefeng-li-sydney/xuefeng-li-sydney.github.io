// Blog post functionality
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPost();
    loadRelatedPosts();
});

// Sample blog post content
const blogPostContent = {
    1: {
        title: "The Future of AI Agents: From Research to Production",
        date: "2024-03-15",
        readTime: "8 min read",
        tags: ["AI Agents", "Machine Learning", "Production"],
        content: `
            <p>Artificial Intelligence agents represent one of the most exciting frontiers in modern AI research. As someone who has spent the last year leading AI agent development at NinjaTech AI, I've witnessed firsthand the incredible potential and unique challenges of bringing these systems from research concepts to production-ready applications.</p>

            <h2>What Are AI Agents?</h2>
            <p>AI agents are autonomous systems capable of perceiving their environment, making decisions, and taking actions to achieve specific goals. Unlike traditional AI models that simply process input and generate output, agents can:</p>
            <ul>
                <li>Maintain state and memory across interactions</li>
                <li>Plan and execute multi-step tasks</li>
                <li>Use tools and APIs to interact with external systems</li>
                <li>Learn and adapt from their experiences</li>
            </ul>

            <h2>The Research Foundation</h2>
            <p>The theoretical foundations of AI agents draw from decades of research in reinforcement learning, planning algorithms, and multi-agent systems. However, the recent breakthrough has been the integration of large language models (LLMs) as the "brain" of these agents.</p>

            <p>At NinjaTech AI, we've developed several specialized agents, including our Calendar Agent that improved date-time comprehension accuracy from 50% to 90% through innovative ensemble methods. This wasn't just about better models—it required rethinking how agents parse, understand, and act on temporal information.</p>

            <h2>Production Challenges</h2>
            <p>Moving from research prototypes to production systems introduces several critical challenges:</p>

            <h3>1. Reliability and Consistency</h3>
            <p>Research environments are forgiving, but production systems must handle edge cases, unexpected inputs, and system failures gracefully. We've learned that robust error handling and fallback mechanisms are essential.</p>

            <h3>2. Scalability</h3>
            <p>A single agent handling one task is very different from thousands of agents operating concurrently. Resource management, load balancing, and efficient model serving become paramount.</p>

            <h3>3. Safety and Control</h3>
            <p>Autonomous agents can take actions with real-world consequences. Implementing proper guardrails, approval workflows, and monitoring systems is crucial for responsible deployment.</p>

            <h2>Our SuperAgent Architecture</h2>
            <p>Our most ambitious project has been SuperAgent—a unified multi-modal agent that combines research and coding capabilities. The architecture includes:</p>
            <ul>
                <li>Web browsing capabilities for real-time information gathering</li>
                <li>Virtual machine access for safe code execution</li>
                <li>Persistent bash sessions for complex workflows</li>
                <li>Comprehensive file management systems</li>
                <li>API integration for external service interaction</li>
            </ul>

            <p>SuperAgent has achieved competitive results on challenging benchmarks like GAIA and SWE-Bench Verified, demonstrating that well-architected agents can match or exceed human performance on complex tasks.</p>

            <h2>The Role of Fine-Tuning</h2>
            <p>One of our key insights has been the importance of specialized fine-tuning. We've fine-tuned models like Llama 405B using QLoRA on 8xH200 setups for company-specific tool calling. This isn't just about better performance—it's about creating agents that understand your specific domain, tools, and workflows.</p>

            <h2>Looking Forward</h2>
            <p>The future of AI agents is incredibly promising. We're seeing rapid advances in:</p>
            <ul>
                <li>Multi-modal capabilities (vision, audio, text)</li>
                <li>Long-term memory and learning</li>
                <li>Collaborative multi-agent systems</li>
                <li>Integration with robotics and IoT devices</li>
            </ul>

            <p>However, success will depend on our ability to solve the engineering challenges of reliability, scalability, and safety. The most impactful agents won't just be the smartest—they'll be the ones that organizations can trust to operate autonomously in critical workflows.</p>

            <h2>Conclusion</h2>
            <p>AI agents represent a paradigm shift from passive AI tools to active AI collaborators. The journey from research to production is challenging but incredibly rewarding. As we continue to push the boundaries of what's possible, I'm excited to see how these systems will transform industries and augment human capabilities in ways we're only beginning to imagine.</p>

            <p>The future is autonomous, and it's closer than you think.</p>
        `
    },
    2: {
        title: "Fine-tuning Large Language Models: Lessons from the Trenches",
        date: "2024-02-28",
        readTime: "12 min read",
        tags: ["LLMs", "Fine-tuning", "Deep Learning"],
        content: `
            <p>Fine-tuning large language models has become a critical skill in the modern AI toolkit. Having recently fine-tuned Llama 405B and worked extensively with various LLM architectures, I want to share some practical insights and hard-learned lessons from the trenches.</p>

            <h2>The Fine-Tuning Landscape</h2>
            <p>The field of LLM fine-tuning has evolved rapidly. What started with full parameter fine-tuning has given way to more efficient approaches like LoRA, QLoRA, and other parameter-efficient fine-tuning (PEFT) methods.</p>

            <p>In our recent work, we used QLoRA to fine-tune Llama 405B on an 8xH200 setup. This approach allowed us to achieve significant performance improvements while maintaining computational efficiency—a crucial consideration when working with models of this scale.</p>

            <h2>Key Lessons Learned</h2>
            <p>Here are the most important insights from our fine-tuning experiences:</p>

            <h3>1. Data Quality Trumps Quantity</h3>
            <p>We've consistently found that a smaller, high-quality dataset outperforms a larger, noisy one. Spend time on data curation, cleaning, and validation. Your model is only as good as the data you train it on.</p>

            <h3>2. Task-Specific Architecture Matters</h3>
            <p>Different tasks benefit from different fine-tuning approaches. For tool calling, we found that focusing on the model's ability to understand function signatures and parameter types was crucial. For code generation, emphasizing syntax correctness and logical flow yielded better results.</p>

            <p>This is more than just theory—we've seen measurable improvements on benchmarks like the Aider Polyglot benchmark through targeted fine-tuning strategies.</p>

            <p><em>Continue reading for more insights on optimization strategies, common pitfalls, and practical implementation tips...</em></p>
        `
    },
    3: {
        title: "Weakly Supervised Learning: When Labels Are Scarce",
        date: "2024-01-20",
        readTime: "10 min read",
        tags: ["Weakly Supervised Learning", "Research", "Machine Learning"],
        content: `
            <p>In the real world, labeled data is often scarce, expensive, or simply unavailable. This is where weakly supervised learning shines—a field I've been deeply involved in throughout my PhD research and industry applications.</p>

            <h2>The Challenge of Limited Labels</h2>
            <p>Traditional supervised learning assumes access to large amounts of high-quality labeled data. However, in many practical scenarios, we face:</p>
            <ul>
                <li>Limited labeled examples</li>
                <li>Noisy or incorrect labels</li>
                <li>Incomplete annotations</li>
                <li>High labeling costs</li>
            </ul>

            <h2>Our Research Contributions</h2>
            <p>My work in this area, published at top-tier conferences like ICML, has focused on developing provably effective methods for learning with noisy labels without requiring anchor points—clean examples that traditional methods depend on.</p>

            <p>The key insight is that we can leverage the structure in the data itself to identify and correct label noise, leading to more robust learning algorithms.</p>

            <p><em>This post explores the theoretical foundations and practical applications of weakly supervised learning...</em></p>
        `
    }
};

function loadBlogPost() {
    // Get post ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id') || '1';
    
    const post = blogPostContent[postId];
    
    if (!post) {
        // Redirect to blog page if post not found
        window.location.href = 'blog.html';
        return;
    }
    
    // Update page title
    document.title = `${post.title} - Xuefeng Li`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = post.content.substring(0, 150) + '...';
    }
    
    // Load post content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-read-time').textContent = post.readTime;
    
    // Load tags
    const tagsContainer = document.getElementById('post-tags');
    tagsContainer.innerHTML = post.tags.map(tag => 
        `<span class="blog-tag">${tag}</span>`
    ).join('');
    
    // Load content
    document.getElementById('post-content').innerHTML = post.content;
}

function loadRelatedPosts() {
    const relatedContainer = document.getElementById('related-posts');
    if (!relatedContainer) return;
    
    // Get current post ID
    const urlParams = new URLSearchParams(window.location.search);
    const currentPostId = urlParams.get('id') || '1';
    
    // Filter out current post and get related posts
    const relatedPosts = blogPosts.filter(post => post.id.toString() !== currentPostId).slice(0, 2);
    
    relatedContainer.innerHTML = relatedPosts.map(post => `
        <div class="related-post-card" onclick="window.location.href='blog-post.html?id=${post.id}'">
            <div class="related-post-image">
                <i class="fas fa-blog"></i>
            </div>
            <div class="related-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="related-post-meta">
                    <span>${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Share functions
function shareOnTwitter() {
    const title = document.getElementById('post-title').textContent;
    const url = window.location.href;
    const text = `Check out this article: ${title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Add blog post specific styles
const blogPostStyles = `
.blog-post {
    padding: calc(70px + var(--spacing-2xl)) 0 var(--spacing-2xl) 0;
    max-width: 800px;
    margin: 0 auto;
}

.blog-post-header {
    margin-bottom: var(--spacing-2xl);
    text-align: center;
}

.breadcrumb {
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.breadcrumb a {
    color: var(--primary-color);
    text-decoration: none;
}

.breadcrumb span {
    margin: 0 var(--spacing-sm);
}

.blog-post-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
    line-height: 1.2;
}

.blog-post-meta {
    display: flex;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.blog-post-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.blog-post-content {
    line-height: 1.8;
    margin-bottom: var(--spacing-2xl);
}

.blog-post-content h2 {
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
}

.blog-post-content h3 {
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.blog-post-content p {
    margin-bottom: var(--spacing-lg);
    color: var(--text-secondary);
}

.blog-post-content ul, .blog-post-content ol {
    margin-bottom: var(--spacing-lg);
    padding-left: var(--spacing-xl);
}

.blog-post-content li {
    margin-bottom: var(--spacing-sm);
    color: var(--text-secondary);
}

.blog-post-footer {
    border-top: 1px solid var(--border-color);
    padding-top: var(--spacing-xl);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: var(--spacing-xl);
}

.post-share h3 {
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.share-buttons {
    display: flex;
    gap: var(--spacing-sm);
}

.share-btn {
    background-color: var(--bg-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-size: var(--font-size-sm);
}

.share-btn:hover {
    background-color: var(--primary-color);
    color: var(--text-inverse);
    border-color: var(--primary-color);
}

.related-posts {
    background-color: var(--bg-secondary);
    padding: var(--spacing-3xl) 0;
}

.related-posts h2 {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    color: var(--text-primary);
}

.related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}

.related-post-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    cursor: pointer;
    transition: transform var(--transition-normal);
}

.related-post-card:hover {
    transform: translateY(-5px);
}

.related-post-image {
    height: 150px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-inverse);
    font-size: var(--font-size-2xl);
}

.related-post-content {
    padding: var(--spacing-lg);
}

.related-post-content h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.related-post-content p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-sm);
}

.related-post-meta {
    display: flex;
    gap: var(--spacing-md);
    font-size: var(--font-size-xs);
    color: var(--text-tertiary);
}

@media (max-width: 767px) {
    .blog-post-title {
        font-size: var(--font-size-3xl);
    }
    
    .blog-post-meta {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .blog-post-footer {
        flex-direction: column;
        text-align: center;
    }
    
    .share-buttons {
        justify-content: center;
    }
}
`;

// Inject blog post styles
const blogPostStyleSheet = document.createElement('style');
blogPostStyleSheet.textContent = blogPostStyles;
document.head.appendChild(blogPostStyleSheet);
