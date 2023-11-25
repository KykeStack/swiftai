import { Component, createSignal } from 'solid-js'
import './styles/main.css'

const SearchConfigBar: Component<{}> = (props) => {
  const [clickFunctionality, setclickFunctionality] = createSignal('Volpe')
  const handelInput = (e: Event) => {
    // @ts-ignore
    setclickFunctionality(e.target?.value ?? 'Volpe')
  }

  return (
    <div class='ml-10 mt-10 w-full h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 md:p-5 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Ricerca Elementi
        </h3>
        <div>
          <div class='relative flex gap-2'>
            <svg class='flex-shrink-0 h-[1.6rem] w-[1.6rem] text-gray-400 ml-[32rem] absolute top-[.7rem] right-4' xmlns='http://www.w3.org/2000/svg' width='33' height='33' viewBox='0 0 33 33' fill='none'>
              <path d='M12.3748 0C5.54081 0 0 5.54229 0 12.3757C0 19.209 5.54081 24.7504 12.3748 24.7504C19.2087 24.7504 24.7504 19.209 24.7504 12.3757C24.7504 5.54229 19.2087 0 12.3748 0ZM12.3748 3.09347C17.4928 3.09347 21.6561 7.25758 21.6561 12.3757C21.6561 17.4931 17.4928 21.6561 12.3748 21.6561C7.25669 21.6561 3.09347 17.4931 3.09347 12.3757C3.09347 7.25758 7.25669 3.09347 12.3748 3.09347ZM12.3748 5.15608C8.39498 5.15608 5.15608 8.39466 5.15608 12.3757H7.21869C7.21869 9.53235 9.53207 7.21957 12.3748 7.21957V5.15608ZM24.5223 20.1469C23.3943 21.902 21.9023 23.3952 20.1478 24.5232L27.7192 32.0938C28.9275 33.3021 30.8879 33.3021 32.0938 32.0938C33.3021 30.8879 33.3021 28.9287 32.0938 27.7192L24.5223 20.1469Z' fill='#E36E40' />
            </svg>
            <input onChange={(e) => handelInput(e)} type='text' id='hs-search-box-with-loading-5' name='hs-search-box-with-loading-5' class='py-3 px-4 pl-[25%] z-[1] ps-11 block w-full border-[#D9D9D9] shadow-sm rounded-2xl border-[3px]  text-sm focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Input search' />
            <div class='absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4'>

              <span class='z-[4] cursor-pointer max-w-40 inline-flex items-center justify-center gap-4 py-1 ps-3 pe-2 rounded-xl text-xl ffitont-medium bg-[#E36E40] text-[#FFF] dark:bg-blue-800/30 dark:text-blue-500'>
                {clickFunctionality()}
                <button type='button' class='cursor-pointer flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full hover:bg-blue-200 focus:outline-none focus:bg-blue-200 focus:text-blue-500 dark:hover:bg-blue-900'>
                  <span class='sr-only'>Remove badge</span>
                  <svg class='flex-shrink-0 h-6 w-6' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                    <path d='M15 9L9 15' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                    <path d='M9 9L15 15' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                  </svg>
                </button>
              </span>

              <div class='border-t sm:border-t-0 sm:border-s bg-black border-gray-200 w-fi h-[60%] m-2' />

            </div>
          </div>
        </div>
        <div class='inline-flex items-center mt-4 gap-x-2 text-xl font-semibold rounded-lg border border-transparent text-blackdisabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          Add
          <svg class='flex-shrink-0 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m9 18 6-6-6-6' /></svg>
          <button onClick={() => setclickFunctionality('Lupo')} class='inline-flex items-center justify-center gap-4 p-1 rounded-xl text-xl w-20 ffitont-medium bg-[#E36E40] text-[#FFF] dark:bg-blue-800/30 dark:text-blue-500'>
            Lupo
          </button>
          <button onClick={() => setclickFunctionality('Rana')} class='inline-flex items-center justify-center gap-4 p-1 rounded-xl text-xl w-20  ffitont-medium bg-[#E36E40] text-[#FFF] dark:bg-blue-800/30 dark:text-blue-500'>
            Rana
          </button>
          <button onClick={() => setclickFunctionality('Bisci')} class='inline-flex items-center justify-center gap-4 p-1 rounded-xl text-xl w-20  ffitont-medium bg-[#E36E40] text-[#FFF] dark:bg-blue-800/30 dark:text-blue-500'>
            Bisci
          </button>
          <button onClick={() => setclickFunctionality('Cane')} class='inline-flex items-center justify-center gap-4 p-1 rounded-xl text-xl w-20 ffitont-medium bg-[#E36E40] text-[#FFF] dark:bg-blue-800/30 dark:text-blue-500'>
            Cane
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchConfigBar
