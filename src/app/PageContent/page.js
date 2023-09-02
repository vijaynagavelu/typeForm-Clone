'use client'
import { useEffect, useRef, useState } from 'react';


export default function Home({ title, type, options, isActive, upDown, input, setInput, error, setError, currentPage, lastPage, handleLoadNextPage, sendEmail, content }) {

    const contentClasses = `content  ${isActive ? (upDown ? 'active-content' : 'active-content1') : (upDown ? 'inactive-content' : 'inactive-content1')}`;
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


    const [showDropdown, setShowDropdown] = useState(false);
    const handleClickDropDown = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 1000);
    };

    const [submit, setSubmit] = useState('')
    const handleSubmit = () => {
        if (!input) {
            handleLoadNextPage()
            return;
        }
        setSubmit(true);
        setTimeout(() => {
            setSubmit(false);
            handleLoadNextPage(true);
            sendEmail();
        }, 700);
    };


    if (type == 'dropDown') {
        return (
            <main className={`${contentClasses} flex grow-0 flex-col justify-center `}>

                <div className='h-80 z-[50] w-full  bg-black -mt-96'></div>

                <div className={`flex flex-col text-left`}>
                    <div className={`pb-7  z-50  bg-black  flex items-center text-xl font-light`}>
                        <span className="text-xs text-blue-400 pr-px min-w-fit -ml-6 mr-1"> {currentPage + 1} -&gt;</span>{title}
                    </div>
                    <div className="z-[51] bg-black flex justify-between items-center border-b-2 border-slate-200 pb-2">
                        <input onClick={() => { setShowDropdown((prevShowDropdown) => !prevShowDropdown) }} type="email" readOnly ref={inputRef} autoFocus={1 === 1} className="text-xl w-full font-light cursor-pointer focus:outline-none appearance-none bg-transparent" onChange={(e) => { setInput(e.target.value), setError(false) }} value={input} placeholder="Select an option..." />
                        {!showDropdown && <div className='cursor-pointer pr-5' onClick={() => { setShowDropdown((prevShowDropdown) => !prevShowDropdown) }}>
                            <svg height="9" width="14"><path fill='white' d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path></svg>
                        </div>}
                        {showDropdown && <div className='rotate-180 cursor-pointer pl-5' onClick={() => { setShowDropdown((prevShowDropdown) => !prevShowDropdown) }}>
                            <svg height="9" width="14"><path fill='white' d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path></svg>
                        </div>}
                    </div>


                    {!error && <div className={`${showDropdown ? 'text-transparent hidden' : 'opacity-0 animate-dropdown-in'} mt-8 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                        <div onClick={() => { lastPage ? handleSubmit() : handleLoadNextPage() }} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                lastPage ? handleSubmit() : handleLoadNextPage();
                            }
                        }}
                            tabIndex={0} className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${submit ? 'hidden' : ''}  text-base mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800 `}>
                            <span> {lastPage ? 'Submit' : 'OK'}</span>
                            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                ✓
                            </span>
                        </div>
                        <div className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${!submit ? 'hidden' : ''}  text-base mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800`}>
                            <span className={`${lastPage ? '' : 'hidden'}`}>
                                <svg className='animate-spin ' xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="loading"><path fill='white' d="M27.02 22.82a.182.182 1080 1 0 .364 0 .182.182 1080 1 0-.364 0zm-4.018 4.146a.362.362 1080 1 0 .724 0 .362.362 1080 1 0-.724 0zM17.586 29.1a.544.544 1080 1 0 1.088 0 .544.544 1080 1 0-1.088 0zm-5.83-.286a.724.724 1080 1 0 1.448 0 .724.724 1080 1 0-1.448 0zM6.584 26.16a.906.906 1080 1 0 1.812 0 .906.906 1080 1 0-1.812 0zm-3.582-4.512a1.088 1.088 1080 1 0 2.176 0 1.088 1.088 1080 1 0-2.176 0zm-1.344-5.54a1.268 1.268 1080 1 0 2.536 0 1.268 1.268 1080 1 0-2.536 0zm1.106-5.504a1.45 1.45 1080 1 0 2.9 0 1.45 1.45 1080 1 0-2.9 0zm3.318-4.438a1.632 1.632 1080 1 0 3.264 0 1.632 1.632 1080 1 0-3.264 0zm4.872-2.542a1.812 1.812 1080 1 0 3.624 0 1.812 1.812 1080 1 0-3.624 0zm5.472-.158a1.994 1.994 1080 1 0 3.988 0 1.994 1.994 1080 1 0-3.988 0zm5.01 2.254a2.174 2.174 1080 1 0 4.348 0 2.174 2.174 1080 1 0-4.348 0zm3.56 4.234a2.356 2.356 1080 1 0 4.712 0 2.356 2.356 1080 1 0-4.712 0zm1.416 5.484a2.538 2.538 1080 1 0 5.076 0 2.538 2.538 1080 1 0-5.076 0z"></path></svg>
                            </span>
                        </div>
                    </div>}

                    {error && <div className={` ${showDropdown ? 'text-transparent hidden' : ''} mt-8 flex flex-col items-start text-md cursor-pointer font-normal pb-4`}>
                        <div className='flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:drk:bg-opacity-30'>
                            <span className="Boundary-sc-__sc-184gmm6-0 dLVEpr"><svg height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" fill="red" d="M16.3361 17.9998L7.00279 18C5.49294 18 4.52754 16.391 5.23806 15.0588L9.90471 6.30882C10.6576 4.89706 12.6812 4.89706 13.4341 6.30881L18.1008 15.0586C18.8113 16.3908 17.8459 17.9998 16.3361 17.9998ZM11.6694 8.50003C12.2217 8.50003 12.6694 8.94774 12.6694 9.50003V11.5C12.6694 12.0523 12.2217 12.5 11.6694 12.5C11.1171 12.5 10.6694 12.0523 10.6694 11.5V9.50003C10.6694 8.94774 11.1171 8.50003 11.6694 8.50003ZM11.6694 16C12.2217 16 12.6694 15.5523 12.6694 15C12.6694 14.4477 12.2217 14 11.6694 14C11.1171 14 10.6694 14.4477 10.6694 15C10.6694 15.5523 11.1171 16 11.6694 16Z" fillRule="evenodd"></path></svg></span>
                            <span className="inline-block pl-2 text-red-200 ">
                                Please fill this in
                            </span>
                        </div>
                    </div>}

                    <div
                        className={`dropDown  z-10 transition-all pb-2 border-b border-dashed border-b-white ease-in-out 
                         ${showDropdown ? 'opacity-0 -mb-60 transform translate-y-1 duration-500 animate-dropdown-in'
                                : '-mb-64 -mt-4 transform duration-[500ms] -translate-y-96 animate-dropdown-out '
                            } `}>
                        {options.map((option, i) => {
                            return (
                                <div key={i}
                                    onClick={() => { handleClickDropDown(), handleClick(), setInput(option), setError(false) }}
                                    disabled={blinking}
                                    className={` mt-2 text-md cursor-pointer font-light`}>
                                    <div className={`blinking-button ${(blinking && input === option) ? 'blink' : ''} ${(input === option) ? ' border border-white' : ''} flex  justify-between rounded-md  px-2.5 py-2 transition-colors bg-gray-200 bg-opacity-10   hover:bg-gray-800  `}>
                                        <span> {option} </span>
                                        <span className={` ${(input === option) ? '' : 'hidden'} inline-block transition-transform  motion-reduce: transform-none`}>
                                            ✓
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={`${showDropdown ? 'text-transparent' : 'hidden'} mt-4 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                        <div className={` ${showDropdown ? 'bg-transparent' : ''} flex mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors `}>
                            <span >OK {' '}</span>
                            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                ✓
                            </span>
                        </div>
                        <div className="text-xs">press Enter ↵</div>
                    </div>
                </div>


            </main>
        )
    }

    if (type == "option") {
        return (
            <main className={`${contentClasses} flex`}>

                <div className={`flex flex-col w-full text-left`}>
                    <div className={`mb-10 flex items-center text-xl font-light`}>
                        <span className="text-xs text-blue-400 pr-px min-w-fit -ml-6 mr-1"> {currentPage + 1} -&gt;</span>{title}
                    </div>

                    {options.map((option, i) => {
                        return (
                            <div key={i}
                                onClick={() => { handleClick(), setInput(option), setError(false) }}
                                disabled={blinking}
                                className={` w-60 text-md cursor-pointer font-light`}>
                                <div className={`blinking-button ${(blinking && input === option) ? 'blink' : ''} ${(input === option) ? ' border border-white' : ''} flex mb-2 justify-between rounded  px-2.5 py-2 transition-colors bg-gray-200 bg-opacity-10   hover:bg-gray-800 `}>
                                    <span> <span className={`${(input === option) ? 'text-black bg-white' : ''} font-semibold text-sm border border-indigo-100 px-2 py-1 mr-3`}>{alphabet[i]}</span> {option} </span>
                                    <span className={` ${(input === option) ? '' : 'hidden'} inline-block px-2 transition-transform  motion-reduce: transform-none`}>
                                        ✓
                                    </span>
                                </div>
                            </div>
                        )
                    })}


                    {!error && <div className={`mt-8 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                        <div onClick={() => { lastPage ? handleSubmit() : handleLoadNextPage() }} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                lastPage ? handleSubmit() : handleLoadNextPage();
                            }
                        }}
                            tabIndex={0} className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${submit ? 'hidden' : ''}  text-base mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800 `}>
                            <span> {lastPage ? 'Submit' : 'OK'}</span>
                            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                ✓
                            </span>
                        </div>
                        <div className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${!submit ? 'hidden' : ''}  text-base mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800`}>
                            <span className={`${lastPage ? '' : 'hidden'}`}>
                                <svg className='animate-spin ' xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="loading"><path fill='white' d="M27.02 22.82a.182.182 1080 1 0 .364 0 .182.182 1080 1 0-.364 0zm-4.018 4.146a.362.362 1080 1 0 .724 0 .362.362 1080 1 0-.724 0zM17.586 29.1a.544.544 1080 1 0 1.088 0 .544.544 1080 1 0-1.088 0zm-5.83-.286a.724.724 1080 1 0 1.448 0 .724.724 1080 1 0-1.448 0zM6.584 26.16a.906.906 1080 1 0 1.812 0 .906.906 1080 1 0-1.812 0zm-3.582-4.512a1.088 1.088 1080 1 0 2.176 0 1.088 1.088 1080 1 0-2.176 0zm-1.344-5.54a1.268 1.268 1080 1 0 2.536 0 1.268 1.268 1080 1 0-2.536 0zm1.106-5.504a1.45 1.45 1080 1 0 2.9 0 1.45 1.45 1080 1 0-2.9 0zm3.318-4.438a1.632 1.632 1080 1 0 3.264 0 1.632 1.632 1080 1 0-3.264 0zm4.872-2.542a1.812 1.812 1080 1 0 3.624 0 1.812 1.812 1080 1 0-3.624 0zm5.472-.158a1.994 1.994 1080 1 0 3.988 0 1.994 1.994 1080 1 0-3.988 0zm5.01 2.254a2.174 2.174 1080 1 0 4.348 0 2.174 2.174 1080 1 0-4.348 0zm3.56 4.234a2.356 2.356 1080 1 0 4.712 0 2.356 2.356 1080 1 0-4.712 0zm1.416 5.484a2.538 2.538 1080 1 0 5.076 0 2.538 2.538 1080 1 0-5.076 0z"></path></svg>
                            </span>
                        </div>
                    </div>}


                    {error && <div className={`mt-8 flex flex-col items-start text-md cursor-pointer font-normal pb-4`}>
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
        <main className={`${contentClasses}`}>

            <div className={`flex flex-col text-left`}>
                <div className={`${content ? 'mb-4' : 'mb-8'} flex items-center text-xl font-light`}>
                    <span className="text-xs text-blue-400 pr-px min-w-fit -ml-6 mr-1"> {currentPage + 1}-&gt;</span>{title}
                </div>

                {content && <div className='mb-4'>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>}

                <div className="bg-transparent border-b-2 border-slate-200 pb-2">
                    <input onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            lastPage ? handleSubmit() : handleLoadNextPage();
                        }
                    }} ref={inputRef} autoFocus={true} className=" w-full text-2xl font-light focus:outline-none appearnce-none bg-transparent" onChange={(e) => { setInput(e.target.value), setError(false) }} value={input} placeholder="Type your answer here..." />
                </div>

                {!error && <div className={`mt-8 flex flex-col items-start text-lg cursor-pointer font-semibold pb-4`}>
                    <div className='flex gap-4 items-center'>
                        <div onClick={() => { lastPage ? handleSubmit() : handleLoadNextPage() }} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                lastPage ? handleSubmit() : handleLoadNextPage();
                            }
                        }}
                            tabIndex={0} className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${submit ? 'hidden' : ''}  text-base mb-0 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800 `}>
                            <span> {lastPage ? 'Submit' : 'OK'}</span>
                            <span className="inline-block pl-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                ✓
                            </span>
                        </div>
                        <div className="text-xs">{lastPage ? '' : 'press Enter ↵'} </div>
                    </div>


                    <div className={`flex  ${lastPage ? 'w-full justify-center' : ''} ${!submit ? 'hidden' : ''}  text-base mb-4 group rounded-lg border border-transparent px-2.5 py-2 transition-colors bg-gray-100 bg-opacity-10 hover:bg-gray-800`}>
                        <span className={`${lastPage ? '' : 'hidden'}`}>
                            <svg className='animate-spin ' xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="loading"><path fill='white' d="M27.02 22.82a.182.182 1080 1 0 .364 0 .182.182 1080 1 0-.364 0zm-4.018 4.146a.362.362 1080 1 0 .724 0 .362.362 1080 1 0-.724 0zM17.586 29.1a.544.544 1080 1 0 1.088 0 .544.544 1080 1 0-1.088 0zm-5.83-.286a.724.724 1080 1 0 1.448 0 .724.724 1080 1 0-1.448 0zM6.584 26.16a.906.906 1080 1 0 1.812 0 .906.906 1080 1 0-1.812 0zm-3.582-4.512a1.088 1.088 1080 1 0 2.176 0 1.088 1.088 1080 1 0-2.176 0zm-1.344-5.54a1.268 1.268 1080 1 0 2.536 0 1.268 1.268 1080 1 0-2.536 0zm1.106-5.504a1.45 1.45 1080 1 0 2.9 0 1.45 1.45 1080 1 0-2.9 0zm3.318-4.438a1.632 1.632 1080 1 0 3.264 0 1.632 1.632 1080 1 0-3.264 0zm4.872-2.542a1.812 1.812 1080 1 0 3.624 0 1.812 1.812 1080 1 0-3.624 0zm5.472-.158a1.994 1.994 1080 1 0 3.988 0 1.994 1.994 1080 1 0-3.988 0zm5.01 2.254a2.174 2.174 1080 1 0 4.348 0 2.174 2.174 1080 1 0-4.348 0zm3.56 4.234a2.356 2.356 1080 1 0 4.712 0 2.356 2.356 1080 1 0-4.712 0zm1.416 5.484a2.538 2.538 1080 1 0 5.076 0 2.538 2.538 1080 1 0-5.076 0z"></path></svg>
                        </span>
                    </div>
                </div>}


                {error && <div className={`mt-8 flex flex-col items-start text-md cursor-pointer font-normal pb-4`}>
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
