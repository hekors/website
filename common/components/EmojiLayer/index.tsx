// Basic Imports
import { useRef } from "react";
import Image from "next/image";

// Components Imports
import EmojiLayerData from "./emoji-list-data.json";

// Types Imports
import { EmojiType } from "@/types/emoji-type";

export default function EmojiLayer() {
  const emojiLayerRef = useRef(EmojiLayerData);

  return (
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
  );
}
