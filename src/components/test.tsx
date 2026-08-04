import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Test() {
  return <NavigationMenuLink render={<Link href="/" />} />;
}
