import type { NextApiRequest, NextApiResponse } from "next";

export default function tuti(req: NextApiRequest, res:NextApiResponse){
    res.status(200).send("auth")
}

