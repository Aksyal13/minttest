import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract,resolveMethod } from "thirdweb";

const ERC721ContracAddress = "0x65e556a89F54CCB2926343645F4fAe98cE48F8d7";

export const contract = getContract({
    client: client,
    chain: chain,
    address: ERC721ContracAddress,
})
