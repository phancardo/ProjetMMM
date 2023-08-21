import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/district_region.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
function District_Region() {
    const view = useNavigate();
    const [region,SetRegion] = useState([]);
    useEffect(() => {
        getRegionById();
        
    }, []);
    const{id_region}  = useParams();
    //console.log(id_region);
    const getRegionById = () => {
        Api
        .get("/region/"+id_region, {
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
  
  return (
    <>
    <Header></Header>
    <div className='row ' style={{padding:10}}>
        <div className='col-md-6 ' style={{marginLeft:20}}>
            <h2> {region.nomRegion}</h2>
            
           {/*  {
                region.coordonnateur_region !== undefined ? (
                    <>
                        {console.log(region.coordonnateur_region)}
                        <h5 >Nom coordonnateur : {region.coordonnateur_region.nomPersonnel}-{region.coordonnateur_region.prenomPersonnel}</h5>
                         <h5 >Numero coordonnateur: {region.coordonnateur_region.tel}</h5> 
                    </>
                    
                ) : (
                    <p>pas de district</p>
                )
            } */}

            
            <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU REGION {region.nomRegion} </h5>
                <h5  >Président: Rakoto Patrick <h6 style={{float:'right'}}> 0340512356</h6></h5>
                <h5  >Vice Président: RABE louise <h6 style={{float:'right'}}> 0340512356</h6></h5>
                <h5  >Secrétaire géneral:RANDRIA charline <h6 style={{float:'right'}}> 0340512356</h6></h5>   
            </div>
        </div>
        {region.districts !== undefined ? (
        <div className='row col-md-5 mx-auto '>
        <h2>Liste des district du region : <strong>{region.nomRegion}</strong></h2>
        {
            region.districts.map((liste) =>( 
                <div key={liste.id} className="card col-md-4" style={{width:245, marginLeft:10,marginTop:10
                    }}>
                        
                    <div className="card-body">
                        <Link style={{textDecoration:'none'}} to={`/DistrictRegion/${liste.id}`} ><h5 className="card-title">{liste.nomDistrict}</h5></Link>
                        <div>
                            <a href='#' style={{textDecoration:'none',color:'black'}}>
                                <p>Nom coordonnateur : Nom et prenom</p>
                                <p>numero coordonnateur :numero telephone</p>
                            </a>
                        </div>       
                    </div>
                </div>
            ))
        }
       
        </div>
      ) : (
        <p>Loading ...</p>
      )}
       
    
    </div>
    
    <Footer></Footer>  
    </>
  )
}

export default District_Region

