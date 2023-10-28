import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Header from './Header'
import'../css/ListeRegion.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
function AjoutBureauRegion() {
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
                    <Link style={{textDecoration:'none'}} to={`/DetailRegion/${liste.id}`} ><h5 className="card-title">{liste.nomRegion.toUpperCase()}</h5></Link>
                </div>
            </div>
        )
        
    }
    </div>
    
    <Footer></Footer>  
    </>
  )
}

export default AjoutBureauRegion

