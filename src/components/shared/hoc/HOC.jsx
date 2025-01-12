'use client';

import BackgroundLayout from '@/components/about-us/BgWrapper';
import Navbar from '@/components/marginals/navbar/navbar';
import { ReactLenis } from '@/lib/lenis';

function HOC({ children }) {
  return (
    <ReactLenis root>
      <Navbar />
      <BackgroundLayout> {children}</BackgroundLayout>
    </ReactLenis>
  );
}

export default HOC;
