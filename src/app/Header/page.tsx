import Link from "next/link"



export default function Header(){
return(
    
    <div className="header">
<ul>
 <li><Link href="/">Home</Link></li>
 <li><Link href="./About">About</Link></li>
 <li><Link href="./Contact-us">Contact-Us</Link></li>
</ul>
</div>
    )
}