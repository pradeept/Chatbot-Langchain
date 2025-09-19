import FormComponent from "@/components/formComponent";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

async function page() {
  return (
    <main className='relative min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-start py-10 px-4'>
      <div className='w-full max-w-2xl mx-auto flex flex-col items-center'>
        <div className='mb-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold  drop-shadow-lg mb-2 tracking-tight'>
            LingoGO <span className='inline-block'>🚀</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 font-medium'>
            Powered by Langchain and Perplexity
          </p>
        </div>
        <a
          href='https://github.com/pradeept/LingoGo'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-slate-200 rounded p-1 absolute right-5 md:right-10'
        >
          <IconBrandGithub size={32} />
        </a>
        <FormComponent />
      </div>
    </main>
  );
}

export default page;
