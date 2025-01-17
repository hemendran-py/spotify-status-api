import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

async function refreshAccessToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const formData = new URLSearchParams();
  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', refreshToken);

  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });

  const data = await response.json();
  return data.access_token;
}

async function getRecentlyPlayedTrack(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played';

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data.items.length ? data.items[0].track : null;
}

export async function GET() {
  try {
    const accessToken = await refreshAccessToken();
    const track = await getRecentlyPlayedTrack(accessToken);

    if (track) {
      return NextResponse.json({
        name: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        image: track.album.images[0]?.url || '',
        url: track.external_urls.spotify,
      });
    } else {
      return NextResponse.json({ message: 'No recently played track found.' });
    }
  } catch (error) {
    console.error('Error fetching recently played track:', error);
    return NextResponse.json({ error: 'Failed to fetch recently played track.' }, { status: 500 });
  }
}
