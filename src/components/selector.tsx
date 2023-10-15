"use client";
import { Phonetic } from "@/app/page";
import type { FC } from "react";

type Props = {
  phonetic: Phonetic;
  name: string;
  setPhonetic: (phonetic: Phonetic) => void;
  currentSelected: Phonetic;
  position: "FIRST" | "LAST" | undefined;
};

export const Selector: FC<Props> = ({
  phonetic,
  name,
  setPhonetic,
  currentSelected,
  position,
}) => {
  const isSelected = currentSelected === phonetic;
  return (
    <button
      onClick={() => setPhonetic(phonetic)}
      className={`px-6 py-2 border sm:border-2 border-amber-900 text-sm sm:text-2xl  text-amber-950 btn-sm sm:btn rounded sm:rounded-lg ${
        isSelected ? "bg-amber-400" : "bg-amber-200 hover:bg-amber-300"
      }`}
    >
      {name}
    </button>
  );
};
