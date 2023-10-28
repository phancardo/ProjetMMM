import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'
import logoMMM from '../assets/images/LogoMMM.png';
import { useNavigate } from 'react-router-dom';
function Header() {
  const view = useNavigate();

  const ListeProvince = async (e) => {
    view('/ListeProvince');
  }
  const ListeRegion = async (e) => {
    view('/ListeRegion');
  }
  const ListeDistrict = async (e) => {
    view('/ListeDistrict');
  }
  const ListeCommune = async (e) => {
    view('/ListeCommune');
  }
  const ListeFokotany = async (e) => {
    view('/ListeFokotany');
  }
  const Saisie = async (e) => {
    view('/AjoutBureauRegion');
  }
  
  return (
    <>
      <div className='header'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={logoMMM} className='logoMMM' alt="LogologoMMM" />
            <a className="navbar-brand" style={{
              color:'white',
              fontSize:25
            }} href="#">Malagasy Miara Miainga</a>
                      
          </div>
          <div className='col-md-5' style={{
            marginTop:15
          }}>
          <div className='row'>
            <ul>
              <li><a href='' onClick={(e) => ListeRegion(e)}>Region</a></li>
              <li><a href='' onClick={(e) => ListeDistrict(e)}>District</a></li>
              <li><a href='' onClick={(e) => ListeCommune(e)}>Commune</a></li>
              <li><a href='' onClick={(e) => ListeFokotany(e)}>Fokontany</a></li>
              <li><a href='' onClick={(e) => Saisie(e)}>Saisie</a></li>

            </ul>
            
          </div>
          </div>
          
        </div>
      
      </div>
     
    </>
  )
}

export default Header
