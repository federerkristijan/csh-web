import { google } from 'googleapis';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID as string;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET as string;
const REDIRECT_URI = 'http://localhost'; // or your redirect URI

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('Authorize this app by visiting this url:', url);

rl.question('Enter the code from that page here: ', (code) => {
  rl.close();
  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('Error retrieving access token', err);
      return;
    }
    oauth2Client.setCredentials(token!);
    console.log('Access Token:', token);
    fs.writeFileSync(path.join(__dirname, 'token.json'), JSON.stringify(token, null, 2));
  });
});
