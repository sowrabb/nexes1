import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1">{/* Left side spacer */}</div>
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={getImagePath("/Nexes.svg")}
              alt="Nexes"
              width={225}
              height={54}
            />
          </Link>
        </div>
        <div className="flex-1" />
      </div>
    </header>
  );
} 