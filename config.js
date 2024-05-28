/* eslint-disable no-undef */
import { config } from 'dotenv';
config();
export const clientId = process.env.CLIENT_ID;
export const apiToken = process.env.API_TOKEN;
export const clientSecret = process.env.CLIENT_SECRET;