import Game from './Game';

export default function Games({ games, loading }) {
  if (loading) {
    return (
      <div className='flex items-center justify-center my-4'>
        <div className='animate-spin rounded-full border-4 border-red-500 border-t-transparent w-16 h-16'></div>
      </div>
    );
  }

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {games.map((game) => {
        return <Game game={game} key={game.id} />;
      })}
    </div>
  );
}
