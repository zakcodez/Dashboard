import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { WeatherData } from "../../types";

async function handler(req: NextApiRequest, res: NextApiResponse<WeatherData>) {
	const endpoint = process.env.WEATHER_API_HOST;
	const { zip } = req.query;
	const countryCode = req.query["country-code"];
	if (!zip || !countryCode) return res.status(400);
	const url = `${endpoint}/data/2.5/weather?zip=${zip},${countryCode}&appid=${process.env.API_KEY}`;
	const { data: apiData, status: apiStatus } = await axios<WeatherData>(url);
	if (apiStatus === 200) return res.status(200).json(apiData);
	res.status(500);
}

export default handler;