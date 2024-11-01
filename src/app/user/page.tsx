export const runtime = 'edge';
import {currentUser} from "@clerk/nextjs/server";
export default async function Page(){
    const user = await currentUser()

    return (
        <div className={"flex flex-col w-full items-center justify-center"}>
            <pre className={"bg-zinc-700 text-orange-300"}>
                {user && JSON.stringify(user, undefined, 2)}
            </pre>
        </div>
    )

}