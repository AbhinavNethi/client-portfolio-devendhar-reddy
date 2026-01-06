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
        slug: "wealth-management-dashboard",
        title: "Wealth Management Dashboard",
        category: "Finance / Enterprise",
        description: "Redesigning the advisor experience for TIAA-CREF to improve portfolio visibility, reduce transaction time, and ensure WCAG 2.1 compliance.",
        year: "2023",
        color: "from-blue-50 to-white",
        roles: ["Lead Designer", "Design System Lead"],

        timeline: "8 Months",
        tools: ["Figma", "Sketch", "Jira", "Storybook"],
        impactMetrics: ["30% Reduction in Transaction Time", "100% WCAG 2.1 Compliant", "25% Decrease in Support Tickets"],

        problemStatement: "The existing advisor dashboard was built on legacy infrastructure with disjointed workflows, leading to high cognitive load and frequent errors during time-sensitive trades.",
        businessChallenges: ["Legacy backend constraints", "Strict compliance/security requirements", "Resistance to change from senior advisors"],
        userPainPoints: ["Too many clicks to execute trades", "Inaccessible data visualization", "Slow load times"],

        process: {
            discovery: "Conducted 15+ stakeholder interviews and shadow sessions with wealth managers to understand their daily workflows.",
            ideation: "Created low-fidelity wireframes focusing on information architecture and reducing navigation depth.",
            testing: "Ran usability tests with 10 advisors, iterating on the trade execution flow to minimize friction."
        },

        solution: "A modular, widget-based dashboard that prioritizes actionable insights. We implemented a new 'Quick Trade' feature and a unified client view.",
        outcomes: ["Successfully migrated 500+ advisors to the new platform.", "Positive NPS score increase of 40 points."],
        googleDriveLink: "https://drive.google.com/drive/u/0/folders/example1"
    },
    {
        slug: "digital-pharmacy-experience",
        title: "Digital Pharmacy Experience",
        category: "Healthcare",
        description: "Streamlining the prescription refill and management flow for CVS Health, reducing user drop-off by 15% and improving accessibility scores.",
        year: "2021",
        color: "from-red-50 to-white",
        roles: ["UI/UX Design", "User Testing"],

        timeline: "6 Months",
        tools: ["Adobe XD", "Miro", "Zeplin"],
        impactMetrics: ["15% Drop-off Reduction", "98% Defect-Free Releases", "4.8/5 App Store Rating"],

        problemStatement: "Users struggled to manage multiple prescriptions for family members, resulting in confused orders and high call center volume.",
        businessChallenges: ["HIPAA compliance", "Complex integration with legacy pharmacy systems", "Mobile-first requirement"],
        userPainPoints: ["Confusing checkout flow", "Unclear medication status", "Accessibility barriers for elderly users"],

        process: {
            discovery: "Analyzed call center logs and app analytics to identify drop-off points.",
            ideation: "Designed a 'Family View' dashboard to manage dependents' medications easily.",
            testing: "Tested high-fidelity prototypes with a diverse user group including seniors."
        },

        solution: "A simplified, linear checkout flow with clear status indicators and a new robust 'Family Management' hub.",
        outcomes: ["Reduced average time-to-refill by 45 seconds.", "Significant reduction in call volume regarding order status."],
        googleDriveLink: "https://drive.google.com/drive/u/0/folders/example2"
    },
    {
        slug: "enterprise-admin-portal",
        title: "Enterprise Admin Portal",
        category: "SaaS / B2B",
        description: "A comprehensive administrative suite for managing complex user permissions, workflows, and data reporting at scale.",
        year: "2020",
        color: "from-gray-50 to-white",
        roles: ["Product Design", "Prototyping"],

        timeline: "12 Months",
        tools: ["Figma", "HTML/CSS", "Angular"],
        impactMetrics: ["50% Faster User Onboarding", "Unified 3 Separate Tools", "Scalable to 10k+ Users"],

        problemStatement: "Admins were using three separate, disconnected tools to manage user permissions, leading to security gaps and inefficiency.",
        businessChallenges: [" unifying disparate data models", "Zero downtime migration", "Complex RBAC requirements"],
        userPainPoints: ["Lack of central visibility", "Repetitive data entry", "No bulk action capabilities"],

        process: {
            discovery: "Mapped out the entire ecosystem of admin tools and identified redundancy.",
            ideation: "Proposed a unified 'Admin Console' with a consistent design language.",
            testing: "Beta tested with power users to validate the new RBAC controls."
        },

        solution: "A unified portal with granular role-based access control, bulk operations, and real-time audit logs.",
        outcomes: ["Eliminated need for manual database edits by support team.", "Streamlined compliance audits."],
        googleDriveLink: "https://drive.google.com/drive/u/0/folders/example3"
    }
];
