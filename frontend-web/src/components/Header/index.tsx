import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Header() {
    return(
    <header>
        <div className='ds-header'>
            <div className='ds-title'>
            <img src={logoImg} alt="logo" />
            <h3>DS Delivery</h3>
            </div>
        </div>
    </header>
    )
}