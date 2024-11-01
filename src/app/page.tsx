export const runtime = "edge";
import {SignedIn, SignedOut, SignIn, SignOutButton, UserButton} from "@clerk/nextjs";
import ApiTestComponent from "@/app/components/apiTestComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <SignedOut>
        <SignIn />
      </SignedOut>
        <SignedIn>
          <UserButton />
            <ApiTestComponent />
        </SignedIn>
      </div>
    </main>
  );
}
