import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";
import ClientSideRoute from "../ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function RecentWork({ posts }: Props) {
  return (
    <section className='mt-52 border-y-2 border-black'>
      <div className='flex flex-col md:flex-row md:space-x-14'>
        <div className='border-black pr-8 pt-10 md:border-r-2'>
          <h1 className='text-7xl md:text-8xl'>RECENT WORK</h1>
          <p className='mt-6 text-xl text-secondary'>
            We love to build and create something beautiful to our client
          </p>
          <Link
            href='/work'
            className='mt-6 inline-block underline decoration-gray-400 decoration-4 underline-offset-4'
          >
            See more work
          </Link>
        </div>

        <div className='hide-scroll-bar flex snap-x snap-proximity overflow-x-scroll py-8'>
          <div className='flex flex-nowrap space-x-4 md:space-x-8'>
            {posts.map((post) => (
              <ClientSideRoute
                route={`/post/${post.slug.current}`}
                key={post._id}
              >
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className='h-[29rem] w-auto max-w-xs object-cover md:max-w-md lg:max-w-xl'
                  width='0'
                  height='0'
                  sizes='100vw'
                ></Image>
                <div>
                  <div className='mt-4 text-xl'>
                    <p className='font-light'>{post.title}</p>
                  </div>
                  <div>
                    {post.categories.map((cat) => {
                      return <p key={cat._id}>{cat.title}</p>;
                    })}
                  </div>
                </div>
              </ClientSideRoute>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
