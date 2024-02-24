import React, { useState } from "react";
import { Chevron } from "../assets/icons";

const Accordian = ({ title = "", items = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <dl className="list-none sm:w-fit border-b pb-1 sm:border-none border-[#E2D4F9]">
        <dt
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="py-2 cursor-pointer sm:cursor-default flex items-center text-primary-orange-600 font-bold text-18 leading-28"
        >
          {title + " "}
          <Chevron
            sx={{
              className: `ml-2 transition-transform duration-300 ease-in-out sm:hidden ${
                expanded ? "rotate-180" : "ease-out"
              }`,
            }}
            color="#FF6435"
            width={15}
            height={15}
          />
        </dt>

        <dd
          className={`overflow-hidden transition-max-height duration-300 ${
            expanded ? "max-h-80 ease-out" : "max-h-0 ease-in"
          } sm:flex sm:max-h-80 sm:transition-none flex-col gap-y-1 text-white text-[16px] sm:text-[18px] leading-[28px]`}
        >
          {items.map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer transition-all duration-250 ease-in-out hover:text-primary-orange-600"
              >
                {item}
              </li>
            );
          })}
        </dd>
      </dl>
    </>
  );
};

export default Accordian;
