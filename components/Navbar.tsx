'use client'

import { ConnectButton } from "thirdweb/react";
import Link from "next/link";
import { client } from "@/app/client";
import { chain } from "@/app/chain";

export default function Navbar() {
    return (
        <div className="center">
            <div className="center">
                <Link href="/">
                    <p>NFT collection</p>
                </Link>
                <div>

                </div>
                <ConnectButton
                 client={client}
                 chain={chain} />
            </div>
        </div>
    )
}
