import 'src/components/Main/main.scss'


export default function Main(){
    return (
      <div className="main">
        <div className="presentation">
            <h1 className="h1-content no-after">Bonjour !</h1>
            <h1 className="h1-content no-after">Je suis Pauline Jaffré,</h1>
            <h1 className="h1-content no-after">développeuse front-end</h1>
            <h1 className="h1-content no-after">et entrepreneur !</h1>
        </div>
        <div className="photo">
            <img src="./assets/pauline.jpg" alt="photo pauline"  decoding="async" className="imgpauline" ></img>
        </div>
      </div>
    )
  }