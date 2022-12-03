import { findImage, findImages } from "..";

const main = async () => {
  const test1 = await findImage(
    "build/test/dots.png",
    "build/test/dot.png",
    "image/png",
    "image/png"
  );
  console.log(test1);
  const test2 = await findImages(
    "build/test/dots.png",
    "build/test/dot.png",
    "image/png",
    "image/png",
    2, // optional amount of max found
    1 // optional aspect ratio
  );
  console.log(test2);
};

main();
