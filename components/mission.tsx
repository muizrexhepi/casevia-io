import { TEXT } from "@/lib/styles";

export default function Mission() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto text-center">
        <h2
          className={`${TEXT.sectionTitle} max-w-6xl mx-auto italic text-gradient leading-tight`}
        >
          We weave progress into digital reality through technical mastery. We
          craft software that transcends the ordinary—driven by purpose, fueled
          by innovation, and designed to scale.
        </h2>
      </div>
    </section>
  );
}
