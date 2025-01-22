# spotify-status-api <img src="public/spotify_logo.png" alt="Spotify Logo" width="25"/>




Lightweight API to display recently played tracks from Spotify in your website! . Easily integrable as a code snippet for web applications. Simple setup with no complex configurations.  

<img src="public/image.png" alt="screenshot" width="600"/>



## Authorization
This API uses OAuth 2.0 for authentication. To run this, you will need the following Spotify credentials:

- Client ID
- Client Secret
- Refresh Token (You can use Postman to complete the OAuth 2.0 flow with Spotify and obtain a refresh token.)

### Getting the Refresh Token
To get the refresh token, follow these steps:
- Go to Spotify's Developer Dashboard and create a new application.
- Use Postman or a similar tool to authenticate via OAuth 2.0 with Spotify, and get the access token and refresh token.
- You can follow this Postman OAuth 2.0 tutorial ( https://www.youtube.com/watch?v=N34BM2CU_3g ) for a step-by-step guide on how to complete the OAuth 2.0 flow and retrieve the tokens.

## How to Run

**STEP 1 :clone this repository**
```bash
git clone https://github.com/hemendran-py/spotify-status-api.git
```
```bash
cd spotify-status-api.git
```
**STEP 2: install dependencies**
```bash
npm install
```
**STEP 3: Set Up Environment Variables**  
create a `.env` file in the root directory of the project with the following variables:
```
CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret
REFRESH_TOKEN=your_spotify_refresh_token
```
**STEP 4: Run the Program**
```
npm run dev
```
## How to Integrate this into Your Website  🚀

**STEP 1: Add Credentials**    
 
Add your own Spotify Client ID, Client Secret, and Refresh Token into a `.env` file in your project.  

**STEP 2: Copy the API Folder**  

If you are using Next.js 13 (or a similar framework that uses a similar folder structure), copy the `api` folder from this repository into the `app` folder of your Next.js project. This folder contains the backend code for interacting with the Spotify API.    

**STEP 3: Integrate API Functions into Your Website**  

+ add authorization credentials and refresh token("how to get" mentioned in the beginning) in the `.env` file
+ Create a `recent-track.js` file in `components` folder of your project.  
+ copy content from `page.js` from this repository and paste it in your `recent-track.js` file.
+ now import the component in the page where you want the recently played tab to be in.
  ```
  import spotify from '../components/recent-track.js';
  ```
+ and use the component wherever you want in that page!! </br>
  example:</br>
  <img src="public/snippet.png" alt="code snippet" width="600"/>
  

This will allow you to use the backend API to fetch the currently playing or recently played songs from a Spotify account and display them on your site.
  
## Contact

Let me know if you have any doubts or queries regarding this project. You can reach me at [hemendrankumar@gmail.com](hemendrankumar@gmail.com).











