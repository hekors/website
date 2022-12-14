// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Callout from "@/common/components/Callout";
import Button from "@/common/components/ui-patterns/Button";

const NotFound: NextPage = () => {
  return (
    <React.Fragment>
      <div className="invalid-page my-12 py-12">
        <section className="invalid-page-content-wrapper text-center w-fit h-fit mx-auto flex flex-col items-center justify-start gap-1">
          <Callout>{"Reporting: 404 (Invalid Page)"}</Callout>
          <h1 className="leading-snug font-product-bungee text-4xl mt-2">
            {"Don't worry, we got you!"}
          </h1>
          <Image
            src="/police.svg"
            alt="hekors-police"
            width="300"
            height="300"
            priority
          />
          <div className="cta-buttons-layer-wrapper flex flex-row items-center justify-center gap-6 w-fit h-fit">
            <Link href="/events">
              <Button type="primary" shade="product-blue">
                {"See Events"}
              </Button>
            </Link>
            <Link href="/">
              <Button type="secondary" shade="product-pink">
                {"Go to Home Page"}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
