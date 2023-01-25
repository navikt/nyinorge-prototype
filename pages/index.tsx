import Head from "next/head";
import Image from "next/image";
import { createClient } from "next-sanity";
import { Button } from "@/components/Button";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "vwwxplfz",
  dataset: "production",
  apiVersion: "2023-01-24",
  useCdn: false,
});

const imageBuilder = imageUrlBuilder(client);

export default function Home({ topics }: { topics: any }) {
  return (
    <>
      <Head>
        <title>Welcome to Norway</title>
        <meta name="description" content="Welcome to Norway" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Norway</h1>
        {topics &&
          topics.map((topic: any) => (
            <section key={topic._id}>
              <h2>{topic.title}</h2>
              <Image
                src={imageBuilder.image(topic.icon).url()}
                alt=""
                width={100}
                height={100}
              />
              <PortableText value={topic.content} />
              <p>{topic.description}</p>
              <Button>Learn more</Button>
            </section>
          ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'topic']`;
  const topics = await client.fetch(query);
  console.log("topics", topics);
  return { props: { topics } };
}
