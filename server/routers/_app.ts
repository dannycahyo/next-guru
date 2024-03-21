import { z } from "zod";
import prisma from "@/lib/prisma";
import { router, publicProcedure } from "../trpc";

export const appRouter = router({
  productList: publicProcedure.query(async () => {
    const products = await prisma.product.findMany();
    return products;
  }),
  productById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      const {
        input: { id },
      } = opts;

      const product = await prisma.product.findUnique({
        where: {
          id,
        },
      });
      return product;
    }),
});

export type AppRouter = typeof appRouter;
