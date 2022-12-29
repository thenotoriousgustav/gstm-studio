import Image from "next/image";
import urlFor from "../../lib/urlFor";
import ClientSideRoute from "../ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function WorkList({ posts }: Props) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 md:gap-4 '>
      {posts.map((post) => (
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
                {post.categories.map((category) => (
                  <p
                    className='mr-2 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm'
                    key={category._id}
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </ClientSideRoute>
        </div>
      ))}
    </section>
  );
}
