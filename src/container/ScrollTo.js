import {useState} from 'react'

export const ScrollTo = () => {
  const [isScroll, setScroll] = useState(false)

  window.onscroll = () => {
    setScroll(() => (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ) ? true : false);
  };

  return (
    <a className={`btn-scroll ${isScroll}`} id='scrollTo' href='#section-one' >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
          fill="currentColor"
        />
      </svg>  
    </a>
  )
}
