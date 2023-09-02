import 'src/components/Main/main.scss'
import paulineimg from "src/assets/pauline.jpg"

export default function Main(){
    return (
      <div className="main">
        <div className="presentation">
            <h1 className="h1-content no-after">Bonjour !</h1>
            <h1 className="h1-content no-after">Je suis Pauline Jaffré,</h1>
            <h1 className="h1-content no-after">développeuse front-end</h1>
            <h1 className="h1-content no-after">et entrepreneure !</h1>
        </div>
        <div className="photo">
            <img src={paulineimg} alt="photo pauline" className="imgpauline" ></img>
        </div>
      </div>
    )
  }