function loadPublications() {
    const el = document.getElementById('publications-list');
    if (!el) return;

    el.innerHTML = publications.map(pub => {
        const authors = pub.authors.replace(/\bLi, X\b/g, '<strong>Li, X</strong>');
        return `
            <div class="publication-item">
                <div class="publication-title">${pub.title}</div>
                <div class="publication-authors">${authors}</div>
                <div class="publication-venue">${pub.venue}</div>
            </div>
        `;
    }).join('');
}
