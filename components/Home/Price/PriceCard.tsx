import React from "react";
type PriceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
};
const PriceCard = ({
  title,
  subtitle,
  description,
  price,
  features,
}: PriceCardProps) => {
  return (
    <div className="rounded-lg text-card-foreground shadow-sm h-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]">
      <div className="flex flex-col p-6 space-y-3">
        <h3 className="tracking-tight text-xl font-semibold">{title}</h3>

        <p className="text-sm text-indigo-400 font-medium">{subtitle}</p>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
        <p className="text-lg font-semibold text-indigo-400">
          Starts at ${price}
        </p>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4 text-indigo-400 mt-0.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-primary hover:border hover:border-cosmic-accent px-4 py-2 w-full mt-6 rounded-full h-12 font-semibold text-white bg-white/20 hover:bg-white/30"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
