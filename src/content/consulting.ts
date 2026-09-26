export const services = [
  {
    id: "supply-chain",
    title: "Supply Chain Consulting",
    short: "Build more responsive, efficient and resilient supply chains through improvements across planning, sourcing, manufacturing, inventory and logistics.",
    headline: "Build a more responsive, resilient and efficient supply chain.",
    capabilities: ["Supply Chain Strategy", "Demand & Supply Planning", "S&OP / Integrated Business Planning", "Procurement & Strategic Sourcing", "Inventory Optimization", "Manufacturing & Capacity Optimization", "Warehousing & Distribution", "Logistics Optimization", "Supply Chain Diagnostics", "Supply Chain Resilience", "Supply Chain Analytics", "Digital Supply Chain", "AI & Decision Intelligence"],
    framework: ["Plan", "Source", "Make", "Store", "Move", "Serve"],
  },
  {
    id: "profitability",
    title: "Profitability",
    short: "Identify where value is created or lost across products, customers, channels and operations, and develop initiatives to improve sustainable profitability.",
    headline: "Understand where value is created—and where it is being lost.",
    capabilities: ["Profitability Diagnostics", "Cost Optimization", "Product / SKU Profitability", "Customer Profitability", "Channel Profitability", "Cost-to-Serve Analysis", "Procurement Savings", "Operating Cost Optimization", "Working Capital Improvement", "Margin Improvement", "Profitability Driver Analysis"],
    framework: ["Revenue", "−", "Cost", "=", "Profit"],
  },
  {
    id: "go-to-market",
    title: "Go-to-Market",
    short: "Help businesses identify attractive markets, customer segments, channels and propositions and translate growth opportunities into executable market strategies.",
    headline: "Turn market opportunities into executable growth strategies.",
    capabilities: ["Market Entry Strategy", "Growth Strategy", "Customer Segmentation", "Market Prioritization", "New Product Launch", "Product & Value Proposition Strategy", "Channel Strategy", "Distribution Strategy", "Sales Strategy", "Go-to-Market Model Design"],
    framework: ["Market", "Customer", "Proposition", "Channel", "Commercial Model", "Execution"],
  },
  {
    id: "revenue-management",
    title: "Revenue Management",
    short: "Improve revenue quality through better pricing, portfolio, customer, channel and commercial decision-making.",
    headline: "Improve the quality and sustainability of revenue.",
    capabilities: ["Pricing Strategy", "Pricing & Margin Analytics", "Product Mix Optimization", "Customer Mix Optimization", "Channel Mix Optimization", "Promotion Effectiveness", "Revenue Leakage Analysis", "Commercial Performance Analytics", "Portfolio Optimization", "Revenue Growth Management", "Revenue Forecasting & Decision Support"],
    framework: ["Price", "×", "Volume", "×", "Mix", "→", "Revenue"],
  },
] as const;

export const thinkingStages = [
  ["Understand", "Listen carefully and establish the business context, objectives and constraints."],
  ["Diagnose", "Use data, stakeholder insights and structured problem solving to identify root causes."],
  ["Design", "Develop practical solutions based on business impact, feasibility and strategic fit."],
  ["Deliver", "Translate recommendations into clear initiatives, ownership and execution roadmaps."],
  ["Measure", "Define outcomes and KPIs to continuously assess business impact."],
] as const;

export const values = [
  ["Listen First", "We listen carefully before we solve.", "We seek to genuinely understand our clients, their context and the underlying problem before recommending action."],
  ["Act With Purpose", "Understand the problem. Act accordingly.", "We focus our efforts on what matters and develop solutions grounded in the realities of the business."],
  ["Lead With Compassion", "People matter.", "We approach clients, colleagues and everyone we interact with through empathy, care and compassion."],
  ["Treat People Right", "Respect in every interaction.", "We believe strong businesses and relationships are built by treating every person with dignity, fairness and respect."],
] as const;