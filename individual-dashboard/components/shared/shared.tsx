"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

// This is the Nav

export function Nav() {
  return (
    <nav className="bg-[#38313A] w-max min-h-screen p-4 flex flex-col">
      <Image
        alt="Veridaq logo"
        src="/assets/images/veridaq-logo.png"
        width={100}
        height={100}
        className="mx-auto"
      />
      <div className="my-auto">
        <ul className="list-none flex flex-col gap-2">
          <li className="gradient-border rounded-md">
            <Link
              href="/"
              className="flex bg-[#38313A] items-center gap-4 text-white font-medium p-4"
            >
              <Image
                alt="home"
                src="/assets/icons/home.svg"
                width={20}
                height={20}
              />
              Home
            </Link>
          </li>
          <li className="gradient-border rounded-md">
            <Link
              href="/"
              className="flex bg-[#38313A] items-center gap-4 text-white font-medium p-4"
            >
              <Image
                alt="inbox"
                src="/assets/icons/send.svg"
                width={20}
                height={20}
              />
              Veridaq Box
            </Link>
          </li>
          <li className="gradient-border rounded-md">
            <Link
              href="/"
              className="flex bg-[#38313A] items-center gap-4 text-white font-medium p-4"
            >
              <Image
                alt="issue"
                src="/assets/icons/message.svg"
                width={20}
                height={20}
              />
              Veridaq Issue
            </Link>
          </li>
          <li className="gradient-border rounded-md">
            <Link
              href="/"
              className="flex bg-[#38313A] items-center gap-4 text-white font-medium p-4"
            >
              <Image
                alt="store"
                src="/assets/icons/security.svg"
                width={20}
                height={20}
              />
              Veridaq Store
            </Link>
          </li>
          <li className="gradient-border rounded-md">
            <Link
              href="/"
              className="flex bg-[#38313A] items-center gap-4 text-white font-medium p-4"
            >
              <Image
                alt="settings"
                src="/assets/icons/settings.svg"
                width={20}
                height={20}
              />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const handleSignOut = async () => {
  await signOut({ redirect: true, callbackUrl: '/auth/sign-in' });
};


export function Header() {
  const pathname = usePathname()
  return (
    <header className="flex items-center gap-4">
      {pathname === "/" && (
        <p className="text-[32px] font-semibold text-gradient mr-auto">
          Welcome to Veridaq, Tomiwa!
        </p>
      )}
      {pathname === "/veridaq-request" && (
        <p className="text-[32px] font-semibold text-gradient mr-auto">
          Request the Veridaq you need, here.
        </p>
      )}
      {pathname === "/veridaq-box" && (
        <p className="text-[32px] font-semibold text-gradient mr-auto">
          Receive mails or Issue Veridaq, here.
        </p>
      )}
      {pathname === "/veridaq-store" && (
        <p className="text-[32px] font-semibold text-gradient mr-auto">
          Download and share your Veridaq, here.
        </p>
      )}
      {pathname === "/settings" && (
        <p className="text-[32px] font-semibold text-gradient mr-auto">
          Configure your Veridaq Account, here.
        </p>
      )}
      <Image
        alt="notifications"
        src="/assets/icons/bell.svg"
        width={30}
        height={30}
      />
        <Image
          alt="user"
          src="/assets/images/user.png"
          width={30}
          height={30}
          onClick={handleSignOut}
          style={{ cursor: 'pointer' }}
        />
    </header>
  );
}


// Cards for the home page
export function Card({
  heading,
  paragraph,
  bgColor,
  outlineColor,
}: {
  heading: string;
  paragraph: string;
  bgColor: string;
  outlineColor: string;
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor, borderColor: outlineColor }}
    >
      <p>{heading}</p>
      <p>{paragraph}</p>
    </div>
  );
}
