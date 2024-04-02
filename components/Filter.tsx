import PalCircle from "./PalCircle";
import { useData } from "./DataProvider";
import TopBar from "./TopBar";
import Pagination from "./Pagination";
import { useState } from "react";
import ElementsFilter from "./Filter/ElementsFilter";

const filters = [
  <ElementsFilter key="elements-filter" />,
  <div key="placeholder-1" />,
  <div key="placeholder-2" />,
];

const names = ["Element", "Work suitability", "Passive skills"];

export default function Filter() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { base } = useData();
  return (
    <div
      style={{
        width: 384,
        margin: "0",
        padding: "0 3px",
        backgroundColor: "rgba(22, 25, 24, 0.95)",
        boxShadow: "0px 0px 6px 6px rgba(22, 25, 24, 0.95)",
      }}
      className="flex flex-col items-center"
    >
      <TopBar title={`Filter ${names[activeIndex - 1]}`} />
      <Pagination
        size={3}
        activeIndex={activeIndex}
        onCircleClick={setActiveIndex}
        onLeft={() => setActiveIndex(activeIndex - 1)}
        onRight={() => setActiveIndex(activeIndex + 1)}
        leftKey="A"
        rightKey="D"
      />
      {filters[activeIndex - 1]}
    </div>
  );
}
