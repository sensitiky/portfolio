import { cards } from '@/components/card';
import { LayoutGrid } from './ui/layoutGrid';
import Footer from './ui/footer';

export default function WorkSection() {
  return (
    <div className="h-[90vh] w-full">
      <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center text-4xl font-bold">
        Checkout my work
      </p>
      <LayoutGrid cards={cards} />
      <Footer />
    </div>
  );
}
