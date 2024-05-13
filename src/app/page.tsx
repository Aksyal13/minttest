import { ConnectButton } from "@/app/thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { TransactionButton } from "thirdweb/react";
import { NFTclaim } from "../../components/NFTClaim";

export default function Home() {
  return (
    <>
      <div style={{ textAlign: "center"}}>
        <div className="center">
          <div className="center">
            <img
              width={200}
              height={200}
              src="./logo.png"
              className="icon"
              alt="logo" 
            />
          </div>
          <h1 className="h1">welcome to the MOMSTER</h1>
          <ConnectButton
            client={client}
            chain={chain}
          />
          <h1 style={{ margin: "10px" }}>Claim your MOMSTER</h1>
          <div style={{ margin: "10px" }}>
            <NFTclaim/>
          </div>
        </div>
      </div>
    </>
  );
}
