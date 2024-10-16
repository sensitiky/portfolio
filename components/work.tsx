import { cards } from '@/constants/card';
import { LayoutGrid } from './ui/layoutGrid';

export default function Work() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
