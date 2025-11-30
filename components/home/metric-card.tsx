import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-3 px-4 md:px-8 py-4 pl-0  first:pl-0 last:pr-0">
      <h3 className="font-serif text-5xl md:text-6xl text-charcoal tracking-tight">
        {value}
      </h3>
      <div className="flex flex-col gap-1">
        <span className="font-sans font-semibold text-charcoal text-sm uppercase tracking-wide">
          {label}
        </span>
        <p className="font-sans text-charcoal/60 text-sm leading-relaxed max-w-[240px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;
