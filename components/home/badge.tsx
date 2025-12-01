export const Badge = ({ text }: { text: string }) => {
  return (
    <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal/80">
      {text}
    </span>
  );
};
