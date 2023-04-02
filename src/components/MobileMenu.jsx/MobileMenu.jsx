import { Ul } from '../Navigation/Navigation.styled';
import search from '../../images/Header/search.svg';

const MobileMenu = () => {
  return (
    <div>
      <nav>
        <Ul>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/add">Add recipes</a>
          </li>
          <li>
            <a href="/my">My recipes</a>
          </li>
          <li>
            <a href="/favorite">Favorites</a>
          </li>
          <li>
            <a href="/shopping-list">Shopping list</a>
          </li>
          <li>
            <a href="/search">
              <img src={search} alt="search" />
              <p>Search</p>
            </a>
          </li>
        </Ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
