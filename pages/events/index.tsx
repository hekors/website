// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import fs from "fs";
import path from "path";

// Library Imports
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

// Components Imports
import Callout from "@/components/Callout";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Button from "@/components/ui-patterns/Button";
import UpcomingHackathons from "@/components/UpcomingHackathons";
import UpcomingSessions from "@/components/UpcomingSessions";

const Events: NextPage = () => {
  return (
    <React.Fragment>
      <div className="events">
        <div className="checks-container">
          <div className="wrapped-view flex flex-row items-center justify-evenly">
            <div className="hero-section-wrapper w-fit h-auto flex flex-col items-start justify-between mb-16">
              <Callout>
                {"Attend Hackathons, Offline Meetups and much more"}
              </Callout>
              <h1 className="font-product-bungee text-5xl mt-6 flex flex-col items-start justify-between gap-4">
                <span>{"Events in season"}</span>
                <span>
                  {new Date().getFullYear() +
                    "-" +
                    Number(new Date().getFullYear() + 1)}
                </span>
              </h1>
              <Link href="/events/past-events" className="mt-12">
                <Button shade="product-teal">{"See Past Events"}</Button>
              </Link>
            </div>
            <div className="illustration-wrapper">
              <Image
                src="/skills-illustration.svg"
                width="366"
                height="380"
                alt="skills-illustration"
              />
            </div>
          </div>
        </div>
        <div className="upcoming-hackathons-section-wrapper">
          <UpcomingHackathons />
          <UpcomingSessions />
          <OrganizeWithUs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;

export async function getStaticProps() {
  // Taken example of a particular folder named data at root directory
  const files = fs.readdirSync(path.join("data"));

  // TODO: Rewrite the types based on the data
  let slug: any = [];
  let markdown: any = [];
  let matterResult: any = [];
  let contentHTML: any = [];
  let frontmatter: any = [];

  files.map((filename) => {
    slug.push({ name: filename.replace(".md", "") });
    markdown.push(fs.readFileSync(path.join("data", filename), "utf-8"));
  });

  markdown.map(async (item: any, index: number) => {
    matterResult.push(matter(item));
    frontmatter.push(matterResult[index].data);

    const processedContent = await remark()
      .use(remarkHtml)
      .process(matterResult[item].content);

    contentHTML.push({ content: processedContent.toString() });
  });

  return {
    props: {
      slug,
      frontmatter,
      contentHTML,
    },
  };
}
