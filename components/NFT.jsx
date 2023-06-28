import styles from "../styles/Nft.module.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

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

  //TODO add pagination
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
    </div>
  );
}
