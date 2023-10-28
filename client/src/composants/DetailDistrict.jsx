import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/district_region.css'
import Footer from './Footer'
import Header from './Header'
import { Await, Link, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DetailDistrict() {
    const view = useNavigate();
    const [district,SetDistrict] = useState([]);
    const [show, setShow] = useState(false);
    
  

    
    
    const{id_district}  = useParams();
    useEffect(() => {
        Api
        .get("/district/"+id_district, {
        headers: {
            "Content-Type": "application/json"
        },
        })
            .then((res) => {
                console.log(res.data);
               SetDistrict(res.data);     
        });
        
    }, []);
    //console.log(id_region);
    

    let idBureau = 0;
    if (district.bureau != undefined) {
        idBureau = district.bureau.id
      } else {
        idBureau = 0;
      }
    
    console.log(district)
   
  const [showToast, setShowToast] = useState(false);

  function closeModal(){setShow(false)}; 
  const openModal = (nomPoste) => {
    setShow(nomPoste)
    console.log(show)
};
    
   

    



   ///////////////////////////////////////////////:::
    
   const ModalComponent = ({ show, onHide, poste, district,id_district }) => {
    const [personnel, setPersonnel] = useState({
        nomPersonnel: '',
        prenomPersonnel:'',
        poste:poste,
        adresse:'',
        tel:'',
        email:'',
        cin:'',
        idDistrict:id_district,
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

    /* refa mi enregistrer de ra success de mippoitra ny tost success  */
    const handleSubmit = async  (event) => {
        event.preventDefault();
        console.log(personnel);
        
        Await
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
                console.log('Error', error.message);
              }
              console.log(error.config);
            console.log("Not connected!");
        });
        window.location.reload()

       
      
        
       /*  toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }) */
       
        
        
        
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> {poste} district {district} </Modal.Title>
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
                value={personnel.nomPersonnell}
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
            
            
                <ToastContainer
                />
                
        </Modal.Footer>
      </Modal>
    );
  };

  const ModalInsertionBureau = ({ show, onHide,district,id_district }) => {
    const [bureau, setBureau] = useState({
        lieuBureau: '',
        idDistrict:id_district,
       
    });

   

    const DonneeBureau = (event) => {
    event.preventDefault();  
    const { name, value } = event.target;
    setBureau((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };
    const AddBureau = (event) => {
        event.preventDefault();
        console.log(bureau);
        Api.post('/district/add_bureau', bureau
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
       
        window.location.reload()
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Bureau district {district} </Modal.Title>
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
  
  

    

   
  
  return (
    <>
    <Header></Header>
    <div className='row ' style={{padding:10}}>
        <div className='col-md-6 ' style={{marginLeft:20}}>
                
            {district.nomDistrict!= undefined ? (
            <h3> DISTRICT : {district.nomDistrict.toUpperCase()}</h3>
            ) : (
                
                <p>Loading</p>
                
            )}

       
        
        {district.bureau != undefined ? (
                <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU  {district.nomDistrict.toUpperCase()} </h5>
                {district.bureau != undefined ? (
                    <>
                        
                        {district.bureau.coordonateur != undefined ?(
                            <h5  >Coordonateur : {district.bureau.coordonateur.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.coordonateur.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Coordonnateur :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("coordonateur")}  >ajouter coordonnateur</Link></h5>
                            <ModalComponent
                                show={show === "coordonateur"}
                                onHide={closeModal}
                                poste="coordonateur"
                                district={district.nomDistrict}
                                id_district={district.id}  
                            />
                        </>
                            
                            
                        )}

                        {district.bureau.president != undefined ?(
                            <h5  >Président : {district.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.president.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Président :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("president")}  >ajouter Président</Link></h5>
                            <ModalComponent
                                show={show === "president"}
                                onHide={closeModal}
                                poste="president"
                                district={district.nomDistrict}
                                id_district={district.id}  
                            />
                        </>
                            
                            
                        )}

                        {district.bureau.conseillers.length != 0 ? (
                            
                            <h5  >Vice-Président : {console.log(district.bureau.vicePresident)}{district.bureau.vicePresident.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.president.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Vice-Président : <Link style={{textDecoration:'none'}}  onClick={() => openModal("vicePresident")}  >ajouter</Link></h5>
                            <ModalComponent
                                show={show === "vicePresident"}
                                onHide={closeModal}
                                poste="vice-President"
                                district={district.nomDistrict}
                                id_district={district.id}
                            />
                        </>    
                        )}

                        {district.bureau.secretaireGeneral != undefined ?(
                            <h5  >Secrétaire Général :  {district.bureau.secretaireGeneral.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.secretaireGeneral.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Secrétaire Général : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaireGeneral")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "secretaireGeneral"}
                        onHide={closeModal}
                        poste="secretaireGeneral"
                        district={district.nomDistrict}
                        id_district={district.id}
                    />
                        </>    
                        )}

                        {district.bureau.tresorier != undefined ?(
                            <h5  >Trésorier : {district.bureau.tresorier.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.tresorier.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Trésorier : <Link style={{textDecoration:'none'}}  onClick={() => openModal("tresorier")}  >ajouter</Link></h5>
                            <ModalComponent
                                show={show === "tresorier"}
                                onHide={closeModal}
                                poste="tresorier"
                                district={district.nomDistrict}
                                id_district={district.id}
                            />
                        </>    
                        )}

                        {district.bureau.commissaireAuxCompte != undefined ?(
                            <h5  >Commissaire aux Comptes : {district.bureau.commissaireAuxCompte.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.commissaireAuxCompte.tel}</h6></h5>
                        ) : (
                        <>
                             <h5>Commissaire aux Comptes : <Link style={{textDecoration:'none'}}  onClick={() => openModal("commissaireauxcomptes")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "commissaireauxcomptes"}
                        onHide={closeModal}
                        poste="CommisaireAuxComptes"
                        district={district.nomDistrict}
                        id_district={district.id}
                    />
                        </>    
                        )}

                        {district.bureau.responsalbleCommunication != undefined ?(
                            <h5  >Responsable Communication : {district.bureau.responsalbleCommunication.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.responsalbleCommunication.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Responsable Communication : <Link style={{textDecoration:'none'}}  onClick={() => openModal("responsableCommunication")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "responsableCommunication"}
                        onHide={closeModal}
                        poste="responsableCommunication"
                        district={district.nomDistrict}
                        id_district={district.id}
                    />
                        </>    
                        )}

                        {district.bureau.secretaire != undefined ?(
                            <h5  >Secrétaire : {district.bureau.secretaire.nomPersonnel}<h6 style={{float:'right'}}> {district.bureau.secretaire.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Secrétaire : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaire")}  >ajouter</Link></h5>
                            <ModalComponent
                                show={show === "secretaire"}
                                onHide={closeModal}
                                poste="secretaire"
                                district={district.nomDistrict}
                                id_district={district.id}
                            />
                        </>    
                        )}

                        {district.bureau.conseillers.length != 0  ? (
                            <>
                                <h5  >Conseillers : {liste.nomPersonnel}<h6 style={{float:'right'}}> {liste.tel}</h6></h5>
                            </>

                        ) : (
                        <>
                            <h5>Conseillers :<Link style={{textDecoration:'none'}}  onClick={() => openModal("conseillers")}  >ajouter</Link></h5>
                            <ModalComponent
                                show={show === "conseillers"}
                                onHide={closeModal}
                                poste="conseillers"
                                district={district.nomDistrict}
                                id_district={district.id}
                            />
                        </>    
                        )}
                    </>
            ) : (
                <>
                 
                </>
            )}

            </div>
            ) : (
                <div className='card navgauche'>
                
                    <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU 
                    {district.nomDistrict!= undefined ? (
            <> DISTRICT : {district.nomDistrict.toUpperCase()}</>
            ) : (
                
                <p>Loading</p>
                
            )}
                        </h5> 
                        <h1><Link style={{textDecoration:'none'}}  onClick={() => openModal("bureau")}  >Pas de Bureau / Ajouter bureau</Link> </h1>
                        <ModalInsertionBureau
                        show={show === "bureau"}
                        onHide={closeModal}
                        district={district.nomDistrict}
                        id_district={district.id}
                    />
                
                     
                </div>
            )}
            
        </div>
        {district.communes != undefined ? (
        <div className='row col-md-5 mx-auto '>
        <h2>Liste des communes de la district : <strong>{district.nomDistrict.toUpperCase()}</strong></h2>
        {
            district.communes.map((liste) =>( 
                
                        
                <div className="row col-md-4" style={{borderStyle:'ridge',marginTop:5,height:70,marginLeft:10}}>
                    
                    <Link style={{textDecoration:'none'}}  to={`/AddCommune/${liste.id}`} ><h5 className="card-title">{liste.nomCommune}</h5></Link>
                    
                        
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

export default DetailDistrict
