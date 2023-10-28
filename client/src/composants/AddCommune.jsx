import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from './Api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function AddCommune() {
    const view = useNavigate();
    const [commune,SetCommune] = useState([]);

    
   

   

    

    useEffect(() => {
        getcommuneById();
        
    }, []);
    const{id_commune}  = useParams();
    //console.log(id_region);
    const getcommuneById = () => {
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

    let idBureau = 0;
    if (commune.bureau != undefined) {
        idBureau = commune.bureau.id
      } else {
        idBureau = 0;
      }
    
    console.log(commune.bureau)
   
    
   

    



   ///////////////////////////////////////////////:::

   const ModalComponent = ({ show, onHide, poste, commune,id_commune }) => {
    const [personnel, setPersonnel] = useState({
        nomPersonnel: '',
        prenomPersonnel:'',
        poste:poste,
        adresse:'',
        tel:'',
        email:'',
        cin:'',
        idCommune:id_commune,
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

    const handleSubmit = (event) => {
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
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> {poste} commune {commune} </Modal.Title>
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

  const ModalInsertionBureau = ({ show, onHide,commune,id_commune }) => {
    const [bureau, setBureau] = useState({
        lieuBureau: '',
        idCommune:id_commune,
       
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
        Api.post('/commune/add_bureau', bureau
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
    };
    
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Bureau commune {commune} </Modal.Title>
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

  const closeModal = () => setShow(false);
  const openModal = (nomPoste) => {

   
    setShow(nomPoste)

  
    };
   
    console.log(commune);
  
  return (
    <>
    <Header></Header>
    <div className='row ' style={{padding:10}}>
        <div className='col-md-6 ' style={{marginLeft:20}}>
                
            {commune.nomCommune!= undefined ? (
            <h3> commune : {commune.nomCommune.toUpperCase()}</h3>
            ) : (
                
                <p>Loading</p>
                
            )}

       
        
        {commune.bureau != undefined ? (
                <div className='card navgauche'>
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU  {commune.nomCommune.toUpperCase()} </h5>
                {commune.bureau != undefined ? (
                    <>
                        
                        {commune.bureau.coordonateur != undefined ?(
                            <h5  >Coordonateur : {commune.bureau.coordonateur.nomPersonnel}<h6 style={{float:'right'}}> {commune.bureau.coordonateur.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Coordonnateur :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("coordonateur")}  >ajouter coordonnateur</Link></h5>
                            <ModalComponent
                                show={show === "coordonateur"}
                                onHide={closeModal}
                                poste="coordonateur"
                                commune={commune.nomCommune}
                                id_commune={commune.id}  
                            />
                        </>
                            
                            
                        )}
                        {commune.bureau.president != undefined ?(
                            <h5  >Président : {commune.bureau.president.nomPersonnel}<h6 style={{float:'right'}}> {commune.bureau.president.tel}</h6></h5>
                        ) : (
                        <>
                            <h5>Président :  <Link style={{textDecoration:'none'}}  onClick={() => openModal("president")}  >ajouter Président</Link></h5>
                            <ModalComponent
                                show={show === "president"}
                                onHide={closeModal}
                                poste="president"
                                commune={commune.nomCommune}
                                id_commune={commune.id}  
                            />
                        </>
                            
                            
                        )}
                    </>
            ) : (
                <>
                    <h5>Coach : <Link style={{textDecoration:'none'}}  onClick={() => openModal("coach")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "coach"}
                        onHide={closeModal}
                        poste="coach"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    
                    <h5>Coordonateur : <Link style={{textDecoration:'none'}}  onClick={() => openModal("coordonateur")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "coordonateur"}
                        onHide={closeModal}
                        poste="coordonnateur"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                   
                     <h5>Président : <Link style={{textDecoration:'none'}}  onClick={() => openModal("president")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "president"}
                        onHide={closeModal}
                        poste="president"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    
                    <h5>Vice-Président : <Link style={{textDecoration:'none'}}  onClick={() => openModal("vicePresident")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "vicePresident"}
                        onHide={closeModal}
                        poste="vice-President"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    
                    <h5>Secrétaire Général : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaireGeneral")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "secretaireGeneral"}
                        onHide={closeModal}
                        poste="secretaireGeneral"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    <h5>Trésorier : <Link style={{textDecoration:'none'}}  onClick={() => openModal("tresorier")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "tresorier"}
                        onHide={closeModal}
                        poste="tresorier"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    
                    <h5>Commissaire aux Comptes : <Link style={{textDecoration:'none'}}  onClick={() => openModal("commissaireauxcomptes")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "commissaireauxcomptes"}
                        onHide={closeModal}
                        poste="Commisaire Aux Comptes"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    <h5>Responsable Communication : <Link style={{textDecoration:'none'}}  onClick={() => openModal("responsableCommunication")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "responsableCommunication"}
                        onHide={closeModal}
                        poste="responsableCommunication"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    <h5>Secrétaire : <Link style={{textDecoration:'none'}}  onClick={() => openModal("secretaire")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "secretaire"}
                        onHide={closeModal}
                        poste="secretaire"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    />
                    <h5>Conseillers :<Link style={{textDecoration:'none'}}  onClick={() => openModal("conseillers")}  >ajouter</Link></h5>
                    <ModalComponent
                        show={show === "conseillers"}
                        onHide={closeModal}
                        poste="conseillers"
                        commune={commune.nomCommune}
                        id_commune={commune.id}
                    /> 
                </>
            )}

            </div>
        ) : (
            <div className='card navgauche'>
            
                <h5 className='card-title' style={{textAlign:'center',padding:20}}>MEMBRE DU BUREAU 
                {commune.nomCommune != undefined ? (
                    <> {commune.nomCommune.toUpperCase()}</>
                ) : (
                
                    <> - Pas de  commune</>
                )}
                    </h5> 
                    <h1><Link style={{textDecoration:'none'}}  onClick={() => openModal("bureau")}  >Pas de Bureau / Ajouter bureau</Link> </h1>
                    <ModalInsertionBureau
                    show={show === "bureau"}
                    onHide={closeModal}
                    commune={commune.nomCommune}
                    id_commune={commune.id}
                />
            
                    
            </div>
        )}
            
        </div>
        {commune.commune != undefined ? (
        <div className='row col-md-5 mx-auto '>
        <h2>Liste des communes de la commune : <strong>{commune.nomCommune.toUpperCase()}</strong></h2>
        {
            commune.commune.map((liste) =>( 
                
                        
                <div className="row col-md-4" style={{borderStyle:'ridge',marginTop:5,height:70,marginLeft:10}}>
                    
                    <Link style={{textDecoration:'none'}}  to={``} ><h5 className="card-title">{liste.nomCommune}</h5></Link>
                    
                        
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

export default AddCommune
