'use client'

import { claimTo } from "thirdweb/extensions/erc721"
import { TransactionButton, useActiveAccount } from "thirdweb/react"
import { contract } from "../utils/contract"
import { error } from "console";

export const NFTclaim = () => {
    const account = useActiveAccount();
    return (
        <div>
            <div>
                <TransactionButton
                    transaction={() => (
                        claimTo({
                            contract: contract,
                            to: account?.address as string,
                            quantity: BigInt(1),

                        })
                    )}
                    onError={(error) => alert(error.message)}
                >Claim your MOMSTER</TransactionButton>
            </div>
        </div>
    )
};