import React, { useState } from 'react';

// Oxaley-FAQ.jsx
// Single-file React component styled with Tailwind CSS.
// Drop into a Create React App / Vite React project with Tailwind configured.

const FAQ_ITEMS = [
  { q: 'What services does Oxaley offer?', a: 'We provide product & UI/UX design, brand strategy, and web development.' },
  { q: 'How does Oxaley work with clients?', a: 'We run discovery workshops, rapid prototyping, and phased delivery with clear milestones.' },
  { q: 'How long does it take to complete a design project?', a: 'Typical projects range from 4–12 weeks depending on scope.' },
  { q: 'Does Oxaley accept design projects for mobile apps?', a: 'Yes — we design native & cross-platform mobile experiences.' },
  { q: 'How to contact Oxaley to start the project?', a: 'Email hello@oxaley.example or use the contact form on the site.' },
  { q: 'How much does it cost to use design services in Oxaley?', a: 'Pricing depends on scope — we provide estimations after discovery.' },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="  items-start">
          {/* Left intro */}
          <div className="">
            <h1 className="font-extrabold text-6xl lg:text-7xl tracking-tight leading-none">
              Frequently
              <br />
              <span className="text-gray-400">asked <i class="bi bi-dash-lg text-7xl"></i>
</span>
              <div className='flex'>              <span className=" text-7xl lg:text-8xl mt-2  mr-auto">questions </span><h1 className="max-w-md text-sm text-gray-400 mt-4">
              You can find explanations of our products, services, policies and anything else you may need to know.
            </h1></div>

            </h1>

           </div>
           
 <hr class="border-0 h-[1px] my-10 bg-[#353333] rounded-full mx-4" />

          {/* Right accordion */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg bg-gray-900/60 border border-gray-800 p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <button
                        onClick={() => setOpenIndex(open ? null : idx)}
                        className="text-left w-full flex items-center justify-between gap-4"
                        aria-expanded={open}
                      >
                        <span className="text-sm text-gray-200">{item.q}</span>
                        <span className="ml-4">
                          {/* plus/minus icon */}
                          <svg
                            className={`w-5 h-5 transform ${open ? 'rotate-45' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                      {open && (
                        <div className="mt-3 text-gray-400 text-sm">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
       <div className='grid grid-cols-3'>
               <div className="mt-20 text-gray-500 text-xs">
              © 2024 Oxaley. All Rights Reserved.
              </div>
            
              <div className="mt-20 grid grid-cols-3 ml-0 gap-0 ">
              {/** simple social icon placeholders */}
              <button className="     text-gray-400"><i className='bi bi-youtube'> </i></button>
              <button className="    text-gray-400"><i className='bi bi-twitter-x'> </i></button>
              <button className="     text-gray-400"><i className='bi bi-instagram'> </i></button>
              
            </div>
            <div className="mt-20 text-xs text-gray-500">Terms & Conditions  |  Privacy Policy</div>

          </div>

          </div>
        </div>
      </div>

      {/* Footer with giant brand wordmark */}
      <footer className="border-t border-gray-800 py-10">
        <div className="max-w-6xl mx-auto grid px-6">
         
          
            
            <div className="text-7xl justify-self-center lg:text-9xl font-extrabold tracking-tight text-white opacity-95">OXALEY</div>
       
        </div>
      </footer>
    </div>
  );
}
