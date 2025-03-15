import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <a href="/">Home </a>
      <a href="/events">events </a>
      <a href="/about">About Us </a>
      <br /> <br /> <br />
      <h1>
        {data.map((ev) => (
          <a href={`/events/${ev.id}`} key={ev.id}>
            <Image width={50} height={50} src={ev.image} alt={ev.name}></Image>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </h1>
      <br /> <br /> <br />
      <h1 className="text-2xl font-bold">Page</h1>
      <br /> <br /> <br />
      <section>
        <h1>Events in London</h1>
        <p>London is a great city for events.</p>
      </section>
      <section>
        <h1>Events in france</h1>
        <p>London is a great city for events.</p>
      </section>
      <section>
        <h1>Events in barcelona</h1>
        <p>London is a great city for events.</p>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");
  console.log(events_categories);
  console.log("After data");
  // const res = await fetch("URL");
  // const fetchedData = await res.json();
  // console.log(fetchedData);
  return {
    props: {
      data: events_categories,
    },
  };
}
