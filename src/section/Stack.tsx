import { ExampleStack } from "@/components/ClipPathLink";

export default function Stack(){
    return(
        <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-center border-b-[1px] border-gray-400">
        <h2 className="text-4xl">My Stacks</h2>
        <ExampleStack/>
        </div>
    )
}