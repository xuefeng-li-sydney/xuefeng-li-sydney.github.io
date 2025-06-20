// Personal and professional data
const personalData = {
    name: "Xuefeng Li",
    title: "Senior Applied Scientist",
    location: "Sydney, Australia",
    email: "ausmountain@gmail.com",
    phone: "+61450306410",
    github: "https://github.com/XuefengLi1",
    linkedin: "https://www.linkedin.com/in/xuefeng-li-sydney/",
    googleScholar: "https://scholar.google.com.au/citations?user=BSh0CXIAAAAJ&hl=en",
    bio: "Senior Applied Scientist with 6+ years of experience in machine learning research and industry applications, specialising both in foundational ML research (weakly supervised learning) and cutting-edge AI applications (AI agents). Proven track record of leading end-to-end AI prototype development from research to production-ready systems, with published research in top-tier conferences. Drives evidence-based decision-making, providing data-driven technical assessments and fostering rational discourse across cross-functional teams."
};

const experiences = [
    {
        title: "Senior Applied Scientist",
        company: "NinjaTech AI",
        location: "Sydney, Australia",
        period: "Jan 2024 - Current",
        description: "Lead AI agent prototype development and technical innovation, managing end-to-end delivery of production-ready prototypes from agent design to LLM fine-tuning.",
        achievements: [
            "Calendar Agent: Developed an innovative ensemble method for improving date time comprehension, boost the accuracy from 50% to 90% on internal benchmark",
            "Fine-tuning: Fine-tuned Llama 405B using QLoRA on 8xH200 setup for company-specific tool calling across scheduling, image generation, and conversation tasks, and DeepSeek-R1 distilled model for code generation with improved performance on Aider Polyglot benchmark",
            "SuperAgent: Built a unified multi-modal agent combining research and coding capabilities with a comprehensive toolkit including web browsing, virtual machine, persistent bash session, file management, and API integration. Achieving competitive results on GAIA and SWE-Bench Verified."
        ],
        technologies: ["AI Agents", "PEFT", "Code Generation", "GAIA", "SWE-Bench Verified", "Aider Polyglot"]
    },
    {
        title: "Machine Learning Engineer",
        company: "Rokt",
        location: "Sydney, Australia",
        period: "Jan 2023 - Jan 2024",
        description: "Spearheading the enhancement of Click-Through Rate (CTR) Model by integrating LLMs and multimodal models for improved prediction.",
        achievements: [
            "Lead the project by designing, developing, and productionizing an end-to-end pipeline to fine-tune CLIP model, extract embeddings from the tuned Model, train the CTR prediction model and serve the embedding for online prediction",
            "Developed and implemented innovative machine learning algorithms and scalable data pipelines, addressing complex business challenges in collaboration with product, engineering, and data teams",
            "Conducted exploratory data analysis (EDA), data pre-processing/engineering, offline experiments, and A/B testing"
        ],
        technologies: ["Recommendation Models", "LLMs", "Spark", "Kubeflow", "Tensorflow", "AWS"]
    },
    {
        title: "Applied Scientist, Internship",
        company: "Amazon",
        location: "Sydney, Australia",
        period: "Apr 2022 - Dec 2022",
        description: "Virtual Try-On Project: Developed a novel framework for 3D novel view synthesis from a single image using Neural Radiance Fields (NeRF) and StyleGAN.",
        achievements: [
            "Improved the inference speed by more than 100 times compared with the previous solution",
            "Authored a comprehensive scientific paper detailing the methodologies and breakthroughs of my proposed framework, contributing to the 3D computer vision and generative model applications"
        ],
        technologies: ["NeRF", "3D Computer Vision", "StyleGAN", "Diffusion Models", "PyTorch", "AWS"]
    },
    {
        title: "Research Assistant",
        company: "University of Sydney",
        location: "Sydney, Australia",
        period: "Feb 2019 - Dec 2021",
        description: "Focused on Weakly Supervised Learning with limited labeled data in image and text domains.",
        achievements: [
            "Developed algorithms for noisy and incomplete labels that led to top-tier conference publications",
            "Research contributions in weakly-supervised learning and label noise handling"
        ],
        technologies: ["Weakly-supervised Learning", "Label Noise", "Matrix Factorisation", "PyTorch"]
    },
    {
        title: "Teaching Assistant",
        company: "UNSW",
        location: "Sydney, Australia",
        period: "Feb 2019 - Dec 2021",
        description: "Conducted teaching activities for Machine Learning, Neural Networks, Computer Vision, and Data Mining courses.",
        achievements: [
            "Assisted in course material preparation and student guidance",
            "Taught core concepts in machine learning and computer vision"
        ],
        technologies: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Mining"]
    }
];

const education = [
    {
        degree: "Ph.D. in Computer Science (Machine learning)",
        institution: "UNSW Sydney",
        location: "Sydney, Australia",
        period: "2018 - 2025",
        details: [
            "Research Advisors: Alan Blair, Tongliang Liu",
            "Thesis: Learning Across the Supervision Spectrum: From Theory to Application"
        ]
    },
    {
        degree: "B.Sc. (Hons) in Computer Science and Engineering",
        institution: "UNSW Sydney",
        location: "Sydney, Australia",
        period: "2015 - 2018",
        details: [
            "First-Class Honours, UNSW CSE Performance Awards 4th Year (Top 10)",
            "Thesis: Low-rank Evolution Strategy"
        ]
    }
];

const publications = [
    {
        title: "Provably end-to-end label-noise learning without anchor points",
        authors: "Li, X, Liu, T, Han, B, Niu, G, and Sugiyama, M",
        venue: "International conference on machine learning, ICML 2021",
        type: "conference"
    },
    {
        title: "Eccentric regularization: minimizing hyperspherical energy without explicit projection",
        authors: "Li, X, and Blair, A",
        venue: "International Joint Conference on Neural Networks, IJCNN 2022",
        type: "conference"
    },
    {
        title: "Multi-Programming Language Ensemble for Code Generation in Large Language Model",
        authors: "Xue, T, Li, X, Azim, T, Smirnov, R, Yu, J, Sadrieh, A, and Pahlavan, B",
        venue: "arXiv preprint arXiv:2409.04114, 2024",
        type: "preprint"
    },
    {
        title: "Ninjallm: Fast, scalable and cost-effective rag using amazon sagemaker and aws trainium and inferentia2",
        authors: "Xue, T, Li, X, Smirnov, R, Azim, T, Sadrieh, A, and Pahlavan, B",
        venue: "arXiv preprint arXiv:2407.12057, 2024",
        type: "preprint"
    }
];

const skills = {
    "AI & Machine Learning": {
        icon: "fas fa-brain",
        items: ["AI Agents", "LLMs", "Weakly-supervised Learning", "Deep Learning", "Computer Vision", "NeRF", "Generative Models"]
    },
    "Programming Languages": {
        icon: "fas fa-code",
        items: ["Python", "SQL"]
    },
    "Data Science & Analytics": {
        icon: "fas fa-chart-bar",
        items: ["Pandas", "Numpy", "SciPy", "Spark", "Data Mining", "A/B Testing"]
    },
    "ML Frameworks & Tools": {
        icon: "fas fa-cogs",
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace Transformers", "Kubeflow", "TFX"]
    },
    "Cloud & Infrastructure": {
        icon: "fas fa-cloud",
        items: ["AWS (EC2, S3, Athena, Redshift)", "Docker", "Linux", "Mac OS"]
    },
    "Development Tools": {
        icon: "fas fa-tools",
        items: ["Git", "W&B", "Tensorboard", "Version Control"]
    }
};

const awards = [
    {
        year: "2018",
        title: "UNSW CSE Performance Awards 4th Year",
        description: "Top 10 performance in Computer Science and Engineering"
    },
    {
        year: "2018",
        title: "UNSW Datathon First Place",
        description: "Winner of university-wide data science competition"
    },
    {
        year: "2017",
        title: "Dean's Honours List",
        description: "Academic excellence recognition"
    }
];

const voluntaryActivities = [
    {
        role: "Reviewer",
        organization: "International Conference on Machine Learning (ICML)",
        period: "2022 - current"
    },
    {
        role: "Reviewer",
        organization: "Neural Information Processing Systems (NeurIPS)",
        period: "2022 - current"
    },
    {
        role: "Reviewer",
        organization: "International Conference on Learning Representations (ICLR)",
        period: "2022 - current"
    }
];

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of AI Agents: From Research to Production",
        excerpt: "Exploring the journey of AI agents from academic research to real-world applications, and the challenges we face in scaling these systems.",
        date: "2024-03-15",
        tags: ["AI Agents", "Machine Learning", "Production"],
        readTime: "8 min read",
        featured: true
    },
    {
        id: 2,
        title: "Fine-tuning Large Language Models: Lessons from the Trenches",
        excerpt: "Practical insights from fine-tuning Llama 405B and other large models, including optimization strategies and common pitfalls.",
        date: "2024-02-28",
        tags: ["LLMs", "Fine-tuning", "Deep Learning"],
        readTime: "12 min read",
        featured: true
    },
    {
        id: 3,
        title: "Weakly Supervised Learning: When Labels Are Scarce",
        excerpt: "A deep dive into weakly supervised learning techniques and their applications in scenarios with limited labeled data.",
        date: "2024-01-20",
        tags: ["Weakly Supervised Learning", "Research", "Machine Learning"],
        readTime: "10 min read",
        featured: false
    }
];

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        personalData,
        experiences,
        education,
        publications,
        skills,
        awards,
        voluntaryActivities,
        blogPosts
    };
}
