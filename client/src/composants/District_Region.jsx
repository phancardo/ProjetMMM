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

   

    



   ///////////////////////////////////////////////:::

   

   
  
  return (
    <>
    <Header></Header>
    <div className='row ' style={{padding:10}}>
        <div className='col-md-6 ' style={{marginLeft:20}}>
                
            {region.nomRegion != undefined ? (
            <h2>Region : {region.nomRegion.toUpperCase()}</h2>
            ) : (
                
                <p>Pas de nom region</p>
                
            )}

                
            {region.bureau != undefined ? (
                <div>       
                    {region.bureau.poste != undefined ? (
                        <>
                        <a href='#' style={{textDecoration:'none',color:'black'}}>
                            <p style={{fontSize:20}}>
                                Coordonateur Region {region.nomRegion.toUpperCase()} : 
                                {region.bureau.poste.coordonateur.nomPersonnel}-{region.bureau.poste.coordonateur.prenomPersonnel}-
                                {region.bureau.poste.coordonateur.tel}
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

            
          

                    
            {region.bureau != undefined ? (
                <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU REGION {region.nomRegion.toUpperCase()} </h5>
                 {region.bureau.president != undefined ? (
                <>
                    <h5  >Président : {region.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.president.tel}</h6></h5>
                    
                </>
                ) : (
                    <h5>Pas de president</h5>
                )}
                {/* <h5  >Vice-Président : RANDRIA <h6 style={{float:'right'}}> 0340512356</h6></h5>
                    <h5  >Secrétaire Général : {region.bureau.secretaireGeneral.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.secretaireGeneral.tel}</h6></h5>
                    <h5  >Trésorier : {region.bureau.tresorier.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.tresorier.tel}</h6></h5>
                    <h5  >Commissaire aux Comptes : {region.bureau.commissaireAuxCompte.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.commissaireAuxCompte.tel}</h6></h5>
                    <h5  >Responsable Communication : {region.bureau.responsableCommunication.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.responsableCommunication.tel}</h6></h5>
                    <h5  >Secrétaire : {region.bureau.secretaire.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.secretaire.tel}</h6></h5>
                    <h5  >Conseillers : DOLONIAINA {/* {region.bureau.poste.president.nomPersonnel}  <h6 style={{float:'right'}}> 0345612547  {region.bureau.poste.president.tel}  </h6></h5>
 */}
            </div>
            ) : (
                    
                <p>Pas de membre de bureau</p>
                
            )}
        </div>
        {region.districts != undefined ? (
        <div className='row col-md-5 mx-auto '>
        <h2>Liste des districts de la region : <strong>{region.nomRegion.toUpperCase()}</strong></h2>
        {
            region.districts.map((liste) =>( 
                <div key={liste.id} className="card col-md-4 " style={{width:245,height:140, marginLeft:10,marginTop:10
                    }}>
                        
                    <div className="card-body">
                        
                        <Link style={{textDecoration:'none'}} to={`/Commune/${liste.id}`}  ><h5 className="card-title">{liste.nomDistrict}</h5></Link>
                       
                        <div>
                            <a href='#' style={{textDecoration:'none',color:'black'}}>
                                <h6>Nom et prenom</h6>
                                <h6>numero </h6>
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

