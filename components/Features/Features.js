import { FeatureCard } from "./FeatureCard";
import { FEATURES_CARD_DATA } from "@/utils/constants";

export const Features = () => {
  return (
    <section className="grid grid-cols-3 gap-5 mt-32 px-40">
      {FEATURES_CARD_DATA.map((feature, index) => {
        return <FeatureCard key={index} {...feature} />;
      })}
    </section>
  );
};
