// Blog-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogFilters();
    initializeBlogPagination();
    initializeNewsletterForm();
    loadAllBlogPosts();
});

let currentFilter = 'all';
let postsPerPage = 6;
let currentPage = 1;

function initializeBlogFilters() {
    const filterTags = document.querySelectorAll('.filter-tag');
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove active class from all tags
            filterTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            tag.classList.add('active');
            
            // Get filter value
            currentFilter = tag.getAttribute('data-filter');
            currentPage = 1; // Reset to first page
            
            // Filter and display posts
            filterAndDisplayPosts();
        });
    });
}

function filterAndDisplayPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    // Filter posts based on current filter
    let filteredPosts = blogPosts;
    
    if (currentFilter !== 'all') {
        filteredPosts = blogPosts.filter(post => 
            post.tags.includes(currentFilter)
        );
    }
    
    // Clear current posts
    blogGrid.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = '<p class="no-results">No blog posts found for this category.</p>';
        updatePaginationVisibility(false);
        return;
    }
    
    // Calculate posts to show
    const startIndex = 0;
    const endIndex = Math.min(postsPerPage * currentPage, filteredPosts.length);
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    // Display posts
    postsToShow.forEach((post, index) => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
    
    // Update pagination
    updatePagination(filteredPosts.length);
}

function createBlogCard(post) {
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
            <div class="blog-actions">
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `;
    
    // Add hover effects
    blogCard.addEventListener('mouseenter', () => {
        blogCard.style.transform = 'translateY(-5px)';
    });
    
    blogCard.addEventListener('mouseleave', () => {
        blogCard.style.transform = 'translateY(0)';
    });
    
    return blogCard;
}

function initializeBlogPagination() {
    const loadMoreBtn = document.getElementById('load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            filterAndDisplayPosts();
        });
    }
}

function updatePagination(totalPosts) {
    const loadMoreBtn = document.getElementById('load-more');
    const postsShown = postsPerPage * currentPage;
    
    if (loadMoreBtn) {
        if (postsShown >= totalPosts) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.textContent = `Load More Posts (${totalPosts - postsShown} remaining)`;
        }
    }
}

function updatePaginationVisibility(visible) {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visible ? 'block' : 'none';
    }
}

function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate newsletter subscription
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for subscribing! You\'ll receive updates about new posts.', 'success');
                emailInput.value = '';
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Enhanced search functionality
function initializeEnhancedBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase().trim();
            performSearch(searchTerm);
        }, 300);
    });
    
    // Clear search on escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
        }
    });
}

function performSearch(searchTerm) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    let filteredPosts = blogPosts;
    
    // Apply category filter first
    if (currentFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => 
            post.tags.includes(currentFilter)
        );
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Reset pagination
    currentPage = 1;
    
    // Clear and display results
    blogGrid.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        const message = searchTerm ? 
            `No blog posts found matching "${searchTerm}".` : 
            'No blog posts found for this category.';
        blogGrid.innerHTML = `<p class="no-results">${message}</p>`;
        updatePaginationVisibility(false);
        return;
    }
    
    // Display posts
    const postsToShow = filteredPosts.slice(0, postsPerPage);
    postsToShow.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
    
    // Update pagination
    updatePagination(filteredPosts.length);
}

// Initialize enhanced search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEnhancedBlogSearch();
});

// Add additional styles for blog page
const blogStyles = `
.blog-header {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    padding: calc(70px + var(--spacing-3xl)) 0 var(--spacing-3xl) 0;
    text-align: center;
}

.blog-header-title {
    font-size: var(--font-size-5xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.blog-header-subtitle {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto var(--spacing-2xl) auto;
    line-height: 1.6;
}

.blog-search-container {
    max-width: 400px;
    margin: 0 auto;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
}

.search-box i {
    position: absolute;
    left: var(--spacing-md);
    color: var(--text-tertiary);
    z-index: 1;
}

.search-box input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) calc(var(--spacing-md) + 24px);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    font-size: var(--font-size-base);
    background-color: var(--bg-card);
    color: var(--text-primary);
    transition: all var(--transition-fast);
}

.search-box input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.blog-content {
    padding: var(--spacing-3xl) 0;
}

.blog-filters {
    margin-bottom: var(--spacing-2xl);
    text-align: center;
}

.blog-filters h3 {
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-sm);
}

.filter-tag {
    background-color: var(--bg-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.filter-tag:hover,
.filter-tag.active {
    background-color: var(--primary-color);
    color: var(--text-inverse);
    border-color: var(--primary-color);
}

.blog-actions {
    margin-top: var(--spacing-lg);
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--border-light);
}

.read-more {
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    transition: all var(--transition-fast);
}

.read-more:hover {
    color: var(--primary-dark);
    transform: translateX(2px);
}

.blog-pagination {
    text-align: center;
    margin-top: var(--spacing-2xl);
}

.newsletter {
    background-color: var(--bg-secondary);
    padding: var(--spacing-3xl) 0;
    text-align: center;
}

.newsletter-content h2 {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.newsletter-content p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.newsletter-form {
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    gap: var(--spacing-sm);
}

.newsletter-form input {
    flex: 1;
    padding: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-base);
    background-color: var(--bg-card);
    color: var(--text-primary);
}

.newsletter-form input:focus {
    outline: none;
    border-color: var(--primary-color);
}

@media (max-width: 767px) {
    .newsletter-form {
        flex-direction: column;
    }
    
    .filter-tags {
        justify-content: flex-start;
    }
    
    .blog-header-title {
        font-size: var(--font-size-4xl);
    }
}
`;

// Inject blog-specific styles
const blogStyleSheet = document.createElement('style');
blogStyleSheet.textContent = blogStyles;
document.head.appendChild(blogStyleSheet);
