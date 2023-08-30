'use client'
import React, { useState } from 'react';
import PageContent from '../app/PageContent/page';

export default function Home() {

  const pages = [
    {
      title: 'Email*',
      titleValue: "",
      type: 'question',
      options: [],
      content: 'This is the content of page 1.',
    },
    {
      title: 'Full Name',
      titleValue: "",
      type: 'question',
      options: [],
      content: 'This is the content of page 2.',
    },
    {
      title: 'Highest Level of EducationThis question is required.',
      titleValue: "",
      type: 'option',
      options: ["Grade 12", "Bachelors", 'PhD', "Masters Degree", "Diploma"],
      content: 'This is the content of page 2.',
    }
  ];


  const [updatedPages, setUpdatedPages] = useState([...pages]);
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [error, setError] = useState('');


  const handleLoadNextPage = () => {
    if (!input) {
      setError(true);
      return console.log("error")
    }

    const updatedPagesCopy = [...updatedPages];
    updatedPagesCopy[currentPage].titleValue = input;

    setFadeIn(false); // Trigger fade-out effect

    setTimeout(() => {
      setUpdatedPages(updatedPagesCopy);
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      console.log(updatedPages[currentPage + 1].titleValue)
      if (updatedPages[currentPage + 1].titleValue) {
        setInput(updatedPages[currentPage + 1].titleValue)
      } else {
        setInput('');
      }
      setFadeIn(true); // Trigger fade-in effect
    }, 240); // Adjust the delay to match your CSS transition duration
    console.log(updatedPages, currentPage)
  };


  return (

    <div className="app">
      <PageContent
        title={pages[currentPage].title}
        type={updatedPages[currentPage].type}
        options={updatedPages[currentPage].options}
        currentPage={currentPage}
        setInput={setInput}
        input={input}
        isActive={fadeIn}
        error={error}
        setError={setError}
      // content={pages[currentPage].content}
      />
      <button onClick={handleLoadNextPage}>Load Next Page</button>
    </div>

    // <main className="flex h-screen   flex-col items-center justify-center p-10">
    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //   </div>

    //   <div className="flex flex-col  text-center w-3/5 ">
    //     <h2 className={`mb-3 text-2xl font-semibold`}>
    //       Customized SOP Generator
    //     </h2>
    //     <p className={`m-6  text-xl opacity-50`}>
    //       Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs.

    //     </p>
    //     <p className={`m-0  text-xl opacity-50`}>
    //       If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us: https://effizient-immigration-inc.square.site/s/shop
    //     </p>
    //     <div onClick={() => { window.location.href = '/emailPage' }} className={`group mt-3 w-full flex justify-center  text-2xl cursor-pointer font-semibold`}>
    //       <div className='flex w-28 rounded-lg border border-transparent pl-2.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'>
    //         <span>Start {' '}</span>
    //         <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </div>
    //     </div>
    //   </div>



    // </main>
  )
}
