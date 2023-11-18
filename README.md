# seeders

# How to use

## 1. Clone Project into your local machine
```
git clone https://github.com/SerhiiNikif/seeders.git
```

## 2. Go into project folder

```
cd seeders
```

## 3. Setting environment file .env.
Create an `.env` files on the client and on the server and fill them with the values ​​from the `.env.example` files.

client:
```
REACT_APP_LOCAL_URL=http://localhost:5000
```

server:
```
DATABASE_URL=postgres://db_user:db_password@localhost:5432/db_name

PORT=5000
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
TINIFY_API_KEY=key_from_tinypng.com
TINIFY_API_URL=https://api.tinify.com/shrink
```

> I am using a database from heroku. You can use a local database. To do this, you need to create a database and in the __sequelizeSetup.js__ file, remove __dialectOptions__

## 4. Start project

server
```
cd server
npm install
npm run dev
```

client
```
cd client
npm install
npm run dev
```

## 5. Play with APIs now !
> Please make sure postgresql service is installed and running.

Now, you are ready to test all APIs.
Just simply open your browser http://localhost:3000.
