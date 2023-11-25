import { Component } from 'solid-js'

const ProfileButton: Component<{}> = (props) => {
  return (
    <div id='popover-user-profile' role='tooltip' class='absolute -right-8 top-0 z-[99999] w-fit text-sm text-gray-500'>
      <div class='p-3 flex flex-row gap-2'>
        <div class='flex flex-row items-center justify-between mb-2'>
          <div class='text-base font-semibold mr-4 leading-none text-gray-900 dark:text-white'>
            <h1 class='text-black text-3xl not-italic font-bold'>Ciao Nicola!</h1>
            <p class='ml-2 text-black not-italic font-normal'>vai al profilo</p>
          </div>
          <a href='#'>
            <img class='w-10 h-10 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-1.jpg' alt='Jese Leos' />
          </a>
          <svg class='ml-2' xmlns='http://www.w3.org/2000/svg' width='14' height='11' viewBox='0 0 14 11' fill='none'>
            <path d='M7 11L0.937821 0.500001L13.0622 0.5L7 11Z' fill='#C0C0C0' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProfileButton
