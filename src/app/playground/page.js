'use client';
import React from 'react';

import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import Timeline from '@/components/timeline/timeline';
import CommunityPartnerSection from '@/components/communityPartners/communityPartners';
import CampusAmbasador from '@/components/campusAmbasdor/CampusAmbasador';

const Playground = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full px-5'>
      <Prizes />
      <Gallery />
      <Timeline />
      <CommunityPartnerSection />
      <CampusAmbasador />
    </div>
  );
};

export default Playground;
