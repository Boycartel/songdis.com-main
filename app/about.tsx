"use client";
import MainLayout from './layouts/main-layout';
import About from '../components/About';

export default function Home() {
  return (
    <MainLayout>
      <main>
        <div className="w-full">
          <div className="relative w-full px-3 pb-20 pt-36 sm:pt-40 banner-image">
            <div className="relative z-10 text-center">
              <About />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}


