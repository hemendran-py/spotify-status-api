# spotify-status-api
Lightweight API to display recently played tracks from Spotify. Easily integrable as a code snippet for web applications. Simple setup with no complex configurations.

## Authorization
This API uses OAuth 2.0 for authentication. To run this, you will need the following Spotify credentials:

- Client ID
- Client Secret
- Refresh Token (You can use Postman to complete the OAuth 2.0 flow with Spotify and obtain a refresh token.)

###Getting the Refresh Token
To get the refresh token, follow these steps:
- Go to Spotify's Developer Dashboard and create a new application.
- Use Postman or a similar tool to authenticate via OAuth 2.0 with Spotify, and get the access token and refresh token.
- You can follow this Postman OAuth 2.0 tutorial ( https://www.youtube.com/watch?v=N34BM2CU_3g ) for a step-by-step guide on how to complete the OAuth 2.0 flow and retrieve the tokens.

## How to Run
```bash
git clone https://github.com/hemendran-py/spotify-status-api.git
```


