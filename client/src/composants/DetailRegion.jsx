import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/district_region.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function DetailRegion() {
    const view = useNavigate();
    const [region,SetRegion] = useState([]);
    const [idlocalregion,SetIdLocalRegion] = useState([]);



    const{id_region}  = useParams();
    //SetIdLocalRegion(id_region);
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
    useEffect(() => {
        getRegionById();
        
    }, []);

    let idBureau = 0;
    if (region.bureau != undefined) {
        idBureau = region.bureau.id
      } else {
        idBureau = 0;
      }
    
    console.log(idBureau)
   
    
   

    



   ///////////////////////////////////////////////:::

   const ModalComponent = ({ show, onHide, poste, region,id_region }) => {
    const [personnel, setPersonnel] = useState({
        nomPersonnel: '',
        prenomPersonnel:'',
        poste:poste,
        adresse:'',
        tel:'',
        email:'',
        cin:'',
        idRegion:id_region,
        idBureau:idBureau,
    })

    
   

    const handleInputChange = (event) => {
    event.preventDefault();  
    const { name, value } = event.target;
    setPersonnel((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const handleSubmit = async  (event) => {
        event.preventDefault();
        console.log(personnel);
        
        Api.post('/personnel/add', personnel
        ,{headers:{'Content-Type': 'application/json'}}).then(
           
        ).catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
               
              } else if (error.request) {
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            console.log("Not connected!");
        });
        setShow(false)
        Api
        .get("/region/"+id_region, {
        headers: {
            "Content-Type": "application/json"
        },
        })
            .then((res) => {
                SetRegion(res.data);
                
        });
        
        
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> {poste} region {region} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom :</Form.Label>
            <Form.Control
                type="text"
                placeholder="Nom"
                name="nomPersonnel"
                autoFocus
                value={personnel.nomPersonnel}
                onChange={handleInputChange}
                       
            />
             </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prénom :</Form.Label>
            <Form.Control
                type="text"
                name="prenomPersonnel"
                autoFocus
                value={personnel.prenomPersonnel}
                onChange={handleInputChange}
            />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Adresse :</Form.Label>
            <Form.Control
                type="text"
                placeholder="Adresse"
                name="adresse"
                autoFocus
                value={personnel.adresse}
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Telephone :</Form.Label>
            <Form.Control
                type="text"
                placeholder="numero "
                name="tel"
                autoFocus
                value={personnel.tel}
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email :</Form.Label>
            <Form.Control
                type="text"
                placeholder="email"
                name="email"
                autoFocus
                value={personnel.email}
                onChange={handleInputChange}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Numero CIN :</Form.Label>
            <Form.Control
                type="text"
                placeholder="CIN"
                name="cin"
                autoFocus
                value={personnel.cin}
                onChange={handleInputChange}
            />
            </Form.Group>
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Enregistrer
        </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const ModalInsertionBureau = ({ show, onHide,region,id_region }) => {
    const [bureau, setBureau] = useState({
        lieuBureau: '',
        idRegion:id_region,
       
    });
    

   

    const DonneeBureau = (event) => {
    event.preventDefault();  
    const { name, value } = event.target;
    setBureau((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const AddBureau = async (event) => {
        event.preventDefault();
        console.log(bureau);
        await Api.post('/region/add_bureau', bureau
        ,{headers:{'Content-Type': 'application/json'}}).then(
            
        ).catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
               
              } else if (error.request) {
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            console.log("Not connected!");
        });
        Api
        .get("/region/"+id_region, {
        headers: {
            "Content-Type": "application/json"
        },
        })
            .then((res) => {
               SetRegion(res.data);
                
        });
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Bureau region {region} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lieu du bureau :</Form.Label>
            <Form.Control
                type="text"
                placeholder="Nom lieu"
                name="lieuBureau"
                autoFocus
                value={bureau.lieuBureau}
                onChange={DonneeBureau}
                       
            />
            </Form.Group>
            
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Annuler
          </Button>
          <Button variant="primary" onClick={AddBureau}>
            Enregistrer
        </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false)
    Api
        .get("/region/"+id_region, {
        headers: {
            "Content-Type": "application/json"
        },
        })
            .then((res) => {
               SetRegion(res.data);
                
        });
    };
  const openModal = (nomPoste) => {

   
    setShow(nomPoste)

  
    };
   
  
  return (
    <>
    <Header></Header>
    <div className='row ' style={{padding:10}}>
        <div className='col-md-6 ' style={{marginLeft:20}}>
                
            {region.nomRegion != undefined ? (
            <h3>Membre de bureau Region : {region.nomRegion.toUpperCase()}</h3>
            ) : (
                
                <p>Loading</p>
                
            )}

       
        
            {region.bureau != undefined ? (
                <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU REGION {region.nomRegion.toUpperCase()} </h5>
                
                <>
                    {region.coach != undefined ?(
                        <h5  >Coach : {region.coach.nomPersonnel}<h6 style={{float:'right'}}> {region.coach.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Coach :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("coach")}  >ajouter coach</Link></h5>
                            <ModalComponent
                                show={show === "coach"}
                                onHide={closeModal}
                                poste="coach"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}
                    {region.bureau.coordonateur != undefined ?(
                        <h5  >Coordonateur : {region.bureau.coordonateur.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.coordonateur.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Coordonnateur :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("coordonateur")}  >ajouter coordonnateur</Link></h5>
                            <ModalComponent
                                show={show === "coordonateur"}
                                onHide={closeModal}
                                poste="coordonateur"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.president != undefined ?(
                        <h5  >Président : {region.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.president.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Président :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("president")}  >ajouter président</Link></h5>
                            <ModalComponent
                                show={show === "president"}
                                onHide={closeModal}
                                poste="president"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}
                    
                    {region.bureau.VicePresident != undefined ?(
                        <h5  >Vice-Président : {region.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.president.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Vice-Président : <Link style={{textDecoration:'none'}}  onClick={() => openModal("vicePresident")}  >ajout Vice-Président</Link></h5>
                            <ModalComponent
                                show={show === "vicePresident"}
                                onHide={closeModal}
                                poste="vicePresident"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.secretaireGeneral != undefined ?(
                        <h5  >Secrétaire Général : {region.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.president.tel}</h6></h5>
                    ) : (
                        <>
                             <h5>Secrétaire Général : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaireGeneral")}  >ajout secrétaire général</Link></h5>
                            <ModalComponent
                                show={show === "secretaireGeneral"}
                                onHide={closeModal}
                                poste="secretaireGeneral"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.tresorier != undefined ?(
                        <h5  >Trésorier : {region.bureau.tresorier.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.tresorier.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Trésorier : <Link style={{textDecoration:'none'}}  onClick={() => openModal("tresorier")}  >ajout trésorier </Link></h5>
                            <ModalComponent
                                show={show === "tresorier"}
                                onHide={closeModal}
                                poste="tresorier"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.commissaireAuxCompte != undefined ?(
                        <h5  >Commissaire aux Comptes : {region.bureau.commissaireauxcomptes.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.commissaireauxcomptes.tel}</h6></h5>
                    ) : (
                        <>
                             <h5>Commissaire aux Comptes : <Link style={{textDecoration:'none'}}  onClick={() => openModal("commissaireauxcomptes")}  >ajout Commissaire aux Comptes :</Link></h5>
                            <ModalComponent
                                show={show === "commissaireauxcomptes"}
                                onHide={closeModal}
                                poste="CommisaireAuxComptes"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.commissaireAuxCompte != undefined ?(
                        <h5  >Responsable Communication : : {region.bureau.commissaireauxcomptes.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.commissaireauxcomptes.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Responsable Communication : <Link style={{textDecoration:'none'}}  onClick={() => openModal("responsableCommunication")}  >ajout Responsable Communication </Link></h5>
                            <ModalComponent
                                show={show === "responsableCommunication"}
                                onHide={closeModal}
                                poste="ResponsableCommunication"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.commissaireAuxCompte != undefined ?(
                        <h5  >Secrétaire :  {region.bureau.commissaireauxcomptes.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.commissaireauxcomptes.tel}</h6></h5>
                    ) : (
                        <>
                            <h5>Secrétaire : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaire")}  >ajout secrétaire :</Link></h5>
                            <ModalComponent
                                show={show === "secretaire"}
                                onHide={closeModal}
                                poste="secretaire"
                                region={region.nomRegion}
                                id_region={region.id}
                            />
                        </> 
                    )}

                    {region.bureau.commissaireAuxCompte != undefined ?(
                        <h5  >Conseillers :  {region.bureau.commissaireauxcomptes.nomPersonnel}<h6 style={{float:'right'}}> {region.bureau.commissaireauxcomptes.tel}</h6></h5>
                    ) : (
                        <>
                             <h5>Conseillers :<Link style={{textDecoration:'none'}}  onClick={() => openModal("conseillers")}  >ajout Conseillers</Link></h5>
                            <ModalComponent
                                show={show === "conseillers"}
                                onHide={closeModal}
                                poste="conseillers"
                                region={region.nomRegion}
                                id_region={region.id}
                            /> 
                        </> 
                    )}
                   
           
                
                    
                    
                    
                   
                   
                </>
            

            </div>
            ) : (
                <div className='card navgauche'>
                
                    <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU REGION 
                    {region.nomRegion != undefined ? (
                        <>{region.nomRegion.toUpperCase()}</>
                    ) : (
                    
                        <p>Pas de nom region</p>
                    )}
                        </h5> 
                        <h1><Link style={{textDecoration:'none'}}  onClick={() => openModal("bureau")}  >Pas de Bureau / Ajouter bureau</Link> </h1>
                        <ModalInsertionBureau
                        show={show === "bureau"}
                        onHide={closeModal}
                        region={region.nomRegion}
                        id_region={region.id}
                    />
                
                     
                </div>
            )}
            
        </div>
        {region.districts != undefined ? (
        <div className='row col-md-5 mx-auto '>
        <h2>Liste des districts de la region : <strong>{region.nomRegion.toUpperCase()}</strong></h2>
        {
            region.districts.map((liste) =>( 
                
                        
                <div className="row col-md-4" style={{borderStyle:'ridge',marginTop:5,height:70,marginLeft:10}}>
                    
                    <Link style={{textDecoration:'none'}}  to={`/DetailDistrict/${liste.id}`} ><h5 className="card-title">{liste.nomDistrict}</h5></Link>
                    
                        
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

export default DetailRegion

