import React from "react";
import { Logo } from "../index";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="relative bottom-0 left-0 right-0 overflow-hidden bg-blue-100 border-t-2 border-t-gray mt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              &copy; Copyright 2024. All Rights Reserved by BlogNest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
