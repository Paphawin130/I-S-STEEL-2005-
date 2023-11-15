import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaPhone ,FaHome } from "react-icons/fa"
import Link from "next/link";
import Modal from "@/components/shared/modal";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);
};
export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-5 mt-2 flex flex-col gap-2 font-mono text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center  text-black">
        <FaHome className="mx-2"/> Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <Link href="/products" className="flex items-center text-black">
          Product
        </Link> */}
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      ></Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/contact" className="flex items-center text-black">
        <FaPhone className="mx-2"/> 
           Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto my-2 max-w-screen-xl py-2 px-4 text-black lg:px-8 lg:py-4">
      <div className="text-blue-gray-900 container mx-auto  flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-5 cursor-pointer py-1.5 font-normal md:text-2xl"
        >
          I S STEEL <span className="red"> (2005) </span>
          <span className="text-black ">.co.th</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="red ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
