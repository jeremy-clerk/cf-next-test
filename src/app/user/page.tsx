export const runtime = 'edge';
import {currentUser} from "@clerk/nextjs/server";
export default async function Page(){
    const user = await currentUser()

    return (
        <div className={"flex flex-col w-full items-center justify-center p-8"}>
            <h1 className={"text-xl"}>Current User</h1>
            <pre className={"bg-zinc-700 text-orange-300 w-full max-w-xl overflow-scroll max-h-[500px]"}>
                {user && JSON.stringify(user, undefined, 2)}
            </pre>
        </div>
    )

}