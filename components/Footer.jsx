import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161359] mt-20 pb-8 text-center md:text-left text-white">
      <div className="flex flex-col">
        <h1 className="mt-4">Visit and learn more on our social medias</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link href="https://www.youtube.com/channel/UC1fiTTVNTqAq7N678M1GLHg">
            <Image
              src="/images/icons/youtube.svg"
              className="block cursor-pointer"
              alt="icon"
              width={36}
              height={36}
            />
          </Link>
          <Link href="https://web.facebook.com/profile.php?id=61578675034449">
            <Image
              src="/images/icons/facebook.svg"
              className="block cursor-pointer"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://www.instagram.com/africaparenting/">
            <Image
              src="/images/icons/instagram.svg"
              className="block cursor-pointer"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://www.tiktok.com/@africaparenting">
            <Image
              src="/images/icons/tiktok.svg"
              className="block cursor-pointer"
              alt="icon"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/icons/whatsaap.svg"
              className="block cursor-pointer"
              alt="icon"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl mt-4">Useful links</h1>

        <div className="mt-2">
          <ul>
            <li className="cursor-pointer">
              {" "}
              <Link href="/kidtalents">Kids Talents</Link>{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="/parenting">parening</Link>{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="/blog">Blog</Link>{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="/about">about us</Link>{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="#contacts">contact us</Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8">© 2025</p>
    </div>
  );
};

export default Footer;
