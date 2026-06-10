# Student Dashboard

A futuristic learning dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

* Server-side data fetching using Next.js App Router
* Supabase PostgreSQL integration
* Dynamic course cards
* Animated progress bars
* Framer Motion hover animations
* Bento Grid layout
* Responsive design
* Dark futuristic UI
* Animated sidebar navigation

## Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Architecture

### Server Components

Course data is fetched from Supabase inside a Next.js Server Component to improve performance and reduce client-side requests.

### Client Components

Framer Motion animations and UI interactions are handled in Client Components.

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Run Locally

npm install

npm run dev

## Deployment

The application is deployed using Vercel.
