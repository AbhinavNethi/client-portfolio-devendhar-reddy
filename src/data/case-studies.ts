export interface CaseStudy {
    slug: string;
    title: string;
    category: string;
    description: string;
    year: string;
    color: string; // Tailwind gradient classes
    roles: string[];

    // Detail Page Data
    timeline: string;
    tools: string[];
    impactMetrics: string[];

    problemStatement: string;
    businessChallenges: string[];
    userPainPoints: string[];

    process: {
        discovery: string;
        ideation: string;
        testing: string;
    };

    solution: string;
    outcomes: string[];
    googleDriveLink: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "bee-brewery-discovery",
        title: "Bee - Brewery Discovery App",
        category: "Mobile / Social",
        description: "A mobile-first platform connecting beer enthusiasts with local breweries through an engaging discovery experience and social features.",
        year: "2024",
        color: "from-amber-50 to-white",
        roles: ["Lead UI/UX Designer", "Mobile Design Specialist"],

        timeline: "4 Months",
        tools: ["Figma", "Protopie", "Maze", "Adobe Illustrator"],
        impactMetrics: ["500+ Early Adopters in Beta", "4.6/5 User Rating", "35% Monthly Active User Engagement"],

        problemStatement: "Beer enthusiasts struggled to discover new local breweries and lost track of their favorites. Existing solutions were either directory-based without social features or overly complex beer-rating apps that ignored the discovery aspect.",
        businessChallenges: ["Building a two-sided marketplace", "Encouraging user-generated content", "Competing with established beer apps"],
        userPainPoints: ["Hard to find breweries near current location", "No way to save favorite beers and breweries", "Lack of community recommendations"],

        process: {
            discovery: "Conducted interviews with 20+ craft beer enthusiasts and 10 brewery owners to understand pain points. Analyzed competitor apps like Untappd and Google Maps to identify gaps.",
            ideation: "Created user flows for discovery, favoriting, and social sharing. Designed a card-based interface optimized for one-handed mobile use with swipe gestures.",
            testing: "Ran prototype tests with 15 users, iterating on the search filters and map view to improve discoverability."
        },

        solution: "A visually engaging mobile app with location-based discovery, personalized recommendations, a 'Favorites' collection system, and social sharing features. The interface combines map views with card-based browsing for intuitive navigation.",
        outcomes: ["Launched successful beta with 500+ users.", "Brewery partners reported 20% increase in foot traffic from app referrals.", "Featured in local craft beer community newsletters."],
        googleDriveLink: "https://www.figma.com/proto/Sdxx2dWUihTO2t0cFtNXCL/Bee-mobile-final"
    },
    {
        slug: "udyamika-government-platform",
        title: "Udyamika - Telangana Startup Platform",
        category: "Government / Enterprise",
        description: "A comprehensive digital platform for Telangana's startup ecosystem, connecting entrepreneurs with government resources, mentorship, and funding opportunities.",
        year: "2023",
        color: "from-blue-50 to-white",
        roles: ["Senior UI/UX Designer", "Design System Architect"],

        timeline: "8 Months",
        tools: ["Figma", "Adobe XD", "Miro", "Webflow"],
        impactMetrics: ["10,000+ Registered Startups", "Government Adoption Across 5 Departments", "40% Reduction in Application Processing Time"],

        problemStatement: "Startup founders in Telangana faced fragmented access to government schemes, lengthy application processes, and lack of transparency. The existing system required in-person visits and physical documentation, creating barriers for early-stage entrepreneurs.",
        businessChallenges: ["Multi-stakeholder alignment (WE-HUB, government departments)", "Ensuring accessibility and inclusion", "Building trust in digital-first government services"],
        userPainPoints: ["Complex onboarding with unclear requirements", "No centralized dashboard for tracking applications", "Limited visibility into scheme eligibility"],

        process: {
            discovery: "Collaborated with government officials and conducted field research with 50+ startup founders. Analyzed legacy systems and identified process bottlenecks.",
            ideation: "Designed a unified ecosystem with role-based dashboards for founders, mentors, and administrators. Created a step-by-step application wizard with progress tracking.",
            testing: "Conducted usability testing with government staff and founders. Iterated on accessibility features to meet WCAG 2.1 AA standards."
        },

        solution: "A modern, accessible web platform featuring secure authentication (OTP, Google Sign-In), personalized dashboards, scheme discovery with smart filters, application tracking, and integrated mentor matching. The design balances government authority with startup-friendly aesthetics.",
        outcomes: ["Successfully onboarded 10,000+ startups in the first year.", "Reduced application processing time from 45 days to 27 days on average.", "Received positive feedback from Chief Minister's office for digital transformation."],
        googleDriveLink: "https://www.figma.com/proto/FjE4yECoV4vby6E8C1abiV/Udyamika_Application-Desktop-AllPages"
    },
    {
        slug: "dataful-journalism-platform",
        title: "Dataful - Data Journalism Platform",
        category: "Data Visualization / SaaS",
        description: "A comprehensive platform making public data accessible, searchable, and actionable for journalists, researchers, and policymakers across India.",
        year: "2023",
        color: "from-purple-50 to-white",
        roles: ["Product Designer", "Data Visualization Specialist"],

        timeline: "10 Months",
        tools: ["Figma", "D3.js", "Tableau", "React"],
        impactMetrics: ["38,000+ Registered Users", "Featured by Springer Nature & The Hindu", "95% Data Accuracy Rating"],

        problemStatement: "Journalists and researchers spent countless hours cleaning, standardizing, and verifying public datasets. Existing government data portals were difficult to navigate, lacked search functionality, and provided data in inconsistent formats.",
        businessChallenges: ["Aggregating data from 100+ sources", "Ensuring data quality and recency", "Building a sustainable business model"],
        userPainPoints: ["Time-consuming data cleaning", "Difficulty finding historical datasets", "No export options for analysis tools"],

        process: {
            discovery: "Interviewed 30+ journalists and data analysts to understand their workflows. Analyzed user behavior on government data portals to identify friction points.",
            ideation: "Designed an AI-powered search interface with smart filters. Created collection management features for organizing datasets by topic.",
            testing: "Beta tested with newsrooms and received feedback on export formats, leading to support for CSV, JSON, and API access."
        },

        solution: "An intelligent data platform with curated, standardized datasets spanning elections, education, health, and economics. Features include AI-assisted search, visual data previews, historical tracking, ready-to-use collections, and multiple export formats.",
        outcomes: ["38,000+ users rely on the platform for data-driven journalism.", "Used by major publications like The Hindu and international researchers.", "Reduced avg. time to find and prepare datasets from 6 hours to 20 minutes."],
        googleDriveLink: "https://dataful.factly.in/"
    },
    {
        slug: "dega-cms-factchecking",
        title: "Dega - Fact-Checking CMS",
        category: "Open Source / Media Tech",
        description: "An open-source content management system purpose-built for fact-checking organizations, enabling efficient verification workflows and multi-platform publishing.",
        year: "2022",
        color: "from-green-50 to-white",
        roles: ["UX Designer", "Open Source Contributor"],

        timeline: "12 Months",
        tools: ["Figma", "React", "Go", "PostgreSQL"],
        impactMetrics: ["Adopted by 15+ Fact-Checking Organizations", "Open Source Community of 50+ Contributors", "Supports 8 Languages"],

        problemStatement: "Fact-checking organizations lacked specialized tools for their unique workflows. Generic CMS platforms didn't support claim tracking, multi-stage verification, or the specialized metadata required for fact-checking standards.",
        businessChallenges: ["Building for diverse organizational needs", "Maintaining as open-source project", "Ensuring scalability for high-traffic fact-checks"],
        userPainPoints: ["Manual claim tracking across sources", "No standardized rating system", "Difficulty publishing to multiple platforms simultaneously"],

        process: {
            discovery: "Researched International Fact-Checking Network (IFCN) standards and shadowed fact-checkers at multiple organizations to understand verification workflows.",
            ideation: "Designed role-based interfaces for researchers, writers, editors, and publishers. Created a claim database with advanced search and categorization.",
            testing: "Piloted with 3 fact-checking organizations, gathering feedback on the editorial workflow and rating system."
        },

        solution: "A modular CMS with claim management, collaborative editing, built-in fact-check templates (ClaimReview schema), multi-stage approval workflows, and API-based publishing to websites and social media. Fully open-source and extensible.",
        outcomes: ["Adopted by fact-checking orgs across India, Asia, and Africa.", "Reduced time-to-publish fact-checks by 35%.", "Active GitHub community with regular feature contributions."],
        googleDriveLink: "https://dega.factly.in/"
    },
    {
        slug: "feemonk-financial-app",
        title: "FeeMonk - Financial Management App",
        category: "Fintech / Mobile",
        description: "A mobile financial management application helping users track expenses, manage payments, and gain insights into their spending habits.",
        year: "2023",
        color: "from-indigo-50 to-white",
        roles: ["Mobile UI Designer", "UX Researcher"],

        timeline: "5 Months",
        tools: ["Figma", "Principle", "UserTesting", "Sketch"],
        impactMetrics: ["Achieved 40% User Retention in Beta", "4.5/5 App Store Rating", "30% Increase in Financial Awareness (User Survey)"],

        problemStatement: "Young professionals and students struggled to keep track of daily expenses and recurring payments. Existing finance apps were either too complex (enterprise banking apps) or too simple (basic expense trackers without insights).",
        businessChallenges: ["Building trust in financial data security", "Balancing feature richness with simplicity", "Competing with established players"],
        userPainPoints: ["Forgetting about recurring subscriptions", "Difficulty categorizing expenses manually", "No actionable insights to improve spending"],

        process: {
            discovery: "Surveyed 100+ users aged 22-35 about their financial management habits. Identified that 70% forget about at least one recurring payment per month.",
            ideation: "Designed a dashboard-first interface with visual spending breakdowns. Created smart categorization using transaction descriptions.",
            testing: "Ran A/B tests on notification strategies for payment reminders, finding that contextual nudges outperformed generic alerts."
        },

        solution: "A clean, intuitive mobile app featuring automatic expense categorization, payment reminders, visual spending analytics with charts, budget goal tracking, and personalized insights powered by spending patterns.",
        outcomes: ["Beta launch with 2,000+ downloads in first month.", "Users reported saving an average of ₹3,500/month by identifying wasteful spending.", "Positive press coverage in financial tech publications."],
        googleDriveLink: "https://www.figma.com/proto/YtWAlLMC9iAYHGaRRLzP0l/feemonk-final--29-3-2023-"
    },
    {
        slug: "popular-packages-ecommerce",
        title: "Popular Packages - B2B E-Commerce",
        category: "E-Commerce / B2B",
        description: "An enterprise e-commerce platform for office supplies and furniture, featuring curated product packages for streamlined corporate procurement.",
        year: "2024",
        color: "from-orange-50 to-white",
        roles: ["UI/UX Designer", "E-Commerce Specialist"],

        timeline: "6 Months",
        tools: ["Figma", "Adobe XD", "Hotjar", "Shopify Plus"],
        impactMetrics: ["45% Increase in Average Order Value", "25% Faster Checkout Completion", "Corporate Clients from 50+ Companies"],

        problemStatement: "Corporate procurement managers wasted time selecting individual office supplies for new offices or departments. The process required checking multiple categories, comparing items, and ensuring nothing was missed.",
        businessChallenges: ["Educating users on package benefits vs. individual items", "Balancing customization with simplification", "Managing complex B2B pricing"],
        userPainPoints: ["Time-consuming product selection process", "Risk of forgetting essential items", "No bulk ordering discounts visible upfront"],

        process: {
            discovery: "Interviewed procurement managers from 15 companies to understand their buying process. Identified that 80% preferred ready-made packages for common scenarios.",
            ideation: "Designed a category-first navigation with prominent 'Popular Packages' section. Created package cards showing contents, savings, and customization options.",
            testing: "Cart abandonment analysis revealed users wanted to see package contents without clicking through, leading to expandable cards."
        },

        solution: "A clean B2B e-commerce platform featuring curated packages for common scenarios (New Office Setup, COVID Supplies, Cafeteria, Sanitation), transparent bulk pricing, easy customization, and streamlined checkout with purchase order support.",
        outcomes: ["45% increase in average order value through package adoption.", "Reduced procurement time from 2 hours to 15 minutes for standard orders.", "Expanded to serve 50+ corporate clients including startups and government offices."],
        googleDriveLink: "https://www.figma.com/proto/ie06jr3NpS8iEcmkwDkvr3/Popular-Packages"
    }
];
