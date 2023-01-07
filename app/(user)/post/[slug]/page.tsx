import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { PageWrapper } from "../../../../components/PageWrapper";

import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 15;

export async function generateStaticParams() {
  const query = groq`*[_type == 'post']
  { 
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->,
        }
    `;

  const post: Post = await client.fetch(query, { slug });
  return (
    <PageWrapper>
      <section className='container mx-auto max-w-full px-4 md:px-8 lg:px-10'>
        <div>
          <div>
            <h1 className='text-7xl md:text-9xl'>{post.title}</h1>
            <p className='mt-3 text-xl md:mt-4 md:text-3xl'>
              {post.description}
            </p>
          </div>
          <div className='mt-8 md:mt-12'>
            {post.categories.map((category) => (
              <div key={category._id}>
                <p>CATEGORY:</p>
                <h2 className='text-2xl'>{category.title}</h2>
              </div>
            ))}
          </div>
          <div className='mt-12 flex items-center justify-between md:mt-16 '>
            <a
              href={post.link}
              target='_blank'
              className=' inline-flex items-center text-xl underline'
            >
              View live
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='ml-px h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                />
              </svg>
            </a>

            <p className='text-xl'>
              {new Date(post._createdAt).toLocaleDateString("en-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className='mx-auto h-96 w-full object-cover md:h-full'
            width='0'
            height='0'
            sizes='100vw'
          />
        </div>

        <article className='mx-auto mt-8 w-full md:w-9/12 md:prose-lg'>
          <PortableText value={post.body} />
        </article>
      </section>
    </PageWrapper>
  );
}
