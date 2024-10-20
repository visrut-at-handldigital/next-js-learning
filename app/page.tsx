import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>UsersPage</h1>
      <ProductCard />
      <Link href={"/users"}>Users</Link>
    </div>
  );
}
