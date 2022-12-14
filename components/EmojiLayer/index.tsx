// Basic Imports
import React from "react";
import { useRef } from "react";
import Image from "next/image";

// Components Imports
import EmojiLayerData from "./emoji-list-data.json";

// Types Imports
import { EmojiType } from "@/types/emoji-type";

const EmojiLayer: React.FunctionComponent<EmojiType> = () => {
  const emojiLayerRef = useRef<Array<EmojiType>>(EmojiLayerData);

  return (
    <React.Fragment>
      <div className="emoji-layer flex flex-row items-center justify-between select-none">
        {emojiLayerRef.current?.map((emoji: EmojiType, emojiIndex: number) => (
          <Image
            src={`/emojis/${emoji?.imageName}`}
            width="120"
            height="120"
            alt={emoji?.name}
            key={emojiIndex}
            className="hover:scale-105 transition-all"
            priority
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default EmojiLayer;
