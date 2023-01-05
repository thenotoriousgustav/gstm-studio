import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import WorkList from "../../../components/work/WorkList";
import { PageWrapper } from "../../../components/PageWrapper";

const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(createdAt desc)
`;

const web = groq`
*[_type == "post" && "Web" in categories[]->title]{
  ...,
  author->,
  categories[]->,
} | order(createdAt desc)
`;

const design = groq`
*[_type == "post" && "Design" in categories[]->title]{
  ...,
  author->,
  categories[]->,
} | order(createdAt desc)
`;

export const revalidate = 15;

export default async function WorkPage() {
  const posts = await client.fetch(query);
  const webs = await client.fetch(web);
  const designs = await client.fetch(design);

  return (
    <PageWrapper>
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
        <WorkList posts={posts} webs={webs} designs={designs} />
      </section>
    </PageWrapper>
  );
}
