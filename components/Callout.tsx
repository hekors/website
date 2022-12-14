// Basic Imports
import React from "react";
import Image from "next/image";

// Types Imports
import { CalloutType } from "@/types/ui-pattern-types/callout-type";

const Callout: React.FunctionComponent<CalloutType> = (
  { children }: CalloutType,
  props: any
) => {
  return (
    <React.Fragment>
      <span
        className="callout text-product-gradient flex flex-row items-center justify-center gap-1 w-fit h-fit"
        {...props}
      >
        <span className="callout-icon-wrapper">
          <Image
            src="/callout-icon.svg"
            alt="callout"
            width="24"
            height="24"
            priority
          />
        </span>
        <span className="callout-content-wrapper font-semibold">
          {children || "DemoCallout"}
        </span>
      </span>
    </React.Fragment>
  );
};

export default Callout;
