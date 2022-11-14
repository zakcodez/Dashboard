import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { WeatherData, WeatherError } from "../../types";

async function handler(req: NextApiRequest, res: NextApiResponse<WeatherData | WeatherError>) {
	const endpoint = process.env.WEATHER_API_HOST;
	const { latitude, longitude } = req.query;
	const url = `${endpoint}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;
	const { data: apiData, status: apiStatus } = await axios<WeatherData>(url);
	if (apiStatus === 200) return res.status(200).json(apiData);
	res.status(500).json({ message: "Something went wrong. Please try again later" });
}

export default handler;