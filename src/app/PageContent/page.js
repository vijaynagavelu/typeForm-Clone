import React, { useEffect, useRef, useState } from 'react';

export default function Home({ title, type, options, isActive, input, setInput, error, setError, currentPage }) {

    const contentClasses = `content ${isActive ? 'active-content' : 'inactive-content'}`;
    const alphabet = ['A', 'B', 'C', 'D', 'E'];

    const [blinking, setBlinking] = useState(false);

    const handleClick = () => {
        if (!blinking) {
            setBlinking(true);

            setTimeout(() => {
                setBlinking(false);
            }, 900); // Adjust the duration as needed
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        if (isActive && inputRef.current) {
            inputRef.current.focus(); // Focus on the input when the component mounts
        }
    }, [isActive]);


    if (type == "option") {
        return (
            <main className={`${contentClasses} flex h-screen  flex-col items-center justify-center  px-14 md:p-0`}>

                <div className={`flex flex-col w-full md:w-3/4 lg:w-3/4 xl:w-3/5 text-left`}>
                    <div className={`mb-3 flex items-center -ml-6 gap-1 text-2xl font-normal`}>
                        <span className="text-xs text-blue-400 pr-px min-w-fit"> {currentPage + 1} -&gt;</span>{title}
                    </div>


                    {options.map((option, i) => {
                        return (
                            <div key={i}
                                onClick={() => { handleClick(), setInput(option), setError(false) }}
                                disabled={blinking}
                                className={` mt-4 w-60 text-md cursor-pointer font-normal`}>
                                <div className={`blinking-button ${(blinking && input === option) ? 'blink' : ''} flex mb-4 justify-between rounded-lg  px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10   hover:bg-gray-100 -700 hover:dark:bg-neutral-800 `}>
                                    <span> <span className={`${(input === option) ? 'text-black bg-white' : ''} font-semibold text-sm border border-indigo-100 px-2 py-1 mr-3`}>{alphabet[i]}</span> {option} </span>
                                    <span className={` ${(input === option) ? '' : 'hidden'} inline-block px-2 transition-transform  motion-reduce:transform-none`}>
                                        ✓
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                    {!error && <div className={`mt-4 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                        <div className='flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:drk:bg-opacity-30'>
                            <span >OK {' '}</span>
                            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                ✓
                            </span>
                        </div>
                    </div>}





                    {error && <div className={`mt-4 flex flex-col items-start text-md cursor-pointer font-normal pb-4`}>
                        <div className='flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:drk:bg-opacity-30'>
                            <span className="Boundary-sc-__sc-184gmm6-0 dLVEpr"><svg height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" fill="red" d="M16.3361 17.9998L7.00279 18C5.49294 18 4.52754 16.391 5.23806 15.0588L9.90471 6.30882C10.6576 4.89706 12.6812 4.89706 13.4341 6.30881L18.1008 15.0586C18.8113 16.3908 17.8459 17.9998 16.3361 17.9998ZM11.6694 8.50003C12.2217 8.50003 12.6694 8.94774 12.6694 9.50003V11.5C12.6694 12.0523 12.2217 12.5 11.6694 12.5C11.1171 12.5 10.6694 12.0523 10.6694 11.5V9.50003C10.6694 8.94774 11.1171 8.50003 11.6694 8.50003ZM11.6694 16C12.2217 16 12.6694 15.5523 12.6694 15C12.6694 14.4477 12.2217 14 11.6694 14C11.1171 14 10.6694 14.4477 10.6694 15C10.6694 15.5523 11.1171 16 11.6694 16Z" fillRule="evenodd"></path></svg></span>
                            <span className="inline-block pl-2 text-red-200 ">
                                Please fill this in
                            </span>
                        </div>
                    </div>}

                </div>


            </main >
        )
    }

    return (
        <main className={`${contentClasses} flex h-screen  flex-col items-center justify-center  px-14 md:p-0`}>

            {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            </div> */}

            <div className={`flex flex-col w-full md:w-3/4 lg:w-3/4 xl:w-3/5 text-left`}>
                <div className={`mb-3 flex items-center -ml-6 gap-1 text-2xl font-normal`}>
                    <span className="text-xs text-blue-400 pr-px min-w-fit"> {currentPage + 1} -&gt;</span>{title}
                </div>
                <div className="bg-transparent border-b-2 border-slate-200 pb-2">
                    <input type="email" ref={inputRef} autoFocus={1 === 1} className="text-xl focus:outline-none appearance-none bg-transparent" onChange={(e) => { setInput(e.target.value), setError(false) }} value={input} placeholder="Type your answer here..." />
                </div>
                {!error && <div className={`mt-4 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                    <div className='flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:drk:bg-opacity-30'>
                        <span >OK {' '}</span>
                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            ✓
                        </span>
                    </div>
                    <div className="text-xs">press Enter ↵</div>
                </div>}

                {error && <div className={`mt-4 flex flex-col items-start text-md cursor-pointer font-normal pb-4`}>
                    <div className='flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:drk:bg-opacity-30'>
                        <span className="Boundary-sc-__sc-184gmm6-0 dLVEpr"><svg height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" fill="red" d="M16.3361 17.9998L7.00279 18C5.49294 18 4.52754 16.391 5.23806 15.0588L9.90471 6.30882C10.6576 4.89706 12.6812 4.89706 13.4341 6.30881L18.1008 15.0586C18.8113 16.3908 17.8459 17.9998 16.3361 17.9998ZM11.6694 8.50003C12.2217 8.50003 12.6694 8.94774 12.6694 9.50003V11.5C12.6694 12.0523 12.2217 12.5 11.6694 12.5C11.1171 12.5 10.6694 12.0523 10.6694 11.5V9.50003C10.6694 8.94774 11.1171 8.50003 11.6694 8.50003ZM11.6694 16C12.2217 16 12.6694 15.5523 12.6694 15C12.6694 14.4477 12.2217 14 11.6694 14C11.1171 14 10.6694 14.4477 10.6694 15C10.6694 15.5523 11.1171 16 11.6694 16Z" fillRule="evenodd"></path></svg></span>
                        <span className="inline-block pl-2 text-red-200 ">
                            Please fill this in
                        </span>
                    </div>
                </div>}

            </div>


        </main>
    )
}
