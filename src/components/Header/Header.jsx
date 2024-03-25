import ArrowScroll from '../../assets/svg/ArrowScroll';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import globalFunctions from '../../functions/GlobalFunctions';

const Header = () => {
  return (
    <header id='home'>
      <Nav />
      <section className='hero'>
        <div className='hero-con'>
          <div className='text-con'>
            <h1>Cocktails & Getränke!</h1>
            <p className='hero-p'>
              Herzlich Willkommen in der Welt der Cocktails und Getränke!
            </p>
            <SearchBar />
          </div>
          <div className='img-con'>
            <img src='/svg/cover.png' alt='' />
          </div>
        </div>
      </section>
      <div className='arrow-div'>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to='#drinks'>
          <ArrowScroll />
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
