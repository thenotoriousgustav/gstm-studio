import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
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
    <section className='container mx-auto max-w-full px-4 md:px-8 lg:px-10'>
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-7xl md:text-9xl'>{post.title}</h1>
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
        <div>
          {post.categories.map((category) => (
            <p key={category._id}>{category.title}</p>
          ))}
        </div>
        <article className='prose'>
          <PortableText value={post.body} />
        </article>
      </div>
    </section>
  );
}
