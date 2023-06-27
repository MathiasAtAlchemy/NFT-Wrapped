import { RESERVOIR_API_KEY } from "dotenv";
export default async function handler(req, res) {
  const { nftArray } = JSON.parse(req.body);
  const sdk = require("api")("@reservoirprotocol/v3.0#5fxm01pliufqnan");
  sdk.auth(`${RESERVOIR_API_KEY}`);
  let queryArray = [];
  for (let nft of nftArray) {
    queryArray.push(`${nft.contract}%3A${nft.tokenId}`);
  }

  try {
    //response.data returns sales and continuation index if necessary
    //TODO: Currently has limit of 20, need to paginate
    const prices = await sdk
      .getSalesV5({
        tokens: queryArray,
        limit: "1000",
        accept: "*/*",
      })
      .then((response) => response.data)
      .catch((err) => console.error(err));

    //cache prices from response
    let priceCache = {};
    for (let nft of prices.sales) {
      priceCache[`${nft.token.contract}:${nft.token.tokenId}`] =
        nft.price.amount.usd.toFixed(2);
    }

    //append price to nft objects
    for (let nft of nftArray) {
      nft.price = priceCache[`${nft.contract}:${nft.tokenId}`];
    }

    //sort nfts by price
    nftArray.sort((a, b) => {
      return (b.price || 0) - (a.price || 0);
    });

    res.status(200).json({ top5: nftArray.slice(0, 5), nfts: nftArray });
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "something went wrong, check the log in your terminal",
    });
  }
}
