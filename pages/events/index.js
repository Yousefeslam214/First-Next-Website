"use client"; // If you are using Next.js App Router (app/ directory)

import React, { useState } from "react";
import Link from "next/link";

const Page = (props) => {
  const { title } = props;
  const [userId, setUserId] = useState("");

  return (
    <div>
      <h1>{title}</h1>
      <br /> <br /> <br />
      <h1 className="text-2xl font-bold">Page</h1>
      <br /> <br /> <br />
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter ID"
        className="border p-2 rounded-md mb-4"
      />
      <br />
      <Link href="/events" className="text-blue-500 underline">
        Go to Events
      </Link>
      <br />
      <Link href={`/events/${userId}`} className="text-blue-500 underline">
        Go to {userId}
      </Link>
    </div>
  );
};

export default Page;
export function getServerSideProps() {
  return {
    props: {
      title: "HI YOUSEF",
    },
  };
}
