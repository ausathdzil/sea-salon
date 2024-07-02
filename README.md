
# SEA Salon

A salon web application as part of [COMPFEST Academy](https://compfest.id/academy) technical challenge.

## Tech Stack

- [next.js](https://github.com/vercel/next.js)
- [typescript](https://github.com/microsoft/TypeScript)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [shadcn-ui](https://github.com/shadcn-ui/ui)
- [vercel postgres](https://github.com/vercel/storage)
- [auth.js](https://github.com/nextauthjs/next-auth)
- [zod](https://github.com/colinhacks/zod)


## Demo

- [SEA Salon](https://sea-salon-ausath.vercel.app)
- User and admin dashboard currently doesn't work on the live demo. Clone this project on your machine to view it.


## Features

- User authentication
- User dashboard (doesn't work on production)
- Admin dashboard (doesn't work on production)
- Reviews section
- Reservation system


## Run Locally

Clone the project

```bash
  git clone https://github.com/ausathdzil/sea-salon.git
```

Go to the project directory

```bash
  cd sea-salon
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Vercel Postgres Database Integration

- Follow the [quickstart guide](https://vercel.com/docs/storage/vercel-postgres/quickstart#create-a-postgres-database).

## Environment Variables

To run this project locally, you will need to add the following environment variables to your .env.development.local file

`POSTGRES_URL`

`POSTGRES_PRISMA_URL`

`POSTGRES_URL_NO_SSL`

`POSTGRES_URL_NON_POOLING`

`POSTGRES_USER`

`POSTGRES_HOST`

`POSTGRES_PASSWORD`

`POSTGRES_DATABASE`

`NEXTAUTH_SECRET`
