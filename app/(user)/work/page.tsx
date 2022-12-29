import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import FilterButton from "../../../components/work/FilterButton";
import WorkList from "../../../components/work/WorkList";

const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(createdAt desc)
`;

export const revalidate = 15;

export default async function WorkPage() {
  const posts = await client.fetch(query);

  return (
    <section className='container mx-auto px-4 md:px-8 lg:px-10'>
      <header className='mt-2'>
        <div>
          <h1 className='text-7xl md:text-9xl'>OUR WORK ✺</h1>
          <p className='mt-4 w-full text-3xl md:w-10/12 md:text-4xl'>
            We wrestle vision forward for the coolest companies on earth.
            Together, we build brands and ideas that shape the way we work and
            live.
          </p>
        </div>
      </header>

      <hr className='mb-12 mt-24 border-t-2 border-gray-300' />

      <WorkList posts={posts} />

      <FilterButton />
    </section>
  );
}
