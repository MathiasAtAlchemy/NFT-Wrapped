import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import Nft from "../components/NFT";
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Nft></Nft>
        {/* <InstructionsComponent></InstructionsComponent> */}
      </main>
    </div>
  );
}
