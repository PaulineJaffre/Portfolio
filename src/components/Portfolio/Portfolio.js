import 'src/components/Portfolio/portfolio.scss'
import PropTypes from 'prop-types'


export default function Portfolio(props) {
   
    /*const dataCurrentPortfolio = datas.find(data => data.id === "your-id"); //filtre les données d'hébergement datas pour trouver l'hébergement correspondant à l'ID spécifié. Les données de cet hébergement sont stockées dans la variable dataCurrentAccomodations.	
    if (!dataCurrentPortfolio) {
        return <div>Aucune donnée trouvée pour cet ID</div>;
    }*/

    const { title, image, description, lienGithub, technos } = props;

   
    return (
        <main className="portfolio">
        <img src={image} alt="portfolioImage"/>

        <h1>{title}</h1>
        <p>{description}</p>
        <div className='announce_content_infos_button'>
            {technos.map((techno, index) => {
                return (
                    <button key={index}>{techno}</button>
                )
            })}
        </div>
        <a className='lienGithub' href={lienGithub} target="_blank" rel="noopener noreferrer">
            Lien GitHub</a>

    </main>
    )
}

Portfolio.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    lienGithub: PropTypes.string,
    technos: PropTypes.arrayOf(PropTypes.string),
}
