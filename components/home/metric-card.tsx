import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 md:px-8 lg:px-12 py-4 first:pl-0 last:pr-0 pl-0">
      {/* Icon - subtle and small */}
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-terracotta/8 flex items-center justify-center mb-1">
          <Icon className="w-5 h-5 text-terracotta/70" />
        </div>
      )}

      {/* Value */}
      <div className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-charcoal tracking-tight leading-none">
        {value}
      </div>

      {/* Label */}
      <div className="font-sans font-semibold text-charcoal text-sm uppercase tracking-wide">
        {label}
      </div>

      {/* Description */}
      <p className="font-sans text-charcoal/55 text-sm leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
};

export default MetricCard;
