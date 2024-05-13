'use client'

import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";
import { chain } from "@/app/chain";

const Header: React.FC = () => {
    return <div>
        <ConnectButton
        client={client}
        chain={chain}
      />
    </div>;
}

export default Header;