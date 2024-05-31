import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const sheets = google.sheets('v4');

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID as string;
const RANGE_YES = 'Sheet1!A2:A';
const RANGE_NO = 'Sheet1!B2:B';

const fetchQuotes = async () => {
  try {
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_OAUTH_CLIENT_ID,
      process.env.GOOGLE_OAUTH_CLIENT_SECRET
    );

    // Set credentials using an OAuth 2.0 token
    // auth.setCredentials({
    //   refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
    // });

    const responseYes = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE_YES,
      auth,
    });

    const responseNo = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE_NO,
      auth,
    });

    const yesQuotes = responseYes.data.values?.flat() || [];
    const noQuotes = responseNo.data.values?.flat() || [];

    console.log('Fetched yesQuotes:', yesQuotes);
    console.log('Fetched noQuotes:', noQuotes);

    return { yesQuotes, noQuotes };
  } catch (error) {
    console.error('Error fetching quotes from Google Sheets:', error);
    return { yesQuotes: [], noQuotes: [] };
  }
};

export async function GET(req: NextRequest) {
  const quotes = await fetchQuotes();
  return NextResponse.json(quotes);
}
