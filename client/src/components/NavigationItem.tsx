import { WebsiteDataNavigationBarItem } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";

function NavigationItem({
  label,
  link,
}: WebsiteDataNavigationBarItem): ReactElement {
  return (
    <a href={link} className="px-6 font-regular text-xl hover:opacity-50">
      {label}
    </a>
  );
}

export default NavigationItem;
