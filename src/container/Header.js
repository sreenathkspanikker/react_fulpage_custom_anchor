import {Scroll} from '../utils/Scroll'

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <a className='logo' href='#section-one' onClick={Scroll}>Scroll To</a>
        <ul>
          <li><a href='#section-one' onClick={Scroll}>Section One</a></li>
          <li><a href='#section-two' onClick={Scroll}>Section Two</a></li>
          <li><a href='#section-three' onClick={Scroll}>Section Three</a></li>
          <li><a href='#section-four' onClick={Scroll}>Section Four</a></li>
        </ul>
      </div>
    </header>
  )
}
