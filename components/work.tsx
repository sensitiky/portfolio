import { cards } from '@/constants/card';
import { LayoutGrid } from './ui/layoutGrid';

export default function Work() {
  return (
    <div className="h-screen w-full">
      <p className="md:mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center text-4xl font-bold">
        Checkout my work
      </p>
      <LayoutGrid cards={cards} />
    </div>
  );
}
