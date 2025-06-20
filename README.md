# Xuefeng Li - Personal Website

A modern, responsive personal website showcasing my work as a Senior Applied Scientist specializing in AI agents, machine learning research, and cutting-edge AI applications.

## 🌟 Features

- **Modern Design**: Clean, professional design with elegant animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark/light mode with manual toggle
- **Blog System**: Full-featured blog with search, filtering, and categorization
- **Performance Optimized**: Fast loading with optimized assets and code
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Live Demo

Visit the live website: [https://xuefeng-li-sydney.github.io](https://xuefeng-li-sydney.github.io)

## 📁 Project Structure

```
├── index.html              # Main homepage
├── blog.html              # Blog listing page
├── blog-post.html         # Individual blog post page
├── styles/
│   ├── main.css          # Core styles and CSS variables
│   ├── components.css    # Component-specific styles
│   └── responsive.css    # Responsive design and media queries
├── js/
│   ├── data.js          # Personal and professional data
│   ├── main.js          # Core functionality
│   ├── components.js    # Dynamic content loading
│   ├── blog.js          # Blog page functionality
│   └── blog-post.js     # Individual blog post functionality
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Pages deployment workflow
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties (CSS Variables), Flexbox, Grid
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git

## 🎨 Design Features

### Color Scheme
- **Light Mode**: Clean whites and grays with blue accents
- **Dark Mode**: Dark blues and grays with consistent accent colors
- **Accessibility**: High contrast ratios for better readability

### Typography
- **Primary Font**: Inter - Modern, readable sans-serif
- **Responsive Typography**: Fluid font sizes that scale with screen size
- **Hierarchy**: Clear typographic hierarchy for better content organization

### Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Eye-catching introduction with social links
- **Timeline**: Professional experience displayed in an elegant timeline
- **Cards**: Consistent card design for projects, skills, and blog posts
- **Forms**: Styled contact and newsletter forms with validation

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

### Responsive Features
- Mobile-first approach
- Collapsible navigation menu
- Optimized touch targets
- Readable typography on all screen sizes
- Efficient image loading

## 🔧 Setup and Development

### Prerequisites
- A modern web browser
- Git (for version control)
- A text editor or IDE

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/XuefengLi1/xuefeng-li-sydney.github.io.git
   cd xuefeng-li-sydney.github.io
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` in your browser

### Customization

#### Personal Information
Edit `js/data.js` to update:
- Personal details (name, contact info, bio)
- Professional experience
- Education background
- Publications
- Skills and expertise
- Blog posts

#### Styling
- **Colors**: Modify CSS variables in `styles/main.css`
- **Fonts**: Update font imports in HTML files
- **Layout**: Adjust component styles in `styles/components.css`
- **Responsive**: Modify breakpoints in `styles/responsive.css`

#### Content
- **About Section**: Update the hero and about sections in `index.html`
- **Blog Posts**: Add new posts to the `blogPostContent` object in `js/blog-post.js`
- **Images**: Replace placeholder images with your own

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. The site will automatically deploy via GitHub Actions
4. Visit `https://yourusername.github.io/repository-name`

### Manual Deployment
1. Build the project (if using a build process)
2. Upload files to your web server
3. Ensure proper file permissions
4. Configure your domain (if using a custom domain)

### Custom Domain
To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📊 Performance

The website is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Loading Speed**: < 2 seconds on 3G
- **Bundle Size**: Minimal JavaScript and CSS
- **Image Optimization**: Responsive images with proper sizing

## ♿ Accessibility

Accessibility features include:
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user motion preferences

## 🔍 SEO

SEO optimizations:
- **Meta Tags**: Proper title, description, and Open Graph tags
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevent duplicate content issues

## 🤝 Contributing

While this is a personal website, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ausmountain@gmail.com
- **LinkedIn**: [xuefeng-li-sydney](https://www.linkedin.com/in/xuefeng-li-sydney/)
- **GitHub**: [XuefengLi1](https://github.com/XuefengLi1)
- **Google Scholar**: [Profile](https://scholar.google.com.au/citations?user=BSh0CXIAAAAJ&hl=en)

---

Built with ❤️ by Xuefeng Li