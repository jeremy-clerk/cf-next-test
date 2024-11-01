"use client"

export default function ApiTestComponent(){
    return(
        <div>
            <button onClick={async () => {
                const res = await fetch("/api/test", {
                    method: 'POST',
                })
                console.log(await res.json())
            }}>
                Make Request
            </button>
        </div>
    )
}