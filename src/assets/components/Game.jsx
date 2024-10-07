export default function Game({ game }) {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg transition-transform transform border border-transparent hover:border hover:border-red-500 cursor-pointer'>
      <div className='h-48'>
        <img src={game.background_image} alt={game.name} className='object-cover w-full h-full' />
      </div>
      <div className='p-4 bg-[#202020] flex flex-col justify-between h-48'>
        <div>
          <h2 className='font-bold mb-2'>{game.name}</h2>
          <div className='flex flex-wrap items-center mb-2 gap-3 text-xs font-medium'>
            {game.platforms.map((platformObj, index) => (
              <span key={index} className=' bg-red-700  py-1 px-2 rounded-lg'>
                {platformObj.platform.name}
              </span>
            ))}
          </div>
        </div>
        <div className='text-gray-400'>
          <p className='text-sm mb-1'>
            <span className='font-semibold'>Released:</span> {game.released}
          </p>
          <p className='text-sm'>
            <span className='font-semibold'>Rating:</span> {game.rating}
          </p>
        </div>
      </div>
    </div>
  );
}
