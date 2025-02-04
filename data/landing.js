import {
  BarChart3,
  PieChart,
  CreditCard,
  Scan,
  CalendarSync,
  Shield,
  Lock,
  BellRingIcon,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    units_pre: "",
    value: 50,
    units_post: "K+",
    label: "Active Users",
  },
  {
    units_pre: "$",
    value: 2,
    units_post: "B+",
    label: "Transactions Tracked",
  },
  {
    units_pre: "",
    units_post: "%",
    value: 99.9,
    label: "Uptime",
  },
  {
    units_pre: "",
    units_post: "",
    value: 4.9,
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <Lock className="h-8 w-8 text-blue-600" />,
    title: "Secure Authentication",
    description:
      "Users can log in safely using Clerk, ensuring data privacy and account security",
  },
  {
    icon: <Scan className="h-8 w-8 text-blue-600" />,
    title: "Receipt Scanning with AI",
    description:
      "Utilized Google Generative AI API to scan receipts and automatically extract transaction details",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Visual Data Representation",
    description:
      "Displayed user transactions through bar graphs and pie charts, making financial insights easy to interpret",
  },
  {
    icon: <BellRingIcon className="h-8 w-8 text-blue-600" />,
    title: "Budget Alerts and Notifications",
    description:
      "Sent email notifications when expenditures exceeded 90% of the set budget, helping users stay on track",
  },
  {
    icon: <CalendarSync className="h-8 w-8 text-blue-600" />,
    title: "Recurring Transactions Automation",
    description:
      "Automatically recorded transactions based on daily, monthly, or yearly recurrence intervals",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Advanced Bot Protection",
    description:
      "Integrated Arcjet middleware to detect and block malicious bots while allowing trusted ones, ensuring secure usage",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "Enterprenuer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    quote:
      "Budget Buddy revolutionized the way I handle my business finances. The AI insights uncovered cost-saving opportunities I hadn’t even considered.",
  },
  {
    name: "Arjun Patel",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "The smart receipt scanner is a game-changer. I’ve saved countless hours every month, letting me focus more on growing my freelance projects.",
  },
  {
    name: "Neha Kapoor",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    quote:
      "Budget Buddy is a must-have for my clients. Its multi-currency support and in-depth analytics are perfect for anyone managing global investments.",
  },
];
