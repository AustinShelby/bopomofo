"use client";
import { Selector } from "@/components/selector";
import { Symbol } from "@/components/symbol";
import { useState } from "react";

export type Phonetic = "BOPOMOFO" | "IPA" | "PINYIN";

export default function Home() {
  const [phonetic, setPhonetic] = useState<Phonetic>("BOPOMOFO");

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <main className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-2">
          <div className="flex justify-center pb-32">
            <div className="flex gap-1 sm:gap-2">
              <Selector
                name="Bopomofo"
                phonetic="BOPOMOFO"
                setPhonetic={setPhonetic}
                currentSelected={phonetic}
                position="FIRST"
              />
              <Selector
                name="IPA"
                phonetic="IPA"
                setPhonetic={setPhonetic}
                currentSelected={phonetic}
                position={undefined}
              />
              <Selector
                name="Pinyin"
                phonetic="PINYIN"
                setPhonetic={setPhonetic}
                currentSelected={phonetic}
                position="LAST"
              />
            </div>
          </div>
          <div className="grid grid-cols-10 gap-1 sm:gap-2">
            <Symbol
              bopomofo="ㄅ"
              IPA="p"
              pynyin="b"
              audioUrl="/audio/01.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄉ"
              IPA="t"
              pynyin="d"
              audioUrl="/audio/05.mp3"
              phonetic={phonetic}
            />
            <div></div>
            <div></div>
            <Symbol
              bopomofo="ㄓ"
              IPA="ʈʂ"
              pynyin="zhi, zh-"
              audioUrl="/audio/15.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄦ"
              IPA="aɚ"
              pynyin="er"
              audioUrl="/audio/34.mp3"
              phonetic={phonetic}
            />
            <div></div>
            <Symbol
              bopomofo="ㄚ"
              IPA="a"
              pynyin="a"
              audioUrl="/audio/22.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄞ"
              IPA="ai"
              pynyin="ai"
              audioUrl="/audio/26.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄢ"
              IPA="p"
              pynyin="b"
              audioUrl="/audio/30.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄆ"
              IPA="pʰ"
              pynyin="p"
              audioUrl="/audio/02.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄊ"
              IPA="tʰ"
              pynyin="t"
              audioUrl="/audio/06.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄍ"
              IPA="k"
              pynyin="g"
              audioUrl="/audio/09.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄐ"
              IPA="tɕ"
              pynyin="j"
              audioUrl="/audio/12.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄔ"
              IPA="ʈʂʰ"
              pynyin="chi, ch-"
              audioUrl="/audio/16.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄗ"
              IPA="ts"
              pynyin="zi, z-"
              audioUrl="/audio/19.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄧ"
              IPA="i"
              pynyin="yi, -i"
              audioUrl="/audio/35.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄛ"
              IPA="o"
              pynyin="o"
              audioUrl="/audio/23.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄟ"
              IPA="ei"
              pynyin="ei"
              audioUrl="/audio/27.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄣ"
              IPA="ən"
              pynyin="en"
              audioUrl="/audio/31.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄇ"
              IPA="m"
              pynyin="m"
              audioUrl="/audio/03.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄋ"
              IPA="n"
              pynyin="n"
              audioUrl="/audio/07.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄎ"
              IPA="kʰ"
              pynyin="k"
              audioUrl="/audio/10.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄑ"
              IPA="tɕʰ"
              pynyin="q"
              audioUrl="/audio/13.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄕ"
              IPA="ʂ"
              pynyin="shi, sh-"
              audioUrl="/audio/17.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄘ"
              IPA="tsʰ"
              pynyin="ci, c-"
              audioUrl="/audio/20.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄨ"
              IPA="u"
              pynyin="w, wu, -u"
              audioUrl="/audio/36.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄜ"
              IPA="ɤ"
              pynyin="e"
              audioUrl="/audio/24.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄠ"
              IPA="au"
              pynyin="ao"
              audioUrl="/audio/28.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄤ"
              IPA="aŋ"
              pynyin="ang"
              audioUrl="/audio/32.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄈ"
              IPA="f"
              pynyin="f"
              audioUrl="/audio/04.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄌ"
              IPA="l"
              pynyin="l"
              audioUrl="/audio/08.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄏ"
              IPA="x"
              pynyin="h"
              audioUrl="/audio/11.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄒ"
              IPA="ɕ"
              pynyin="x"
              audioUrl="/audio/14.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄖ"
              IPA="ɻ~ʐ"
              pynyin="ri, r-"
              audioUrl="/audio/18.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄙ"
              IPA="s"
              pynyin="si, s-"
              audioUrl="/audio/21.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄩ"
              IPA="y"
              pynyin="yu, -ü"
              audioUrl="/audio/37.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄝ"
              IPA="e"
              pynyin="-ie/ê"
              audioUrl="/audio/25.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄡ"
              IPA="ou"
              pynyin="ou"
              audioUrl="/audio/29.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄥ"
              IPA="əŋ"
              pynyin="eng"
              audioUrl="/audio/33.mp3"
              phonetic={phonetic}
            />
          </div>
        </div>
      </main>
      <footer className="py-4">
        <p className="text-center text-sm text-amber-950">
          Made by{" "}
          <a href="https://www.austinshelby.com" target="_blank">
            Austin Shelby
          </a>
        </p>
      </footer>
    </div>
  );
}
