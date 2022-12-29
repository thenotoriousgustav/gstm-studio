export default function FilterButton() {
  return (
    <div className='fixed bottom-12 left-0 flex w-full justify-center'>
      <div className='rounded-full bg-black px-2 py-2 text-lg text-white'>
        <button className='rounded-full bg-white px-5 py-2 text-black'>
          ALL
        </button>
        <button className='rounded-full px-5 py-2'>DEVELOPMENT</button>
        <button className='rounded-full px-5 py-2'>UI/UX</button>
      </div>
    </div>
  );
}
