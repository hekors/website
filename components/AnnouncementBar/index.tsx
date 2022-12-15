// Basic Imports
import React, { useEffect, useState } from "react";

// Types Comports
import { AnnouncementBarType } from "@/types/announcement-bar-type";

// Icon Imports
import { FaTimes } from "react-icons/fa";

const AnnouncementBar: React.FunctionComponent<AnnouncementBarType> = ({
  children,
  color = "bg-product-red",
  isClosable = true,
}) => {
  const [announcementBarVisibility, setAnnouncementBarVisibility] =
    useState<boolean>(isClosable);
  const [announcementBarColor, setAnnouncementBarColor] =
    useState<string>(color);
  const [announcementBarTextColor, setAnnouncementBarTextColor] =
    useState<string>("text-black");

  useEffect(() => {
    switch (color) {
      case "bg-product-red":
        setAnnouncementBarColor("bg-product-red");
        break;
      case "bg-product-purple-light":
        setAnnouncementBarColor("bg-product-purple-light");
        break;
      case "bg-product-purple-dark":
        setAnnouncementBarColor("bg-product-purple-dark");
        break;
      case "bg-product-yellow":
        setAnnouncementBarColor("bg-product-yellow");
        break;
      case "bg-product-pink":
        setAnnouncementBarColor("bg-product-pink");
        break;
      case "bg-white":
        setAnnouncementBarColor("bg-white");
        break;
      case "bg-product-blue":
        setAnnouncementBarColor("bg-product-blue");
        break;
      case "bg-product-brown":
        setAnnouncementBarColor("bg-product-brown");
        break;
    }
  }, [color]);

  useEffect(() => {
    if (
      [
        "bg-product-red",
        "bg-product-purple-light",
        "bg-product-purple-dark",
        "bg-product-brown",
        "bg-product-pink",
      ].includes(announcementBarColor)
    ) {
      setAnnouncementBarTextColor("text-white");
    }
  }, [announcementBarColor]);

  if (announcementBarVisibility) {
    return (
      <React.Fragment>
        <div
          className={`announcement-bar py-1.5 ${announcementBarColor} 
                ${announcementBarVisibility ? "block" : "invisible"}`}
        >
          <div className="announcement-bar-content-wrapper wrapped-view flex flex-row items-center justify-between">
            <div
              className={`announcement-bar-content-wrapper w-fit h-fit mx-auto ${announcementBarTextColor}`}
            >
              {children}
            </div>
            {announcementBarVisibility && (
              <button
                className={`announcement-bar-close-button-wrapper
                        w-fit h-fit flex flex-row items-center justify-center ${announcementBarTextColor}
                        bg-transparent hover:bg-black hover:bg-opacity-20 p-0.5 rounded-full text-xs`}
                onClick={() => setAnnouncementBarVisibility(false)}
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export default AnnouncementBar;
