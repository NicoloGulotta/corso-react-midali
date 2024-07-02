import './NavBar.css'
import Link from './Link';
export default function NavBar() {
    const img = 'vite';
    const x = 11;
    return (
        <nav>
            <div className={`box roundend ${x < 10 ? 'rotated' : ''}`}>x è {x} </div>
            <ul>
                <img src={`/public/${img}.svg`} alt="logo" />
                <li><Link href='/' name='Home' /></li>
                <li><Link href='/about' name='About' /></li>
                <li><Link href='/contact' name='Contact' /></li>
                <li><Link href='/blog' name='Blog' /></li>
                <li><Link href='/login' name='Login' /></li>
                <li><Link href='/register' name='Register' /></li>
            </ul>
        </nav>
    )
}
