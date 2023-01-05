"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import ClientSideRoute from "../ClientSideRoute";

type Props = {
  posts: Post[];
  webs: webPosts[];
  designs: designPosts[];
};

export default function WorkList({ posts, webs, designs }: Props) {
  const [filtered, setFiltered] = useState([] as any);
  const [category, setCategory] = useState(posts as any);

  useEffect(() => {
    if (category === posts) {
      setFiltered(posts);
      return;
    }
    if (category === webs) {
      setFiltered(webs);
      return;
    }
    if (category === designs) {
      setFiltered(designs);
      return;
    }
    const filtered = posts.filter(
      (post) => post.categories.includes(category)
      // return post.categories.some((cat) => cat.title === "Design");
    );
    setFiltered(filtered);
  }, [category]);

  return (
    <>
      <div className='flex space-x-10'>
        <button onClick={() => setCategory(posts)}>all</button>
        <button onClick={() => setCategory(webs)}>web</button>
        <button onClick={() => setCategory(designs)}>design</button>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 md:gap-4 '>
        {filtered.map((post: any) => (
          <div key={post._id} className='mt-16'>
            <ClientSideRoute route={`/post/${post.slug.current}`}>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className='h-[500px] w-full object-cover'
                width='0'
                height='0'
                sizes='100vw'
              />
              <div className='mt-4 flex items-center justify-between'>
                <h2 className='text-xl'>{post.title}</h2>
                <div>
                  {post.categories.map((cat: any) => {
                    return (
                      <p
                        key={cat._id}
                        className='rounded-md bg-gray-300 px-2 py-1 text-sm'
                      >
                        {cat.title}
                      </p>
                    );
                  })}
                </div>
              </div>
            </ClientSideRoute>
          </div>
        ))}
      </section>
    </>
  );
}
