export const runtime = 'edge';
import {auth, createClerkClient} from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import {env} from "@/env";

export async function POST(request: NextRequest) {
    const clerkAuth = auth();
    const clerkClient = createClerkClient({
        publishableKey: env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        secretKey: env.CLERK_SECRET_KEY,
    });
    const clerkUser = await clerkClient.users.getUser(clerkAuth.userId!); // <-- error here
    return Response.json({user: clerkUser})
}