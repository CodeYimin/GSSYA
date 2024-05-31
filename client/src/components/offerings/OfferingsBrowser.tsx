import { Offering } from "@/types/Schedule";
import { ReactElement, useState } from "react";
import Filter from "./Filter";
import OfferingCard from "./OfferingCard";

interface OfferingsBrowserProps {
  offerings: Offering[];
}

export default function OfferingsBrowser({
  offerings,
}: OfferingsBrowserProps): ReactElement {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Tutoring",
    "Youth Exchange",
    "Multiculturalism",
    "Clubs",
    "Art4Earth",
    "Mental Health",
  ]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(["Upcoming"]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([
    "One time",
    "Sessional",
  ]);
  const filteredOfferings = offerings
    .filter(
      (offering) =>
        selectedCategories.includes(offering.category) &&
        selectedTimes.includes(
          new Date() > offering.startTime ? "Past" : "Upcoming"
        ) &&
        selectedTypes.includes(offering.type)
    )
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex-col w-full flex lg:flex-row lg:gap-20 lg:justify-between lg:p-10 lg:h-32 border-b border-zinc-300 items-center pb-10">
        <Filter
          label="CATEGORY"
          options={[
            "Tutoring",
            "Youth Exchange",
            "Multiculturalism",
            "Clubs",
            "Art4Earth",
            "Mental Health",
          ]}
          selectedOptions={selectedCategories}
          setSelectedOptions={setSelectedCategories}
        />
        <Filter
          label="TIME"
          options={[
            // "Past",
            "Upcoming",
          ]}
          selectedOptions={selectedTimes}
          setSelectedOptions={setSelectedTimes}
        />
        <Filter
          label="TYPE"
          options={["One time", "Sessional"]}
          selectedOptions={selectedTypes}
          setSelectedOptions={setSelectedTypes}
        />
      </div>

      {filteredOfferings.length === 0 ? (
        <p className="text-sm w-full text-center mt-6 text-zinc-600">
          Nothing found. Try including more filters.
        </p>
      ) : (
        <div
          className="grid pt-12 w-full gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
          }}
        >
          {filteredOfferings.map((offering, i) => (
            <OfferingCard key={i} offering={offering} />
          ))}
        </div>
      )}
    </div>
  );
}
