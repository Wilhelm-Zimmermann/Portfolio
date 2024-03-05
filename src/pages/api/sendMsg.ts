import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if(req.method === "POST") {
            return res.status(200).json("HAMMISTER");
        } else {
            return res.status(405).json("NÂAAAAAAAAAAAAAAAAAAAOOOOOOOOOOOOOOOOOOOO");
        }
    } catch (err) {
        return res.status(500).json({ error: "Não: " });
    }
}