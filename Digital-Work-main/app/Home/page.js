
import Hero from '@/app/components/Hero';

import WhyLearnForex from '@/app/components/WhyLearnForex';
import Courses from '@/app/components/Courses';
import Roadmap from '@/app/components/Roadmap';
import Journey from '@/app/components/Journey';
import Mentors from '@/app/components/Mentors';
import Testimonials from '@/app/components/Testimonials';
import Community from '@/app/components/Community';
import BlogGrid from '@/app/components/BlogGrid';
import FAQ from '@/app/components/FAQ';
import IBSection from '@/app/components/IBSection';
import CompareTable from '@/app/components/CompareTable';
import Academy from '@/app/components/Academy'
import FinalCTA from '@/app/components/FinalCTA';
import Breakdown from '@/app/components/Breakdown';
import { MARKETPOSTS, ACADEMYPOSTS } from '@/app/constant/constant';



export default function Landing() {
  return (
    <main>
      <Hero /> 
 
      <Academy posts={ACADEMYPOSTS} />
      <WhyLearnForex />
      <Roadmap />
      <Courses />
      <IBSection />
      <Journey />
      <Mentors />
      <CompareTable />
      <Testimonials />
      <Community />
      <BlogGrid posts={MARKETPOSTS} />
      <Breakdown />
      <FAQ />



      <FinalCTA />
    </main>
  );
}