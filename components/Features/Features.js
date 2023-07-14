import { FeatureCard } from "./FeatureCard";
import { FEATURES_CARD_DATA } from "@/utils/constants";

export const Features = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-20 px-5 lg:px-40">
      {FEATURES_CARD_DATA.map((feature, index) => {
        return <FeatureCard key={index} {...feature} />;
      })}
    </section>
  );
};
