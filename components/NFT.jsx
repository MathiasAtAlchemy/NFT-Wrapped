import styles from "../styles/Nft.module.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Video } from "./Video";

export default function Nft({}) {
  const [nfts, setNfts] = useState();
  const [walletAddress, setWalletAddress] = useState("");
  const [fetchMethod, setFetchMethod] = useState("wallet");
  const [pageKey, setPageKey] = useState();
  const [spamFilter, setSpamFilter] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const { address, isConnected, isDisconnected } = useAccount();
  const [chain, setChain] = useState(process.env.NEXT_PUBLIC_ALCHEMY_NETWORK);
  const [top5NFT, setTop5NFT] = useState();

  const fetchNFTs = async (pagekey) => {
    if (!pageKey) setIsloading(true);
    const endpoint = "/api/getNftsForOwner";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          address: address ? address : walletAddress,
          pageKey: pagekey ? pagekey : null,
          chain: chain,
          excludeFilter: spamFilter,
        }),
      }).then((res) => res.json());
      if (nfts?.length && pageKey) {
        setNfts((prevState) => [...prevState, ...res.nfts]);
      } else {
        setNfts();
        setNfts(res.nfts);
      }
      if (res.pageKey) {
        setPageKey(res.pageKey);
      } else {
        setPageKey();
      }

      setIsloading(false);
      return res.nfts;
    } catch (e) {
      console.log(e);
    }
  };

  const getPrices = async (nftArray) => {
    const endpoint = "/api/getPricesForNFTs";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          nftArray,
        }),
      }).then((res) => res.json());
      setTop5NFT(res.top5);
      console.log("TOP5: ", res.top5);
      setNfts(res.nfts);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    setWalletAddress(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const alchemyResponse = await fetchNFTs(pageKey);
    await getPrices(alchemyResponse);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input type="text" name="walletAddress" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {isLoading ? (
        <div>No NFTs</div>
      ) : (
        <div className={styles.nft_text}>
          {nfts?.length ? (
            nfts.map((nft, index) => {
              return (
                <div key={index}>
                  {nft.title} ---------- ${nft.price}
                </div>
              );
            })
          ) : (
            <div>isLoading Value {`${isLoading}`}</div>
          )}
        </div>
      )}

      {pageKey && nfts?.length && (
        <div>
          <a
            className={styles.button_black}
            onClick={() => {
              fetchNFTs(pageKey);
            }}
          >
            Load more
          </a>
          <a
            className={styles.button_black}
            onClick={() => {
              getPrices(nfts);
            }}
          >
            Get Prices
          </a>
        </div>
      )}

      {top5NFT?.length && (
        <Video
          media={[
            `${top5NFT[1]?.media}`,
            `${top5NFT[2]?.media}`,
            `${top5NFT[3]?.media}`,
            `${top5NFT[4]?.media}`,
          ]}
          ranking={[
            `${top5NFT[0]?.title}`,
            `${top5NFT[1]?.title}`,
            `${top5NFT[2]?.title}`,
            `${top5NFT[3]?.title}`,
            `${top5NFT[4]?.title}`,
          ]}
          price={[
            `$${top5NFT[0]?.price}`,
            `$${top5NFT[1]?.price}`,
            `$${top5NFT[2]?.price}`,
            `$${top5NFT[3]?.price}`,
            `$${top5NFT[4]?.price}`,
          ]}
          topNFT={top5NFT[0]}
        ></Video>
      )}
    </div>
  );
}
// contract: contract.address,
//         symbol: contract.symbol,
//         collectionName: contract.openSea?.collectionName,
//         media: media[0]?.gateway
//           ? media[0]?.gateway
//           : "https://via.placeholder.com/500",
//         verified: contract.openSea?.safelistRequestStatus,
//         tokenType,
//         tokenId,
//         title,
//         description,
//         format: media[0]?.format ? media[0]?.format : "png",
