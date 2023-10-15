"use client";
import { Phonetic } from "@/app/page";
import type { FC } from "react";

type Props = {
  bopomofo: string;
  IPA: string;
  pynyin: string;
  audioUrl: string;
  phonetic: Phonetic;
};

export const Symbol: FC<Props> = ({
  bopomofo,
  IPA,
  pynyin,
  audioUrl,
  phonetic,
}) => {
  return (
    <button
      onClick={() => new Audio(audioUrl).play()}
      className="bg-amber-200 text-amber-950 rounded sm:rounded-lg py-2 sm:min-h-[5rem] text-sm sm:text-2xl border sm:border-2 border-amber-900 btn-sm sm:btn hover:bg-amber-300 active:bg-amber-400"
    >
      {phonetic === "BOPOMOFO" ? bopomofo : phonetic === "IPA" ? IPA : pynyin}
    </button>
  );
};
