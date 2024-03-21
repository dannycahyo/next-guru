// https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#re-using-a-single-prismaclient-instance

import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default prisma;
