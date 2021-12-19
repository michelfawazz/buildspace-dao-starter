import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xd6213e40dF1F305b810EA73BcA5066cb2E257F35",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Lebanese Flag",
        description: "This NFT will give you access to LebanonDAO!",
        image: readFileSync("scripts/assets/lebanon.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()