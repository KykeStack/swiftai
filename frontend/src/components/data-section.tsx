import { Component } from 'solid-js'
import DataSubscription from './data-subscription'

const DataSection: Component<{}> = (props) => {
  return (
    <div class='ml-10 mt-10 w-[95%] h-fit flex flex-row bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 md:p-5 m-2 flex flex-col gap-4 w-full'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Abbonamento
        </h3>
        <DataSubscription />
      </div>
    </div>
  )
}

export default DataSection
