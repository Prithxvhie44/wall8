import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { LayoutDashboard, PenBox } from "lucide-react"
import { checkUser } from "@/lib/checkUser"


const Header = async () => {
    await checkUser();
    
    return (
        <div className="fixed top-0 w-full bg-white/80 z-50 border-b background-blur-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-4">
                <Link href="/">
                    <Image
                        src={"/final.png"}
                        alt="Welth Logo"
                        width={200}
                        height={60}
                        className="h-14 w-auto object-contain"
                    />
                </Link>



                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link href={"/dashboard"} >
                            <Button variant="outline" className="text-gray-800 hover:text-blue-600 flex items-center gap-2">
                                <LayoutDashboard size={18}/>
                                <span className="hidden md:inline">Dashboard</span></Button>
                        </Link>


                        <Link href={"/transaction/create"} >
                            <Button  className="flex items-center gap-2">
                                <PenBox size={18}/>
                                <span className="hidden md:inline">Add Transaction</span></Button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                    <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },}}/>
                    </SignedIn>
                </div>
            </nav>
        </div>

    )
}

export default Header