import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={90} height={90} alt="logo"/>
            </div>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/coders">Coders List</Link>
        </nav>
    );
}
 
export default Navbar;