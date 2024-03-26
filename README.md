# Pioneer Project

Backend Developer Intern Assessment

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Dependencies](#dependencies)
- [Deployed URL](#Deployed_URL)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saikrishnayadav764/pioneer.git
   ```

2. **Install dependencies:**

   ```bash
   cd pioneer
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   MONGODB_URI=mongodb+srv://naruto:naruto@cluster0.be644zi.mongodb.net/db
   SECRET_KEY=secret_key
   ```


## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Access the API:**

   Open your web browser or API testing tool and access the following endpoints:

   - Authentication: `/auth/register`, `/auth/login`, `/auth/logout`
   - Ethereum Account Balance: `/account/balance?address=your_ethereum_address`
   - Other endpoints as documented in the API documentation.

## API Documentation

The API documentation is generated using Swagger. Access the interactive Swagger UI at:

```
https://jade-mushy-cockroach.cyclic.app/api-docs
```

This provides detailed documentation for all the API endpoints, including request parameters and responses.

## Dependencies

- Node.js
- Express.js
- MongoDB
- web3.js
- Swagger
- dotenv
- cors

## Deployed_URL
- https://jade-mushy-cockroach.cyclic.app/
