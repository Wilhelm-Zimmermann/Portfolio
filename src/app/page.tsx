"use client";

import { About } from '@/components/About'
import { TechStack } from '@/components/TechStack';
import RootLayout from './layout';
import Sidebar from '@/components/Sidebar';
import Resumo from '@/components/Resumo';
import Principal from "@/components/Principal";
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState<string>("Home");
  
  return (
    <RootLayout>
      <div className='flex flex-col md:flex-row w-full h-screen'>
        <Sidebar selected={selected}/>
        <div className='w-full h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-terciary scrollbar-track-gray-800'>
          <Principal setSelected={setSelected}/>
          <About setSelected={setSelected}/>
          <TechStack setSelected={setSelected}/>
          <Resumo setSelected={setSelected}/>
          <Footer />
        </div>
      </div>
    </RootLayout>
  )
}
