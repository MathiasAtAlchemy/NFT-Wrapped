import { RESERVOIR_API_KEY } from "dotenv";
export default async function handler(req, res) {
  const { nftArray } = JSON.parse(req.body);
  const sdk = require("api")("@reservoirprotocol/v3.0#5fxm01pliufqnan");
  sdk.auth(`${RESERVOIR_API_KEY}`);
  let queryArray = [];
  let currentQuery = [];
  //create array of arrays of 20 nfts since that is the max for the query
  for (let i = 0; i < nftArray.length; i++) {
    currentQuery.push(`${nftArray[i].contract}%3A${nftArray[i].tokenId}`);
    if (currentQuery.length === 20 || i === nftArray.length - 1) {
      queryArray.push(currentQuery);
      currentQuery = [];
    }
  }

  //

  try {
    //create price cache for nfts
    const priceCache = {};

    for (let query of queryArray) {
      let prices = await sdk
        .getSalesV5({
          tokens: query,
          limit: "1000",
          accept: "*/*",
        })
        .then((response) => response.data)
        .catch((err) => console.error(err));

      //cache prices from response
      for (let nft of prices.sales) {
        priceCache[`${nft.token.contract}:${nft.token.tokenId}`] =
          nft.price.amount.usd.toFixed(2);
      }
    }
    //append price to nft objects
    for (let nft of nftArray) {
      nft.price = priceCache[`${nft.contract}:${nft.tokenId}`];
    }

    //sort nfts by price
    nftArray.sort((a, b) => {
      return (b.price || 0) - (a.price || 0);
    });

    //return top 5 and all nfts
    res.status(200).json({ top5: nftArray.slice(0, 5), nfts: nftArray });
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "something went wrong, check the log in your terminal",
    });
  }
}
