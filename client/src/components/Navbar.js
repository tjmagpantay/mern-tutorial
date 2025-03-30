import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">    
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/" className="logo">MyApp</Link></li>
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