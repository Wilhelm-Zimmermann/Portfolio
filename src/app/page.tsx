import { About } from '@/components/About'
import { TechStack } from '@/components/TechStack';
import RootLayout from './layout';
import Sidebar from '@/components/Sidebar';
import Resumo from '@/components/Resumo';
import Principal from "@/components/Principal";

export default function Home() {
  return (
    <RootLayout>
      <div className='flex w-full h-full'>
        <Sidebar />
        <div className='w-full h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-terciary scrollbar-track-gray-800'>
          <Principal />
          <About />
          <TechStack />
          <Resumo />
        </div>
      </div>
    </RootLayout>
  )
}
