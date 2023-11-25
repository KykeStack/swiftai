import { Component } from 'solid-js'

const SideBar: Component<{}> = (props) => {
  return (
    <div id='docs-sidebar' class='rounded-tr-[5rem] duration-300 transform z-[60] w-96 h-screen bg-[#E36E40] border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-gray-800 dark:border-gray-700'>
      <div class='px-6'>
        <div class='mt-8'>
          <svg xmlns='http://www.w3.org/2000/svg' width='168' height='76' viewBox='0 0 168 76' fill='none'>
            <path d='M40.9737 72.5689C40.874 72.6686 40.874 72.7682 40.874 72.9675C40.7744 73.0672 40.5751 73.1668 40.4754 73.2665C40.1764 73.0672 40.4754 72.8679 40.4754 72.6686C40.4754 72.4692 40.6747 72.4693 40.874 72.3696C40.9737 72.4693 40.9737 72.4692 40.9737 72.5689Z' fill='white' />
            <path d='M37.8844 40.6797L37.9841 40.7794C37.8844 40.8791 37.8844 40.7794 37.7848 40.7794C37.7848 40.7794 37.8844 40.7794 37.8844 40.6797Z' fill='white' />
            <path d='M47.6506 24.8348C45.8568 26.6286 43.7641 27.0272 41.3724 26.7283C38.7814 26.3297 36.1904 25.8314 33.4998 26.0307C32.9019 26.0307 32.304 26.1303 31.6064 26.1303C31.2078 26.23 30.7095 26.23 30.2112 26.3296C29.9123 25.4328 29.9123 24.6355 30.4105 23.8383H32.304C33.1012 23.8383 33.8984 23.8383 34.6956 23.8383C34.6956 23.7387 34.6956 23.7387 34.6956 23.639C34.4963 23.639 34.3967 23.5394 34.1974 23.5394C34.1974 23.4397 34.0977 23.4397 34.0977 23.5394C31.0085 22.9414 27.9192 22.5428 25.0292 21.048C23.4348 20.1511 22.0396 19.1546 20.9435 17.6598C19.349 15.5671 19.349 13.1754 20.1462 10.7837C20.8438 8.89028 22.0396 7.29582 23.5344 6.00033C26.6237 3.21003 30.2112 1.41626 34.1974 0.320072C34.6956 0.220419 35.2936 -0.0785391 35.5925 0.619036C35.7918 1.1173 35.4929 1.71522 34.7953 2.01418C32.7026 3.01072 30.8092 4.20656 29.115 5.80102C27.3213 7.39548 25.9261 9.18924 24.9296 11.3816C24.8299 11.4813 24.8299 11.5809 24.7303 11.8799C25.9261 11.4813 27.122 11.0827 28.2182 10.983C32.6029 10.4847 36.1904 12.1788 38.9807 15.4674C39.8776 16.4639 40.6749 17.5601 41.6714 18.5567C43.2659 20.0515 45.1593 21.1477 47.1523 22.1442C49.0458 22.9414 49.0458 23.4397 47.6506 24.8348Z' fill='white' />
            <path d='M45.1594 48.4527C44.4618 51.542 42.7677 54.0333 40.5753 56.2257C37.6853 59.016 34.2971 60.8098 30.6099 62.3046C28.4175 63.2014 26.1255 64.0983 24.0328 65.2942C20.3456 67.4865 17.9539 70.5758 17.057 74.7613C16.9574 75.0602 16.9574 75.4588 16.8577 75.8574C15.5622 74.5619 14.9643 73.0671 14.6654 71.373C13.9678 67.2872 15.4626 63.899 18.4522 61.1087C20.8439 58.8167 23.8335 57.5212 26.9227 56.425C29.9124 55.3288 33.0016 54.3323 35.7919 52.7378C38.8812 51.0437 41.3725 48.8513 43.1663 45.7621C43.9635 43.9683 44.6611 42.1745 44.5614 40.0818C45.6576 42.8721 45.9566 45.5628 45.1594 48.4527Z' fill='white' />
            <path d='M37.3863 44.1677C35.0943 46.7586 32.304 48.4528 29.2147 49.8479C27.9192 50.4458 26.5241 50.9441 25.1289 51.3427C24.0327 51.841 22.8369 52.1399 21.641 52.3393C20.9435 52.6382 20.2459 52.7379 19.5483 52.8375C18.7511 52.9372 17.9539 53.2361 17.1566 53.2361C15.0639 53.8341 12.8715 53.6347 10.7788 53.6347C10.6791 53.6347 10.5795 53.5351 10.4798 53.5351C7.19127 53.1365 4.40098 52.0403 2.4079 49.25C0.31518 46.2604 -0.282744 42.9718 0.11587 39.3843C0.215524 38.7864 0.31518 38.1884 0.414834 37.5905C0.414834 37.3912 0.514486 37.2916 0.713794 37.1919C0.913101 34.003 1.90963 31.113 3.80305 28.6217C3.10548 33.4051 4.40097 37.5905 7.49023 41.1781C7.68954 41.3774 7.88885 41.5767 8.08815 41.8756C9.4833 43.1711 11.0778 44.1677 12.8715 44.8652C14.5656 45.2639 16.2597 45.7621 17.9539 45.8618C18.9504 45.9614 19.9469 45.7621 20.9435 45.7621C22.5379 45.4632 24.1324 45.1642 25.7268 44.5663C28.9157 43.3704 31.9054 42.0749 34.297 39.4839C36.1905 37.3912 37.187 34.8999 36.2901 32.0099C36.1905 31.6113 35.9911 31.3124 35.7918 30.9137C35.8915 30.7144 35.9911 30.6148 36.0908 30.6148C40.7745 34.003 41.2728 39.8826 37.3863 44.1677Z' fill='white' />
            <path d='M44.5615 64.0984L44.4618 64.198L43.6646 64.796C43.3657 64.9953 43.0667 65.1946 42.7677 65.3939C39.7781 67.4866 36.4896 68.5828 33.0017 68.9814C32.0051 69.0811 30.909 69.1807 29.8128 69.0811C28.8162 68.9814 27.8197 68.8817 26.7235 68.5828C29.2148 68.1842 31.5069 67.4866 33.6993 66.5897C36.5892 65.4935 39.1802 63.7994 41.5719 61.8063C43.4653 59.9129 45.2591 57.9199 46.4549 55.4285C49.6438 49.1503 49.4445 42.8722 46.2556 36.594C46.0563 36.295 45.857 35.8964 45.7573 35.5975C45.2591 34.8999 44.7608 34.302 44.2625 33.5047C45.1594 33.8037 45.6577 34.302 46.156 34.8999C47.0528 35.3981 47.5511 36.1954 48.149 36.893C54.4272 45.1642 52.9324 57.6209 44.5615 64.0984Z' fill='white' />
            <path d='M30.3109 26.3296C29.713 26.5289 29.1151 26.6286 28.6168 26.8279C25.3282 27.8244 22.8369 29.8175 21.0431 32.7075C20.9435 32.7075 20.7442 32.7075 20.7442 32.8071C20.5449 32.9068 20.5449 33.0064 20.7442 33.3054C20.6445 33.5047 20.5449 33.704 20.4452 33.9033C20.2459 34.8002 19.8473 35.6971 19.8473 36.594C19.7476 38.4874 20.2459 40.1815 21.3421 41.7759C18.8508 41.7759 16.4591 39.8825 15.6618 37.4908C14.8646 34.8999 15.3629 32.5082 16.758 30.2161C18.0535 28.1234 19.7476 26.529 22.0397 25.4328C24.7303 24.1373 27.5206 23.7386 30.5102 23.8383C29.9123 24.7352 30.012 25.5324 30.3109 26.3296Z' fill='white' />
            <path d='M20.0465 21.2473C18.2528 22.0445 16.6583 23.041 15.2632 24.2369C14.0673 25.3331 13.1704 26.5289 12.2736 27.9241C11.3767 29.6182 10.6791 31.4119 10.3801 33.3054C10.4798 34.4016 10.4798 35.4977 10.5794 36.5939C9.78222 35.4977 9.1843 34.4016 9.08464 33.0064C8.58638 32.1095 8.58638 31.113 8.48672 30.1165C8.38707 29.0203 8.38707 27.9241 8.58638 26.8279C8.78568 25.1338 9.1843 23.4397 9.88187 21.8452C10.3801 20.3504 11.1774 18.9553 12.0742 17.6598C13.0708 16.0653 14.167 14.5705 15.4625 13.275C15.6618 13.0757 15.7614 12.8764 16.16 12.7767C15.8611 16.3643 17.0569 19.1546 20.0465 21.2473Z' fill='white' />
            <path d='M44.1629 2.01416C43.9635 2.31312 43.7642 2.51243 43.4653 2.71173C41.6715 3.90758 40.1767 5.20307 38.9809 6.99684C38.1836 8.39199 37.6854 9.88679 37.4861 11.4812C37.1871 11.5809 37.0874 11.4812 36.9878 11.3816C35.7919 10.3851 34.4965 9.58783 33.0016 9.08956C32.7027 8.98991 32.4037 8.89025 32.7027 8.39199C33.9982 6.29926 35.6923 4.60515 37.785 3.40931C37.8847 3.40931 37.9843 3.30965 38.084 3.30965C38.1836 3.21 38.3829 3.11035 38.4826 3.01069C38.5822 3.01069 38.6819 3.21 38.8812 3.11035C38.9809 3.0107 38.8812 2.91104 38.7816 2.91104C40.1767 2.01416 41.8708 1.41624 43.4653 0.91797C43.7642 0.818317 44.0632 0.917971 44.1629 1.11728C44.3622 1.41624 44.2625 1.7152 44.1629 2.01416Z' fill='white' />
            <path d='M36.1903 30.6147C35.991 30.7144 35.8914 30.814 35.8914 30.9137C35.6921 30.6147 35.4928 30.4154 35.2935 30.1165C35.6921 30.1165 35.8914 30.3158 36.1903 30.6147Z' fill='white' />
            <path d='M20.6444 33.3053C20.2458 32.8071 20.5448 32.7074 20.9434 32.7074C20.8437 32.9067 20.7441 33.106 20.6444 33.3053Z' fill='white' />
            <path d='M34.2968 23.5392H34.1974C34.1974 23.4397 34.2968 23.4397 34.2968 23.5392Z' fill='white' />
            <path d='M163.023 46.6762V23.3989H168V46.6762H163.023Z' fill='white' />
            <path d='M151.766 37.82L149.159 30.2994C149.085 30.0768 148.989 29.6952 148.873 29.1546C148.756 28.614 148.634 27.9515 148.507 27.1671C148.369 27.9197 148.237 28.5981 148.109 29.2023C147.982 29.7959 147.887 30.1934 147.823 30.3948L145.311 37.82H151.766ZM136.948 46.6762L145.804 23.3989H151.496L160.479 46.6762H154.819L152.927 41.7314H143.912L142.29 46.6762H136.948Z' fill='white' />
            <path d='M129.793 46.6762V34.6242H127.615V31.0785H129.793V25.8952H134.324V31.0785H136.502V34.6242H134.324V46.6762H129.793Z' fill='white' />
            <path d='M119.013 46.6762V34.6241H116.994V31.0785H119.013V27.5646C119.013 25.4658 119.495 23.9659 120.46 23.065C121.424 22.1534 123.014 21.6976 125.23 21.6976C125.473 21.6976 125.754 21.7241 126.072 21.7771C126.401 21.8195 126.825 21.9043 127.344 22.0315V25.6407C127.069 25.4923 126.804 25.3863 126.549 25.3227C126.295 25.2485 126.03 25.2114 125.754 25.2114C124.959 25.2114 124.392 25.4234 124.053 25.8474C123.714 26.2608 123.544 26.9816 123.544 28.0098V31.0785H126.438V34.6241H123.544V46.6762H119.013Z' fill='white' />
            <path d='M108.948 24.6709C108.948 23.9501 109.208 23.33 109.727 22.8106C110.247 22.2912 110.867 22.0315 111.588 22.0315C112.319 22.0315 112.944 22.2912 113.464 22.8106C113.994 23.3194 114.259 23.9395 114.259 24.6709C114.259 25.4023 113.994 26.0277 113.464 26.5471C112.944 27.0665 112.319 27.3262 111.588 27.3262C110.867 27.3262 110.247 27.0612 109.727 26.5312C109.208 26.0012 108.948 25.3811 108.948 24.6709ZM109.346 46.6762V31.0785H113.861V46.6762H109.346Z' fill='white' />
            <path d='M96.1011 31.0785L98.3588 39.1556C98.4012 39.3146 98.4542 39.5955 98.5178 39.9983C98.592 40.4011 98.7192 41.2279 98.8994 42.4787C98.9948 41.9911 99.1114 41.477 99.2492 40.9364C99.3976 40.3958 99.5778 39.7916 99.7898 39.1238L102.222 31.0785H107.151L101.745 46.6762H96.912L94.5747 38.5991C94.5323 38.4507 94.4634 38.2122 94.368 37.8836C94.0182 36.6647 93.7638 35.6683 93.6048 34.8945C93.467 35.6153 93.3292 36.2725 93.1914 36.8661C93.0642 37.4596 92.9264 38.0161 92.778 38.5355L90.3771 46.6762H85.5595L80.1536 31.0785H85.0984L87.4834 38.8217C87.6954 39.5213 87.8703 40.1573 88.0081 40.7297C88.1459 41.2915 88.2625 41.8692 88.3579 42.4628C88.4427 41.8162 88.5434 41.1961 88.66 40.6025C88.7766 39.9983 88.9144 39.4153 89.0734 38.8535L91.1562 31.0785H96.1011Z' fill='white' />
            <path d='M63.2045 43.7188L65.971 40.5866C66.3208 41.4451 66.8826 42.1235 67.6564 42.6217C68.4302 43.1093 69.2994 43.3531 70.264 43.3531C71.43 43.3531 72.3522 43.0775 73.0305 42.5263C73.7089 41.9751 74.0481 41.2331 74.0481 40.3004C74.0481 39.198 72.9192 38.1009 70.6615 37.0091C69.9301 36.6593 69.3524 36.3731 68.9284 36.1505C66.8932 35.0905 65.4834 34.057 64.699 33.05C63.9147 32.0325 63.5225 30.8241 63.5225 29.4249C63.5225 27.5063 64.2804 25.9322 65.7961 24.7027C67.3225 23.4625 69.2994 22.8424 71.7268 22.8424C73.1365 22.8424 74.3502 23.0915 75.3678 23.5897C76.396 24.0773 77.3023 24.8458 78.0867 25.8951L75.1452 28.7094C74.7954 28.031 74.329 27.5275 73.746 27.1989C73.1736 26.8597 72.4794 26.6901 71.6632 26.6901C70.6774 26.6901 69.8824 26.9392 69.2782 27.4374C68.674 27.925 68.3719 28.561 68.3719 29.3454C68.3719 30.575 69.5697 31.6986 71.9653 32.7162C72.4423 32.9176 72.8079 33.0765 73.0623 33.1931C75.0339 34.0941 76.4914 35.1117 77.4348 36.2459C78.3888 37.3801 78.8658 38.6733 78.8658 40.1255C78.8658 42.309 78.1185 44.0527 76.6239 45.3565C75.1399 46.6497 73.1418 47.2963 70.6297 47.2963C68.8489 47.2963 67.3225 46.9889 66.0505 46.3741C64.7785 45.7593 63.8299 44.8742 63.2045 43.7188Z' fill='white' />
          </svg>
        </div>
      </div>
      <nav class='hs-accordion-group p-6 w-full flex flex-col flex-wrap' data-hs-accordion-always-open>
        <ul class='space-y-1.5'>
          <li>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg class='w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /><polyline points='9 22 9 12 15 12 15 22' /></svg>
              Dashboard

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='users-accordion-sub-1' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 flex flex-row'>
              <div class='ml-6 border-t sm:border-t-0 sm:border-s border-gray-200 w-2' />
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-md text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Default
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-md text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Alternativa
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='users-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg class='w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' /><circle cx='9' cy='7' r='4' /><path d='M22 21v-2a4 4 0 0 0-3-3.87' /><path d='M16 3.13a4 4 0 0 1 0 7.75' /></svg>
              Profili

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='users-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='hs-accordion-group ps-3 pt-2' data-hs-accordion-always-open>
                <li class='hs-accordion' id='users-accordion-sub-1'>
                  <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                    Sub Menu 1

                    <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

                    <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6' /></svg>
                  </button>

                  <div id='users-accordion-sub-1' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
                    <ul class='pt-2 ps-2'>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class='hs-accordion' id='users-accordion-sub-2'>
                  <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                    Sub Menu 2

                    <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

                    <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6' /></svg>
                  </button>

                  <div id='users-accordion-sub-2' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2'>
                    <ul class='pt-2 ps-2'>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='account-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg class='w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='18' cy='15' r='3' /><circle cx='9' cy='7' r='4' /><path d='M10 15H6a4 4 0 0 0-4 4v2' /><path d='m21.7 16.4-.9-.3' /><path d='m15.2 13.9-.9-.3' /><path d='m16.6 18.7.3-.9' /><path d='m19.1 12.2.3-.9' /><path d='m19.6 18.7-.4-1' /><path d='m16.8 12.3-.4-1' /><path d='m14.3 16.6 1-.4' /><path d='m20.7 13.8 1-.4' /></svg>
              Camere

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <span class='inline-flex items-center py-0.5 px-1.5 rounded-full text-xs bg-white text-black font-bold'>5</span>
              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='account-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='account-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <g clip-path='url(#clip0_29_199)'>
                  <path d='M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                  <path d='M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                  <path d='M4.66675 13.7747V12.6667C4.66675 12.3131 4.80722 11.9739 5.05727 11.7239C5.30732 11.4739 5.64646 11.3334 6.00008 11.3334H10.0001C10.3537 11.3334 10.6928 11.4739 10.9429 11.7239C11.1929 11.9739 11.3334 12.3131 11.3334 12.6667V13.7747' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                </g>
                <defs>
                  <clipPath id='clip0_29_199'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              Account

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>
              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='account-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='account-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path d='M3.33325 7.33329L5.99992 2.66663' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M12.6667 7.33329L10 2.66663' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M1.33325 7.33337H14.6666' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M2.33325 7.33337L3.39992 12.2667C3.46225 12.5724 3.62982 12.8466 3.87344 13.0415C4.11707 13.2364 4.42132 13.3397 4.73325 13.3334H11.2666C11.8666 13.3334 12.4666 12.8667 12.5999 12.2667L13.7333 7.33337' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M6 7.33337L6.66667 13.3334' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M3 10.3334H13' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M9.99992 7.33337L9.33325 13.3334' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
              Abbonamento

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <span class='inline-flex items-center py-0.5 px-1.5 rounded-full text-xs bg-white text-black font-bold'>5</span>
              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='account-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='projects-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg class='w-4 h-4' xmlns='ƒhttp://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z' /><path d='M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8' /><path d='M15 2v5h5' /></svg>
              Projects

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>
              <span class='inline-flex items-center gap-x-1.5 p-[.1rem] rounded-full text-xs bg-teal-500 text-white'>Nuovo</span>
              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='projects-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='account-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path d='M12.6667 7.33337H3.33333C2.59695 7.33337 2 7.93033 2 8.66671V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V8.66671C14 7.93033 13.403 7.33337 12.6667 7.33337Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                <path d='M4.66675 7.33337V4.66671C4.66675 3.78265 5.01794 2.93481 5.64306 2.30968C6.26818 1.68456 7.11603 1.33337 8.00008 1.33337C8.88414 1.33337 9.73198 1.68456 10.3571 2.30968C10.9822 2.93481 11.3334 3.78265 11.3334 4.66671V7.33337' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
              Password

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='account-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class='hs-accordion' id='account-accordion'>
            <button type='button' class='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <g clip-path='url(#clip0_29_46)'>
                  <path d='M1.33325 12V14C1.33325 14.4 1.59992 14.6667 1.99992 14.6667H4.66659V12.6667H6.66659V10.6667H7.99992L8.93325 9.73336C9.85981 10.0561 10.8685 10.0549 11.7942 9.72986C12.72 9.40483 13.5081 8.77525 14.0295 7.94411C14.5509 7.11297 14.7749 6.12947 14.6647 5.15452C14.5545 4.17956 14.1167 3.27086 13.4229 2.57707C12.7291 1.88328 11.8204 1.44548 10.8454 1.33528C9.87047 1.22509 8.88698 1.44902 8.05584 1.97045C7.22469 2.49188 6.59511 3.27994 6.27008 4.20571C5.94506 5.13147 5.94382 6.14014 6.26659 7.06669L1.33325 12Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                  <path d='M11.0001 5.33329C11.1842 5.33329 11.3334 5.18405 11.3334 4.99996C11.3334 4.81586 11.1842 4.66663 11.0001 4.66663C10.816 4.66663 10.6667 4.81586 10.6667 4.99996C10.6667 5.18405 10.816 5.33329 11.0001 5.33329Z' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
                </g>
                <defs>
                  <clipPath id='clip0_29_46'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              API keys

              <svg class='hs-accordion-active:block ms-auto hidden w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 15-6-6-6 6' /></svg>

              <svg class='hs-accordion-active:hidden ms-auto block w-4 h-4  text-white group-hover:text-gray-500 dark:text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
              </svg>
            </button>

            <div id='account-accordion' class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
              <ul class='pt-2 ps-2'>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' href='#'>
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default SideBar
