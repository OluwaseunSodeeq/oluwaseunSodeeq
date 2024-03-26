import { Link } from "react-router-dom";

function Footer() {
  const socialnetwork = [
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="4" fill="#F2F4F6" />
          <g clipPath="url(#clip0_2018_19370)">
            <path
              d="M18.0426 10.5625C17.4915 9.70009 16.7321 8.99038 15.8344 8.49883C14.9367 8.00729 13.9297 7.74976 12.9062 7.75C12.451 8.53709 12.1779 9.41621 12.1072 10.3227C12.0364 11.2292 12.1697 12.1401 12.4973 12.9883C11.8559 13.9327 11.5089 15.046 11.5 16.1875V17.125C11.5 18.6168 12.0926 20.0476 13.1475 21.1025C14.2024 22.1574 15.6332 22.75 17.125 22.75H22.75C24.2418 22.75 25.6726 22.1574 26.7275 21.1025C27.7824 20.0476 28.375 18.6168 28.375 17.125V16.1875C28.3661 15.046 28.0191 13.9327 27.3777 12.9883C27.7053 12.1401 27.8386 11.2292 27.7678 10.3227C27.6971 9.41621 27.424 8.53709 26.9688 7.75C25.9453 7.74976 24.9383 8.00729 24.0406 8.49883C23.1429 8.99038 22.3835 9.70009 21.8324 10.5625H18.0426Z"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1875 31.1875V26.5C16.1875 25.5054 16.5826 24.5516 17.2858 23.8484C17.9891 23.1451 18.9429 22.75 19.9375 22.75C20.9321 22.75 21.8859 23.1451 22.5891 23.8484C23.2924 24.5516 23.6875 25.5054 23.6875 26.5V31.1875"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1875 28.375H12.4375C11.4429 28.375 10.4891 27.9799 9.78585 27.2766C9.08259 26.5734 8.6875 25.6196 8.6875 24.625C8.6875 23.6304 8.29241 22.6766 7.58915 21.9734C6.88589 21.2701 5.93206 20.875 4.9375 20.875"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2018_19370">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(4 4)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://github.com/OluwaseunSodeeq",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="4" fill="#F2F4F6" />
          <g clipPath="url(#clip0_2018_19371)">
            <path
              d="M14.3125 24.6251C14.3125 24.6251 7.84961 20.8751 8.77891 10.5626C8.77891 10.5626 13.4266 15.2501 19 16.1876V14.3126C19 11.7345 21.1094 9.59346 23.6875 9.6251C24.5973 9.63567 25.4852 9.90601 26.2465 10.4043C27.0079 10.9026 27.611 11.608 27.9848 12.4376H32.125L28.375 16.1876C27.8758 24.0204 21.3344 30.2501 13.375 30.2501C9.625 30.2501 8.6875 28.8439 8.6875 28.8439C8.6875 28.8439 12.4375 27.4376 14.3125 24.6251Z"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2018_19371">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(4 4)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://twitter.com/Oluwaseunsodeq",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="4" fill="white" />
          <path
            d="M19 30.25C25.2132 30.25 30.25 25.2132 30.25 19C30.25 12.7868 25.2132 7.75 19 7.75C12.7868 7.75 7.75 12.7868 7.75 19C7.75 25.2132 12.7868 30.25 19 30.25Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.6875 14.3125H21.8125C21.0666 14.3125 20.3512 14.6088 19.8238 15.1363C19.2963 15.6637 19 16.3791 19 17.125V30.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.25 20.875H22.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      // link: "ademolaoluwaseun90@gmail.com",
      link: "",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="4" fill="white" />
          <path
            d="M29.3125 7.75H8.6875C8.16973 7.75 7.75 8.16973 7.75 8.6875V29.3125C7.75 29.8303 8.16973 30.25 8.6875 30.25H29.3125C29.8303 30.25 30.25 29.8303 30.25 29.3125V8.6875C30.25 8.16973 29.8303 7.75 29.3125 7.75Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0625 17.125V24.625"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3125 17.125V24.625"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0625 20.4062C18.0625 19.536 18.4082 18.7014 19.0236 18.0861C19.6389 17.4707 20.4735 17.125 21.3438 17.125C22.214 17.125 23.0486 17.4707 23.6639 18.0861C24.2793 18.7014 24.625 19.536 24.625 20.4062V24.625"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3125 15.25C15.0892 15.25 15.7188 14.6204 15.7188 13.8438C15.7188 13.0671 15.0892 12.4375 14.3125 12.4375C13.5358 12.4375 12.9062 13.0671 12.9062 13.8438C12.9062 14.6204 13.5358 15.25 14.3125 15.25Z"
            fill="#333437"
          />
        </svg>
      ),
      link: "https://www.linkedin.com/in/oluwaseun-sodeeq",
    },
  ];

  return (
    <div className=" w-full bg-text-color p-0">
      <div className="   mt-5 md:px-[40px] lg:max-w-[1440px] lg:mx-auto rounded-b-[40px] md:rounded-b-[0px]">
        <div className=" pt-8 px-8 pb-6 mt-1 lg:px-[104px] lg:py-8 md:flex md:justify-between md:items-start lg:w-full lg:max-w-[1440px] lg:mx-auto ">
          <p className="text-plain-white text-lg tracking-widest font-Helvetica lg:text-2xl text-nowrap">
            Thanks For Stopping by 👋
          </p>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            {socialnetwork.map((each, i) => (
              <p
                key={i}
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-5px] "
              >
                <Link to={each.link}>{each.icon}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
