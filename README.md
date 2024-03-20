# Next Guru

This repository contains the code for the Next.js workshop. The workshop is divided into multiple lessons, each focusing on a specific topic in Next.js. The code for each lesson is available in a separate branch.

## Getting Started

To get started with the workshop, clone this repository and install the dependencies using the following commands:

```bash
git clone https://github.com/dannycahyo/next-guru.git
cd next-guru
yarn install
```

Once the dependencies are installed, you can switch to the branch for the lesson you want to work on. For example, to switch to the branch for the first lesson, you can use the following command:

```bash
git checkout <branch-lesson-name>
```

After switching to the branch, you can start the development server using the following command:

```bash
yarn dev
```

This will start the development server and you can access the application at [http://localhost:3000](http://localhost:3000).

## Lesson 1: Static Routing

- **Branch Name:** static-routing
- **Description:** This lesson focuses on creating static routes in Next.js.
- **Topics Covered:**
  - Creating pages in the `pages` directory.
  - Defining routes using file-based routing.
  - Linking between pages using Next.js `<Link>` component.

## Lesson 2: Dynamic Routing

- **Branch Name:** dynamic-routing
- **Description:** This lesson teaches how to implement dynamic routes in Next.js.
- **Topics Covered:**
  - Dynamic routing with parameterized URLs
  - Accessing route parameters in page components
  - Generating dynamic routes programmatically

## Lesson 3: Creating API

- **Branch Name:** api-routes
- **Description:** This lesson covers creating API routes in Next.js.
- **Topics Covered:**
  - Setting up API routes in the `pages/api` directory
  - Handling different HTTP methods in API routes
  - Accessing request data in API route handlers

## Lesson 4: Server-Side Data Fetching with `getServerSideProps`

- **Branch Name:** server-side-fetching
- **Description:** This lesson focuses on server-side data fetching in Next.js using `getServerSideProps`.
- **Topics Covered:**
  - Understanding server-side rendering in Next.js
  - Fetching data on the server using `getServerSideProps`
  - Passing fetched data to page components

## Lesson 5: Integrating Prisma

- **Branch Name:** prisma-integration
- **Description:** This lesson covers integrating Prisma in a Next.js application.
- **Topics Covered:**
  - Setting up Prisma in a Next.js project
  - Defining your data model using Prisma schema
  - Querying your database using Prisma Client
  - Understanding the benefits of type safety with Prisma

## Lesson 6: Authentication with NextAuth.js

- **Branch Name:** next-auth
- **Description:** This lesson focuses on implementing authentication in Next.js using NextAuth.js.
- **Topics Covered:**
  - Setting up NextAuth.js in a Next.js project
  - Configuring different authentication providers
  - Protecting pages and API routes
  - Understanding session management with NextAuth.js
