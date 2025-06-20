// Dynamic content loading functions

function loadExperiences() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}, ${exp.location}</div>
                <p class="timeline-description">${exp.description}</p>
                ${exp.achievements ? `
                    <ul class="timeline-achievements">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                ` : ''}
                ${exp.technologies ? `
                    <div class="timeline-technologies">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function loadEducation() {
    const educationGrid = document.querySelector('.education-grid');
    if (!educationGrid) return;

    educationGrid.innerHTML = '';

    education.forEach((edu, index) => {
        const educationCard = document.createElement('div');
        educationCard.className = 'education-card';

        educationCard.innerHTML = `
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-content">
                <h3 class="education-degree">${edu.degree}</h3>
                <div class="education-institution">${edu.institution}</div>
                <div class="education-location">${edu.location}</div>
                <div class="education-period">${edu.period}</div>
                ${edu.details ? `
                    <ul class="education-details">
                        ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;

        educationGrid.appendChild(educationCard);
    });
}

function loadPublications() {
    const publicationsList = document.querySelector('.publications-list');
    if (!publicationsList) return;
    
    publicationsList.innerHTML = '';
    
    publications.forEach((pub, index) => {
        const publicationItem = document.createElement('div');
        publicationItem.className = 'publication-item';
        
        // Highlight author name in bold
        const highlightedAuthors = pub.authors.replace(/\bLi, X\b/g, '<strong>Li, X</strong>');
        
        publicationItem.innerHTML = `
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${highlightedAuthors}</p>
            <p class="publication-venue">${pub.venue}</p>
        `;
        
        publicationsList.appendChild(publicationItem);
    });
}

function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    // Show only featured posts on homepage, or first 3 posts
    const postsToShow = blogPosts.filter(post => post.featured).slice(0, 3);
    
    postsToShow.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="fas fa-blog"></i>
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(post.date)} • ${post.readTime}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to navigate to blog post
        blogCard.addEventListener('click', () => {
            window.location.href = `blog-post.html?id=${post.id}`;
        });
        
        blogCard.style.cursor = 'pointer';
        blogGrid.appendChild(blogCard);
    });
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Search functionality for blog
function initializeBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const blogGrid = document.querySelector('.blog-grid');
    
    if (!searchInput || !blogGrid) return;
    
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterBlogPosts(searchTerm);
    }, 300));
}

function filterBlogPosts(searchTerm) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    blogGrid.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = '<p class="no-results">No blog posts found matching your search.</p>';
        return;
    }
    
    filteredPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="fas fa-blog"></i>
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(post.date)} • ${post.readTime}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        blogCard.addEventListener('click', () => {
            window.location.href = `blog-post.html?id=${post.id}`;
        });
        
        blogCard.style.cursor = 'pointer';
        blogGrid.appendChild(blogCard);
    });
}

// Load awards and voluntary activities
function loadAwards() {
    const awardsContainer = document.querySelector('.awards-list');
    if (!awardsContainer) return;
    
    awardsContainer.innerHTML = '';
    
    awards.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        
        awardItem.innerHTML = `
            <div class="award-year">${award.year}</div>
            <div class="award-content">
                <h3 class="award-title">${award.title}</h3>
                <p class="award-description">${award.description}</p>
            </div>
        `;
        
        awardsContainer.appendChild(awardItem);
    });
}

function loadVoluntaryActivities() {
    const activitiesContainer = document.querySelector('.activities-list');
    if (!activitiesContainer) return;
    
    activitiesContainer.innerHTML = '';
    
    voluntaryActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <h3 class="activity-role">${activity.role}</h3>
            <p class="activity-organization">${activity.organization}</p>
            <p class="activity-period">${activity.period}</p>
        `;
        
        activitiesContainer.appendChild(activityItem);
    });
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load content for specific pages
    if (window.location.pathname.includes('blog.html')) {
        loadAllBlogPosts();
        initializeBlogSearch();
    }
    
    // Load awards and activities if containers exist
    loadAwards();
    loadVoluntaryActivities();
});

function loadAllBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="fas fa-blog"></i>
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(post.date)} • ${post.readTime}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        blogCard.addEventListener('click', () => {
            window.location.href = `blog-post.html?id=${post.id}`;
        });
        
        blogCard.style.cursor = 'pointer';
        blogGrid.appendChild(blogCard);
    });
}

// Add CSS for timeline achievements and technologies
const additionalStyles = `
.timeline-achievements {
    list-style: none;
    margin: var(--spacing-md) 0;
    padding: 0;
}

.timeline-achievements li {
    margin-bottom: var(--spacing-sm);
    padding-left: var(--spacing-md);
    position: relative;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    line-height: 1.6;
}

.timeline-achievements li::before {
    content: '•';
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
}

.timeline-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
}

.tech-tag {
    background-color: var(--bg-secondary);
    color: var(--primary-color);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 500;
    border: 1px solid var(--primary-color);
}

.no-results {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    grid-column: 1 / -1;
    padding: var(--spacing-2xl);
}

.award-item, .activity-item {
    background-color: var(--bg-card);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
}

.award-year {
    color: var(--primary-color);
    font-weight: 600;
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-sm);
}

.award-title, .activity-role {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.award-description, .activity-organization, .activity-period {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-xs);
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
