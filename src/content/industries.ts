export type Industry = {
  slug: string;
  name: string;
  context: string;
  questions: string[];
  services: string[];
};

export type IndustryGroup = {
  name: string;
  description: string;
  industries: Industry[];
};

const commonServices = ["Supply Chain Consulting", "Profitability", "Go-to-Market", "Revenue Management"];

const makeIndustry = (slug: string, name: string, context: string, questions: string[]): Industry => ({
  slug, name, context, questions, services: commonServices,
});

export const industryGroups: IndustryGroup[] = [
  {
    name: "Industrials & Mobility",
    description: "We support industrial businesses navigating complex supply networks, manufacturing economics, capacity decisions, procurement challenges and evolving market opportunities.",
    industries: [
      makeIndustry("auto-components", "Auto Components", "Auto component businesses operate across demanding customer schedules, complex supplier networks and continuous pressure on cost, quality and delivery.", ["How can planning and inventory better respond to demand volatility?", "Where are product, customer or plant margins being diluted?", "Which markets, customers and channels offer attractive growth?", "How should pricing reflect complexity and cost-to-serve?"]),
      makeIndustry("aerospace-defense", "Aerospace & Defense", "Long cycles, exacting quality requirements and intricate supplier networks make disciplined commercial and operational decisions essential.", ["How can critical supply risks be identified and reduced?", "Where can working capital be released without affecting readiness?", "How should capacity decisions balance demand and resilience?", "Which portfolio and customer choices improve sustainable returns?"]),
      makeIndustry("fertilizers-agrochemicals", "Fertilizers & Agrochemicals", "Seasonal demand, commodity inputs, channel complexity and regional market dynamics shape performance across the sector.", ["How can seasonal planning and product availability improve?", "Where is profitability changing across products and regions?", "Which routes to market best serve priority customer segments?", "How can pricing and mix decisions strengthen revenue quality?"]),
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    description: "We support healthcare and life-sciences businesses across growth, commercial strategy, profitability and increasingly complex supply and operating environments.",
    industries: [
      makeIndustry("pharmaceuticals-biotechnology", "Pharmaceuticals & Biotechnology", "Patient needs, regulation, product lifecycles and network complexity create interconnected commercial and operational choices.", ["How can product availability and supply resilience improve?", "Where can inventory, manufacturing and capacity perform better?", "How should market entry and product launches be structured?", "Where are profitability and revenue opportunities being missed?"]),
      makeIndustry("healthcare-equipment-supplies", "Healthcare Equipment & Supplies", "Healthcare equipment businesses balance clinical value, channel requirements, service models and reliable product supply.", ["Which segments and propositions offer the clearest growth path?", "How can channel economics and cost-to-serve improve?", "Where should inventory be positioned across the network?", "How can commercial performance be measured more effectively?"]),
    ],
  },
  {
    name: "Consumer & Food",
    description: "We help consumer and food businesses address changing demand, portfolio complexity, pricing, route-to-market, margins and supply-chain performance.",
    industries: [
      makeIndustry("food-products", "Food Products", "Food businesses manage short planning horizons, complex portfolios, changing input costs and varied customer economics.", ["Which products and customers create sustainable value?", "How can forecast, inventory and service performance improve?", "What pricing and promotion choices protect margin?", "How should routes to market evolve?"]),
      makeIndustry("beverages", "Beverages", "Beverage markets combine brand, channel, package, price and distribution choices with demanding operational execution.", ["Which channels and packs should receive investment?", "How can price, volume and mix decisions improve revenue?", "Where does distribution complexity erode margin?", "How should demand and capacity be balanced?"]),
      makeIndustry("personal-products", "Personal Products", "Fast-moving trends, portfolio breadth and diverse channels require clear customer and commercial priorities.", ["Which segments and propositions offer attractive growth?", "How can portfolio complexity be reduced?", "What pricing architecture supports value and volume?", "How can planning respond faster to market signals?"]),
      makeIndustry("household-products", "Household Products", "Household products businesses must align consumer value, retailer requirements, promotion choices and efficient supply.", ["Where is promotion spend creating value?", "Which SKUs and customers strengthen profitability?", "How should channel and pricing strategies differ?", "Where can supply and inventory performance improve?"]),
      makeIndustry("agricultural-food-other-products", "Agricultural Food & Other Products", "Agricultural and food value chains are shaped by seasonality, input volatility, fragmented supply and market access.", ["How can sourcing and supply risk be managed?", "Which markets and channels offer viable growth?", "Where can cost-to-serve and working capital improve?", "How should product and customer profitability guide decisions?"]),
    ],
  },
  {
    name: "Retail",
    description: "We help retailers address growth, customer, assortment, pricing, inventory, channel and operational performance questions.",
    industries: [
      makeIndustry("retailing", "Retailing", "Retail performance depends on connected choices across customers, assortment, pricing, channels, inventory and execution.", ["Which customers, categories and channels drive value?", "How should assortment, pricing and promotions work together?", "Where can inventory availability improve without adding working capital?", "What operating model supports scalable growth?"]),
    ],
  },
  {
    name: "Technology",
    description: "We support technology businesses across growth strategy, go-to-market, pricing, commercial performance and scalable operating models.",
    industries: [
      makeIndustry("it-software", "IT & Software", "Technology businesses need focused market choices, compelling propositions, disciplined pricing and operating models that scale.", ["Which markets and customer segments should be prioritized?", "How should propositions and routes to market evolve?", "What pricing and packaging improve revenue quality?", "Where can the commercial operating model become more scalable?"]),
    ],
  },
];

export const industries = industryGroups.flatMap((group) => group.industries);
export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);