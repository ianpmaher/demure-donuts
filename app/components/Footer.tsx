import Link from "next/link";
import { AvatarIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          href="https://github.com/ianpmaher/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ianpmaher.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AvatarIcon className="w-6 h-6"/>
        </Link>
      </footer>
  );
}