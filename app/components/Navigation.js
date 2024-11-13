import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/cabins'>Explore our cabins</Link>
      </li>
      <li>
        <Link href='/about'>About Us</Link>
      </li>
      <li>
        <Link href='/account'>Your Account</Link>
      </li>
    </ul>
  );
}
