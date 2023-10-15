const fs = require("fs");
const { Readable } = require("stream");
const { finished } = require("stream/promises");

[...Array(37).keys()].forEach(async (val) => {
  const stream = fs.createWriteStream(
    `audio/${String(val + 1).padStart(2, "0")}.mp3`
  );
  const res = await fetch(
    `https://www.mdnkids.com/BoPoMo/audio/${String(val + 1).padStart(
      2,
      "0"
    )}.mp3`
  );
  await finished(Readable.fromWeb(res.body).pipe(stream));
});
