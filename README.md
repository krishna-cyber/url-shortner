<!-- @format -->

# url-shortner

Ths is a simple url shortner using Express and MongoDB.

## Installation

1. Clone the repo
   ```sh
   git clone ...
   ```
2. Install NPM packages

   ```sh
   pnpm install
   ```

   <center>or</center>

   ```sh
   npm install
   ```

3. Create a .env file and add the following
   ```sh
   PORT=5000
   MONGO_URI=<your mongo uri>
   ```

## Usage

1. Run the server

   ```sh
   pnpm run dev
   ```

   <center>or</center>

   ```sh
   npm run dev
   ```

   2. Register a new url to be shortened

   ```sh
   POST http://localhost:5000/shorten
   ```

    <center>and add the following in the body `JSON`</center>
    
   ```json
   {
       "redirectURL": "https://nodejs.org/en"
   }
   ```
   3. Now you can register or shorten any url you want and it will be saved in the database.

   4. To redirect to the original url, use the shortened url as follows

   ```sh
   GET http://localhost:5000/<shortened url>
   ```

   example: http://localhost:5000/djfdiisjfd

   `where `

   - `djfdiisjfd` is the shortened url
   - http://localhost:5000/ is the base url
   - the combination of both is the original url
     http://localhost:5000/djfdiisjfd

   5. To get all the urls registered, use the following

   ```sh
   GET http://localhost:5000/get/urls
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
