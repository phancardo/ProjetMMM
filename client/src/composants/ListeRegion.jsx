import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Header from './Header'
import'../css/ListeRegion.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
function ListeRegion() {
    const view = useNavigate();
    const [region,SetRegion] =useState([]);
    
    useEffect(() => {
        getRegions();
     }, []);
     
     const getRegions = () => {
        Api
        .get("/region", {
        headers: {
            "Content-Type": "application/json"
        },
        })
        .then((res) => {
        
            SetRegion(res.data);
            
        });
    }

  const ListeBureau = async (e) => {
    view('/ListeBureau');
  }

       

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  
  return (
    <>
    <Header></Header>
    <h1 style={{
        textAlign:'center',
        marginTop:20,
        marginBottom:10
    }}> Liste des Regions</h1>
    <div className='row d-flex justify-content-center'  style={{
        textAlign:'center'
    }}>  
    {
        region.map(
            liste => 
            <div key={liste.id} className="card" style={{width: 250,height:'auto'
                ,marginTop:20,marginBottom:20,marginLeft:30
                }}>
                    
                <div className="card-body">
                <Link style={{textDecoration:'none'}} to={`/DistrictRegion/${liste.id}`} ><h5 className="card-title">{liste.nomRegion}</h5></Link>
                <div>
                    <a href='#' style={{textDecoration:'none',color:'black'}}>
                        
                        <p>Nom coordonnateur : Nom et prenom</p>
                        <p>numero coordonnateur :numero telephone</p>
                    </a>
                </div>
                 
                    {/* {liste.coordonnateur_region !== null ? (
                        <div>
                            <a href='#' style={{textDecoration:'none'}}>
                                {console.log(liste.coordonnateur_region)}
                                <p>Nom coordonnateur : {liste.coordonnateur_region.nomPersonnel} {liste.coordonnateur_region.prenomPersonnel}</p>
                                <p>numero coordonnateur :{liste.coordonnateur_region.tel}</p>
                            </a>
                        </div>
                ) : (
                    
                    <p>loading</p>
                    
                )} */}
  
                        
                       
                    
                </div>
            </div>
        )
        
    }
    </div>
    
    <Footer></Footer>  
    </>
  )
}

export default ListeRegion

