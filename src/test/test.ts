import { findImage } from "..";

const main = async () => {
  const test = await findImage(
    "build/test/inner.png",
    "build/test/outer.png",
    "image/png",
    "image/png"
  );
  console.log(test);
};

main();
