'use client'
import { useState, useEffect } from 'react';
import PageContent from '../app/PageContent/page';

export default function Home() {

  const pages = [
    {
      title: 'Email*',
      titleValue: "",
      type: 'question',
      options: [],
      content: 'This is the content of page 1.',
    }, {
      title: 'Full Name',
      titleValue: "",
      type: 'question',
      options: [],
      content: 'This is the content of page 2.',
    }, {
      title: 'Highest Level of Education*',
      titleValue: "",
      type: 'option',
      options: ["Grade 12", "Bachelors", 'PhD', "Masters Degree", "Diploma"],
      content: 'This is the content of page 2.',
    }, {
      title: 'Highest Level of Education*',
      titleValue: "",
      type: 'dropDown',
      options: ["Grade 12", "Bachelors", 'PhD', "Masters Degree", "Diploma"],
      content: 'This is the content of page 2.',
    }, {
      title: 'Did you pay your first year tuition?*',
      titleValue: "",
      type: 'option',
      options: ["Yes", "No"],
      content: 'This is the content of page 2.',
    }
  ];

  const [start, setStart] = useState(false);
  const [updatedPages, setUpdatedPages] = useState([...pages]);
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [upDown, setUpDown] = useState(true);
  const [error, setError] = useState('');
  const [creditPage, setCreditPage] = useState(false);

  const [showNewPage, setShowNewPage] = useState(false);
  const [showNewPage1, setShowNewPage1] = useState(false);
  const [showFadeOut, setShowFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setShowFadeOut(true); // Fade out
    }, 1000); // After 1 second, trigger the fade-out

    return () => clearTimeout(fadeOutTimeout);
  }, []);

  useEffect(() => {
    if (showFadeOut) {
      const fadeInTimeout = setTimeout(() => {
        setShowNewPage(true)
      }, 400);
      const fadeInTimeout1 = setTimeout(() => {
        setShowNewPage(true)
        setShowNewPage1(true);
      }, 500); // 200ms gap after fade-out
      return () => { clearTimeout(fadeInTimeout), clearTimeout(fadeInTimeout1) };
    }
  }, [showFadeOut]);


  const handleLoadNextPage = (value) => {
    console.log(value);
    if (!input) {
      setError(true);
      return console.log("error")
    }
    if (value) {
      setCreditPage(true);
      return;
    }
    const updatedPagesCopy = [...updatedPages];
    updatedPagesCopy[currentPage].titleValue = input;

    setUpDown(true);
    setFade(false); // Trigger fade-out effect

    setTimeout(() => {
      setError(false);
      setUpdatedPages(updatedPagesCopy);
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      if (updatedPages[currentPage + 1].titleValue) {
        setInput(updatedPages[currentPage + 1].titleValue)
      } else {
        setInput('');
      }
      setFade(true); // Trigger fade-in effect
    }, 300); // Adjust the delay to match your CSS transition duration
    console.log(updatedPages, currentPage)
  };

  const handleLoadPreviousPage = () => {
    if (currentPage === 0) {
      // If on the first page, return or handle as needed
      return;
    }
    const updatedPagesCopy = [...updatedPages];
    updatedPagesCopy[currentPage].titleValue = input;

    setUpDown(false);
    setFade(false); // Trigger fade-out effect

    setTimeout(() => {
      setError(false);
      setUpdatedPages(updatedPagesCopy);
      setCurrentPage((prevPage) => (prevPage - 1)); // Move to the previous page
      // Update input field based on the previous page's value
      setInput(updatedPagesCopy[currentPage - 1].titleValue || '');

      setFade(true); // Trigger fade-in effect
    }, 300); // Adjust the delay to match your CSS transition duration
  };


  if (creditPage) {
    return (
      <main className="flex h-screen flex-col text-center  items-center justify-center ">


        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>

        <div className='pb-2 text-xl'>Follow us on! </div>

        <div className="flex gap-2 text-base md:text-md lg:text-xl justify-center md:w-3/4 lg:w-3/5 ">
          <a aria-label="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpzn3t0uhyua.typeform.com%2Fto%2FYbQHCayo" rel="noopener noreferrer" target="_blank" title="Share on Facebook"><span aria-hidden="true" className="Boundary-sc-__sc-184gmm6-0 ebIlcb"><svg height="32" version="1" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h32v32H0z" fill="#FFF"></path><path d="M0 0v32h17V20h-4v-5h4v-5c0-3 3-5 6-5h4v4h-3l-2 2v4h5l-1 5h-4v12h10V0H0z" fill="#3A559F"></path></g></svg></span></a>
          <a aria-label="Share on Twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpzn3t0uhyua.typeform.com%2Fto%2FYbQHCayo" rel="noopener noreferrer" target="_blank" title="Share on Twitter"><span aria-hidden="true" className="Boundary-sc-__sc-184gmm6-0 ebIlcb"><svg height="32" version="1" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h32v32H0z" fill="#50ABF1"></path><path d="M4 24l8 2a14 14 0 0 0 13-14l3-3-3 1 2-3-2 1h-1a5 5 0 0 0-8 5c-1 0-6-1-10-5 0 0-2 3 1 6l-2-1s0 4 4 5H7s1 3 4 4c0 0-3 2-7 2z" fill="#FFF"></path></g></svg></span></a>
          <a aria-label="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpzn3t0uhyua.typeform.com%2Fto%2FYbQHCayo" rel="noopener noreferrer" target="_blank" title="Share on LinkedIn"><span aria-hidden="true" className="Boundary-sc-__sc-184gmm6-0 ebIlcb"><svg height="32" version="1" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h32v32H0z" fill="#0084B1"></path><g fill="#FFF"><path d="M8 5c1 0 2 1 2 3l-2 2c-2 0-3-1-3-2 0-2 1-3 3-3zM9 27H6l-1-1V13l1-1h3l1 1v13l-1 1zM27 17c0-3-2-5-5-5h-1a5 5 0 0 0-4 2v-1-1h-4v15h4v-8c0-2 1-3 3-3a3 3 0 0 1 3 3v8h4V17z"></path></g></g></svg></span></a>
        </div>

        <div className='flex absolute bottom-0 justify-center items-end h-14 w-full bg-gray-800'>
          <div className=' w-68 px-4 py-2 bg-indigo-800 mb-2 rounded' >
            Thank you for your Submission
          </div>
        </div>
      </main >
    )
  }

  if (!start) {
    return (
      <main className="flex h-screen flex-col text-center items-center justify-center p-2">

        <div className="relaive flex absolute items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>

        <div className={`fade-out-container ${showFadeOut ? 'fade-out' : ''} pb-2 mb-4 text-xl`}>
          <p className='text-sm'>powered by</p>
          <p className='mt-px'>Next.js Forms</p>
        </div>

        {showNewPage ? (
          <div className={`fade-in-container ${showNewPage1 ? 'fade-in' : ''}  md:w-3/4 lg:w-2/3`}>

            <div className="flex flex-col text-base md:text-md items-center lg:text-xl text-center w-full ">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Customized SOP Generator
              </h2>
              <p className={`m-4 opacity-50`}>
                Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs.
              </p>
              <p className={`m-6   opacity-50`}>
                If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us: https://effizient-immigration-inc.square.site/s/shop
              </p>
              <div className={`group  mt-3 w-full flex justify-center  text-xl cursor-pointer font-semibold`}>
                <div className='flex bg-slate-900 w-24 rounded-lg border border-transparent pl-2.5  py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'>
                  <span className='pr-1.5' onClick={() => { setStart(true) }}>Start</span>
                  <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`ProgressTrack fade-out-container ${showFadeOut ? 'fade-out' : ''}`} role="progressbar" aria-label="Form progress">
            <div className="ProgressFill"></div>
          </div>
        )}
      </main>
    )
  }

  return (
    <main className="flex min-w-[360px] overflow-x-auto  h-screen flex-col items-center justify-center p-10">

      < div className="app flex grow items-center w-full md:w-3/4 lg:w-2/3 ">
        <PageContent
          title={pages[currentPage].title}
          type={updatedPages[currentPage].type}
          options={updatedPages[currentPage].options}
          currentPage={currentPage}
          lastPage={pages.length === (currentPage + 1)}
          setInput={setInput}
          input={input}
          isActive={fade}
          upDown={upDown}
          error={error}
          setError={setError}
          handleLoadNextPage={handleLoadNextPage}
        // content={pages[currentPage].content}
        />
      </div>

      <div className=' cursor-pointer rounded fixed bottom-3 right-2 bg-slate-700 '>
        <button className=' border-r border-slate-400 p-2.5' onClick={() => { handleLoadNextPage() }}>
          <svg height="9" width="14"><path fill='white' d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path></svg>
        </button>
        <button className=' rotate-180 p-2.5' onClick={() => { handleLoadPreviousPage() }}>
          <svg height="9" width="14"><path fill='white' d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path></svg>
        </button>
      </div>

    </main >
  )
}
