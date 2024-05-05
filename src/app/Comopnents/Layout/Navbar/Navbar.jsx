"use client";
import React, { useEffect, useState } from "react";
import Headings from "../../Tags/Headings/Headings";
import Image from "next/image";
import Button from "../../Tags/Button/Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [PathName, setPathName] = useState();

  const router = useRouter();
  const Handlelogin = () => {
    if (PathName === "/") {
      router.push("/login");
    } else {
      router.push("/")
    }
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setPathName(pathname);
  }, []);

  return (
    <nav className="flex justify-between  h-[100px] items-center px-4 mt-4 rounded-[5px]   ">
      <Image
        src={"/oprokashito.png"}
        height={80}
        width={120}
        alt="not avail"
        className="bg-cover h-auto w-auto bg-no-repeat "
      />

      <Button
        onClick={Handlelogin}
        text={PathName === "/" ? "login" : "register"}
        className={
          "h-16 w-40  text-white rounded-[25px] bg-pink-600 border-[2px] border-solid border-pink-600 hover:border-solid hover:bg-transparent hover:text-pink-600 capitalize transition duration-150 font-normal  "
        }
      />
    </nav>
  );
};

export default Navbar;
