import { BENEFIT_TILE_DATA } from "@/utils/constants";
import { BenefitTile } from "./BenefitTile";
import { ScheduleModal } from "./ScheduleModal";

export const Benefits = () => {
  return (
    <section className="md:grid md:grid-cols-2 px-5 lg:px-40 lg:h-[560px] mb-20">
      <div className="lg:ml-20 order-last">
        <ScheduleModal />
      </div>
      <div className="flex flex-col lg:items-start items-center justify-center gap-10">
        {BENEFIT_TILE_DATA.map((data, index) => {
          return (
            <BenefitTile
              key={index}
              imgSrc={data.imgSrc}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </div>
    </section>
  );
};
