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

  console.log(region);

       

 
  
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
                <Link style={{textDecoration:'none'}} to={`/DistrictRegion/${liste.id}`} ><h5 className="card-title">{liste.nomRegion.toUpperCase()}</h5></Link>
                {liste.coach != undefined ? (
                        <>
                        <p style={{marginTop:5,color:'white',backgroundColor:'#0855E6',borderRadius:10,fontSize:12}}>
                            Coach:{liste.coach.nomPersonnel} {liste.coach.prenomPersonnel} / Tel:{liste.coach.tel} 
                        </p>
                        </>
                    ) : (
                        <h5>Pas de coach</h5>
                    )}
                <div>
                    <a href='#' style={{textDecoration:'none',color:'black'}}>
                    {liste.bureau != null ? (
                        <div>
                            {liste.bureau.coordonateur != undefined ? (
                                <>
                                <a href='#' style={{textDecoration:'none',color:'black'}}>
                                    <p style={{color:'black',backgroundColor:'#F2E922 ',borderRadius:10,fontSize:12}}> Coordo :
                                        {liste.bureau.coordonateur.nomPersonnel}-{liste.bureau.coordonateur.prenomPersonnel} tel : {liste.bureau.coordonateur.tel} 
                                    </p>
                                </a>
                                </>
                            ) : (
                                <h5>Pas de coordonateur</h5>
                            )}
                            
                               
                            
                        </div>
                ) : (
                    
                    <p>Pas de coordonateur</p>
                    
                )}
                    </a>
                </div>
     
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

