// Basic Imports
import React from "react";
import { useRef } from "react";
import Image from "next/image";

// Components Imports
import EmojiLayerData from "./emoji-list-data.json";
import { Tooltip } from 'react-tooltip'

// Types Imports
import { EmojiType } from "@/types/emoji-type";

const EmojiLayer: React.FunctionComponent<EmojiType> = () => {
  const emojiLayerRef = useRef<Array<EmojiType>>(EmojiLayerData);

  return (
    <React.Fragment>
      <div className="emoji-layer flex flex-row items-center justify-between select-none">
        {emojiLayerRef.current?.map((emoji: EmojiType, emojiIndex: number) => (
            <React.Fragment key={emojiIndex}>
              <Image
                src={`/emojis/${emoji?.imageName}`}
                width="120"
                height="120"
                key={emojiIndex}
                alt={emoji?.name}
                className={`hover:scale-105 transition-all ${emoji?.isHighlighted && "animate-bounce transition-transform"}`}
                id={`highlitable-tooltip__${emoji?.name}`}
                data-tooltip-content="🎒 Build Program is now live"
                priority
              />
              {emoji?.isHighlighted && <Tooltip anchorId={`hightable-tooltip__${emoji?.name}`} />}
            </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default EmojiLayer;
