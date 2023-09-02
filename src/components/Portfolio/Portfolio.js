import 'src/components/Portfolio/portfolio.scss'
import PropTypes from 'prop-types'

export default function Portfolio(props) {

    const { title, image, description, lienGithub, technos } = props;

   
    return (
        <main className="portfolio">
        <img src={image} alt="portfolioImage"/>

        <h1>{title}</h1>
        <p className='description'>{description}</p>
        <div className='technosTags'>
            {technos.map((techno, index) => {
                return (
                    <button key={index}>{techno}</button>
                )
            })}
        </div>
        <a className='lienGithub' href={lienGithub} target="_blank" rel="noopener noreferrer">
            Lien GitHub </a>

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
