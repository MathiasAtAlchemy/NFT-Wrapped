// Importing necessary modules and components
import styles from "../styles/Nft.module.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

/*


*/

// Defining the main component of the NFT gallery
export default function Nft({}) {
  // Defining states for the component
  const [nfts, setNfts] = useState();
  const [walletAddress, setWalletAddress] = useState("");
  const [fetchMethod, setFetchMethod] = useState("wallet");
  const [pageKey, setPageKey] = useState();
  const [spamFilter, setSpamFilter] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const { address, isConnected, isDisconnected } = useAccount();
  const [chain, setChain] = useState(process.env.NEXT_PUBLIC_ALCHEMY_NETWORK);
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
        console.log("res: ", res);
        setNfts(res.nfts);
      }
      if (res.pageKey) {
        setPageKey(res.pageKey);
        //Is this recursively good idea?
        // fetchNFTs(pageKey);
      } else {
        setPageKey();
      }
    } catch (e) {
      console.log(e);
    }

    setIsloading(false);
  };
  function handleChange(e) {
    setWalletAddress(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchNFTs(pageKey);
  }
  useEffect(() => {
    console.log(walletAddress);
  }, [walletAddress]);

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
        <div>
          {nfts?.length ? (
            nfts.map((nft, index) => {
              return <div key={index}>{nft.title}</div>;
            })
          ) : (
            <div>isLoading Value {`${isLoading}`}</div>
          )}
        </div>
      )}
    </div>
  );
}
