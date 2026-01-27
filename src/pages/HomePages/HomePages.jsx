import Header from '../../Header/Header';
import styles from './HomePages.module.css';
import { useNavigate } from 'react-router';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <h1>Teste</h1>
        <button onClick={() => navigate('/Duvidas')} >Dúvidas</button>
        </div>
        
    )
}