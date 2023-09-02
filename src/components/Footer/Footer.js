import 'src/components/Footer/footer.scss'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome' ;

function Footer() {


  return (
    <div className='footer'>
        <div className='socialmedia'>
          <a href="https://github.com/PaulineJaffre" className="social fa fa-brands fa-github" ></a>
          <a href="https://www.linkedin.com/in/jaffrepauline/" className="social fa fa-brands fa-linkedin" ></a>       
         </div>
        <div className='copyright'>
            <p>© 2023 Pauline Jaffré. All rights reserved</p>
        </div>
    </div>
  );
}

export default Footer;

/*<a href="https://github.com/PaulineJaffre" className="fa fa-brands fa-github" style="color: #ffffff;"></a>
            <a href="https://www.linkedin.com/in/jaffrepauline/" className="fa fa-brands fa-linkedin" style="color: #ffffff;"></a>
*/