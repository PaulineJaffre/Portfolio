import 'src/components/Cards/cards.scss'
import Portfolio from "src/components/Portfolio/Portfolio";
import datas from 'src/data/data.json';

//import { Link } from 'react-router-dom'


export default function Cards(){


	

    return (
        <div className='cards'>
            <div className='cardTitle'>
                <h2 >Réalisations</h2>
            </div>
            <section className='container-cards'>
                {datas.map((data)=> (
                    <Portfolio key={data.id} id={data.id} title={data.title} image={data.image} description={data.description} lienGithub={data.lienGithub} technos={data.technos}/>
                ))}
            </section>
        </div>
            )
        
            
}



