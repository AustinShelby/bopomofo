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
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/01.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄉ"
              IPA="t"
              pynyin="d"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/05.mp3"
              phonetic={phonetic}
            />
            <div></div>
            <div></div>
            <Symbol
              bopomofo="ㄓ"
              IPA="ʈʂ"
              pynyin="zhi, zh-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/15.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄦ"
              IPA="aɚ"
              pynyin="er"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/34.mp3"
              phonetic={phonetic}
            />
            <div></div>
            <Symbol
              bopomofo="ㄚ"
              IPA="a"
              pynyin="a"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/22.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄞ"
              IPA="ai"
              pynyin="ai"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/26.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄢ"
              IPA="p"
              pynyin="b"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/30.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄆ"
              IPA="pʰ"
              pynyin="p"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/02.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄊ"
              IPA="tʰ"
              pynyin="t"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/06.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄍ"
              IPA="k"
              pynyin="g"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/09.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄐ"
              IPA="tɕ"
              pynyin="j"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/12.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄔ"
              IPA="ʈʂʰ"
              pynyin="chi, ch-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/16.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄗ"
              IPA="ts"
              pynyin="zi, z-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/19.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄧ"
              IPA="i"
              pynyin="yi, -i"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/35.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄛ"
              IPA="o"
              pynyin="o"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/23.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄟ"
              IPA="ei"
              pynyin="ei"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/27.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄣ"
              IPA="ən"
              pynyin="en"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/31.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄇ"
              IPA="m"
              pynyin="m"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/03.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄋ"
              IPA="n"
              pynyin="n"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/07.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄎ"
              IPA="kʰ"
              pynyin="k"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/10.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄑ"
              IPA="tɕʰ"
              pynyin="q"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/13.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄕ"
              IPA="ʂ"
              pynyin="shi, sh-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/17.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄘ"
              IPA="tsʰ"
              pynyin="ci, c-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/20.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄨ"
              IPA="u"
              pynyin="w, wu, -u"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/36.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄜ"
              IPA="ɤ"
              pynyin="e"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/24.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄠ"
              IPA="au"
              pynyin="ao"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/28.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄤ"
              IPA="aŋ"
              pynyin="ang"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/32.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄈ"
              IPA="f"
              pynyin="f"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/04.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄌ"
              IPA="l"
              pynyin="l"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/08.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄏ"
              IPA="x"
              pynyin="h"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/11.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄒ"
              IPA="ɕ"
              pynyin="x"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/14.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄖ"
              IPA="ɻ~ʐ"
              pynyin="ri, r-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/18.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄙ"
              IPA="s"
              pynyin="si, s-"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/21.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄩ"
              IPA="y"
              pynyin="yu, -ü"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/37.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄝ"
              IPA="e"
              pynyin="-ie/ê"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/25.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄡ"
              IPA="ou"
              pynyin="ou"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/29.mp3"
              phonetic={phonetic}
            />
            <Symbol
              bopomofo="ㄥ"
              IPA="əŋ"
              pynyin="eng"
              audioUrl="https://www.mdnkids.com/BoPoMo/audio/33.mp3"
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
