import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    clientPrefix: "NEXT_PUBLIC",
    server: {
        CLERK_SECRET_KEY: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1)
    },
    runtimeEnv: process.env
});