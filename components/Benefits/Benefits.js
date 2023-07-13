import { BENEFIT_TILE_DATA } from "@/utils/constants";
import { BenefitTile } from "./BenefitTile";
import { ScheduleModal } from "./ScheduleModal";

export const Benefits = () => {
  return (
    <section className="grid grid-cols-2 px-40">
      <div className="flex flex-col mt-20">
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
      <div className="ml-20">
        <ScheduleModal />
      </div>
    </section>
  );
};
