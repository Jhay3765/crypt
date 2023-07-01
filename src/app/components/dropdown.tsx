import React from "react";
import Link from "next/link";
import { RowsIcon } from "@radix-ui/react-icons";

export const Dropdown = () => {
  return (
    <details className="dropdown ">
      <summary className="  btn">
        <RowsIcon />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
        <li>
          <Link href="about"> About </Link>
        </li>
        <li>
          <Link href="features"> Features</Link>
        </li>
        <li>
          <Link href="pricing"> Services </Link>
        </li>
        <li>
          <Link href="contacts">Pricing </Link>
        </li>
        <li>
          <Link href="services">Contacts </Link>
        </li>
      </ul>
    </details>
  );
};
