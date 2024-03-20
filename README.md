# Integrating Prisma in Next.js

This branch covers integrating Prisma in a Next.js application.

## Description

In this lesson, we will learn how to integrate Prisma in a Next.js application. Prisma is an open-source database toolkit that makes it easy to query your database. We will set up Prisma, define our data model using Prisma schema, and query our database using Prisma Client.

## Getting Started

To get started with this lesson, clone this repository and switch to the `prisma-integration` branch.

```bash
git clone https://github.com/dannycahyo/next-guru.git
git checkout prisma-integration
```

Since we're adding prisma & @prisma/client dependecies, don't to forget to sync the dependencies by running `yarn install`.

## Important Script

- `npx prisma init` - Initialize Prisma in your project.
- `npx prisma studio` - Open Prisma Studio to view your database.
- `npx prisma migrate dev --name init` - Create a migration for your database.

## Lesson Content

- Understand how Prisma works in a Next.js project.
- Set up Prisma in a Next.js project.
- Define your data model using Prisma schema.
- Query your database using Prisma Client.
- Understand the benefits of type safety with Prisma.

## Further Reading

- [Prisma](https://www.prisma.io)
- [Next.js with Prisma](https://www.prisma.io/nextjs)
