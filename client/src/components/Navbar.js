import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <header>    
        <div className="container">
            <nav>
            <Link to="/" className="logo">MyApp</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>

  );
}

export default Navbar;