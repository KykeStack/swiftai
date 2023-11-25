import { Component, createSignal, onMount } from 'solid-js'

const DateAndTime: Component<{}> = (props) => {
  const [dateUpdated, setDateUpdated] = createSignal('')
  const [hourUpdated, setHourUpdated] = createSignal('')

  function updateDate () {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`

    return dateString
  }
  function getCurrentTime () {
    const currentDate = new Date()
    const hours = currentDate.getHours().toString().padStart(2, '0')
    const minutes = currentDate.getMinutes().toString().padStart(2, '0')
    const seconds = currentDate.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }
  onMount(() => { setInterval(() => { setDateUpdated(updateDate()); setHourUpdated(getCurrentTime()) }, 1000) })
  return (
    <div class='ml-10 mt-10 w-[95%] h-fit flex flex-row bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 md:p-5 m-2 flex flex-col gap-4 w-full'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Data e ora
        </h3>
        <div class='flex flex-row w-full h-full items-center gap-4'>
          <div class='text-2xl font-bold text-gray-800 dark:text-white shadow-xl rounded-3xl w-fit h-32 p-4 items-center flex  bg-gray-200'>
            {dateUpdated()}
          </div>
          <div class='text-2xl font-bold text-gray-800 dark:text-white shadow-xl rounded-3xl w-fit h-32 p-4 items-center flex  bg-gray-200'>
            {hourUpdated()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateAndTime
