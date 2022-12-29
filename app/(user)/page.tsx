import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

import Paragraph from "../../components/home/Paragraph";
import Header from "../../components/home/Header";
import Services from "../../components/home/Services";
import RecentWork from "../../components/home/RecentWork";
import Text from "../../components/home/Text";
import About from "../../components/home/About";
import RecentClients from "../../components/home/RecentClients";

const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(createdAt desc)
`;

export const revalidate = 15;

export default async function HomePage() {
  const posts = await client.fetch(query);

  return (
    <section className='container mx-auto max-w-full px-4 md:px-8 lg:px-10'>
      <Header />
      <hr className='my-36 border-t-2 border-gray-300' />
      <Services />
      <RecentWork posts={posts} />
      <RecentClients />
      <Paragraph />
      <About />
    </section>
  );
}
