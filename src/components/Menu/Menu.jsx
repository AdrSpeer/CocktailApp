import './Menu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import globalFunctions from '../../functions/GlobalFunctions';

const Menu = () => {
  const [menuPop, setMenuPop] = useState(false);
  const popToggle = () => {
    setMenuPop((pop) => !pop);
  };
  return (
    <div className='pop-dad'>
      <button
        onClick={() => popToggle()}
        className={menuPop === false ? 'menu-btn' : 'menu-btn-show'}>
        Menu
      </button>
      <div className={menuPop === false ? 'menu-pop' : 'menu-pop-show'}>
        <div className='menu-div'>
          <img
            onClick={() => popToggle()}
            className='menu-cross'
            src='/svg/Cross.svg'
            alt=''
          />
        </div>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/add-recipe'>
          <p>Add Recipe</p>
        </Link>
        <div className='line'></div>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/gin#drinks`}>
          <p>Gin</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/vodka#drinks`}>
          <p>Vodka</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/rum#drinks`}>
          <p>Rum</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/scotch#drinks`}>
          <p>Scotch</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/tequila#drinks`}>
          <p>Tequila</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/bourbon#drinks`}>
          <p>Bourbon</p>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/non-alcoholic#drinks`}>
          <p>Alk.frei</p>
        </HashLink>
      </div>
    </div>
  );
};

export default Menu;
