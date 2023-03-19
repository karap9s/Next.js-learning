import { socials } from "./socials/socials";

export default function handler(req, res) {
  res.status(200).json(socials)
}
