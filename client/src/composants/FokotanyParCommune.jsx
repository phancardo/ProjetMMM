import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
function FokotanyParCommune() {
    const view = useNavigate();
    const [commune,SetCommune] = useState([]);
    useEffect(() => {
        getRegionById();
        
    }, []);
    const{id_commune}  = useParams();
    //console.log(id_region);
    const getRegionById = () => {
        Api
        .get("/commune/"+id_commune, {
        headers: {
            "Content-Type": "application/json"
        },
        })
            .then((res) => {
                SetCommune(res.data);
                
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
            <h2>  commune : {commune.nomcommune} </h2>
            
            {
                commune.coordonateur !== undefined ? (
                    <>
                        {console.log(commune.coordonateur)}
                        <h5 >Nom coordonnateur : {commune.coordonateur.nomPersonnel}-{commune.coordonateur.prenomPersonnel}</h5>
                         <h5 >Numero coordonnateur: {commune.coordonateur.tel}</h5> 
                    </>
                    
                ) : (
                    <p>pas de coordonateur</p>
                )
            } 

            
            <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU commune ANTEHIROKA </h5>
                <h5  >Président: Rakoto Patrick <h6 style={{float:'right'}}> 0340512356</h6></h5>
                <h5  >Vice Président: RABE louise <h6 style={{float:'right'}}> 0340512356</h6></h5>
                <h5  >Secrétaire géneral:RANDRIA charline <h6 style={{float:'right'}}> 0340512356</h6></h5>   
            </div>
        </div>
        
        <div className='row col-md-5  mx-auto'>
            {commune != undefined ? (
            <>
                <h2>Liste des communes du commune : <strong>{commune.nomCommune}</strong></h2>
                
                    
                        {commune.fokotany != undefined ? (
                            
                                commune.fokotany.map((liste) =>( 
                                    <div key={liste.id} className="card col-md-4 " style={{width:227,height:'auto', marginLeft:10,marginTop:10
                                        }}>
                                            
                                        <div className="card-body">
                                            
                                            <Link style={{textDecoration:'none'}} to={`/DetailCommune/${liste.id}`}  ><h5 className="card-title">{liste.nomCommune}</h5></Link>
                                        
                                            
                                                <a href='#' style={{textDecoration:'none',color:'black'}}>
                                                    <h6>Nom et prenom</h6>
                                                    <h6>numero </h6>
                                                </a>
                                                   
                                        </div>
                                    </div>
                                ))
                            
                            ): (
                            <p> pas de fokotany</p>  
                            )}
                
                            
                        </>
      ) : (
        <p>Loading ...</p>
      )}
                
       
       
        </div>
     
       
    
    </div>
    
    <Footer></Footer>  
    </>
  )
}

export default FokotanyParCommune

