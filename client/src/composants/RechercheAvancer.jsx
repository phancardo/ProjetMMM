import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Api from "./Api";
import { ListGroup } from "react-bootstrap";

export default function RechercheAvancer() {

  const [reponseRecherche,setReponseRecherche] = useState([]);

  

  let idRegion = null;
  let idDistrict = null;
  let idCommune = null;
  

  let nomRegionNow = '';

  const [valeurInputRegion, setValeurInputRegion] = useState('');

  const [listeregion, setListeRegion] = useState([]);

  const [valeurInputDistrict, setValeurInputDistrict] = useState('');
  const [listedistrict, setListeDistrict] = useState([]);

  const [valeurInputCommune, setValeurInputCommune] = useState('');
  const [listecommune, setListeCommune] = useState([]);
  
  const [nomfokontany, setNomFokontany] = useState('');
  const [listefokontany, setListeFokontany] = useState([]);

  const [option,setOption] = useState('bureau');
  const [optionVide,setOptionVide] = useState('nonVide');

  
 
  const getReponse = () => {
    Api
    .get("/region", {
    headers: {
        "Content-Type": "application/json"
    },
    })
    .then((res) => {
    
      console.log(res.data)
      setReponseRecherche(res.data);
        
        
    });
  }
  useEffect(() => {
    getReponse();
  }, []);


  // Handle changes in the selected option
  const selectRadio = (event) => {
    setOption(event.target.value);
  };

  const selectVide = (event) => {
    setOptionVide(event.target.value);
  };


  

  const FindRegion = async   (e) => {
      
      /* setNomRegion(e.target.value); */
      setValeurInputRegion(e.target.value);
      const regiontest ={
        nomRegion:e.target.value
      } ;
      console.log(regiontest);
      Api
       .post("/search/region",regiontest, {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        console.log(res);
        setListeRegion(res.data);
           

      });   
      
  }
  const FindDistrict = async   (e) => {
      
      setValeurInputDistrict(e.target.value);
      const district ={
        nomDistrict:e.target.value,
        idRegion:idRegion
      } ;
      console.log(district);
      
      await Api
        .post("/search/district",district,  {
          headers: {"Content-Type": "application/json"},
        })
        .then((res) => {
          console.log(res);
          setListeDistrict(res.data);
        });   
  }

  const FindCommune = async   (e) => {
      
    setValeurInputCommune(e.target.value);
    const commune ={
      nomCommune:e.target.value,
      idDistrirct:idDistrict
    } ;
    console.log(commune);
    
    await Api
      .post("/search/commune",commune,  {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        console.log(res);
        setListeCommune(res.data);
      });   
}


  const GetIdRegionSerach =  (event,region,nomRegion) => {
    idRegion = region
    nomRegionNow = nomRegion
    setValeurInputRegion(nomRegion);
    const district ={
      nomDistrict:null,
      idRegion:idRegion
    } ;
    console.log(district);
    
    Api
      .post("/search/district",district,  {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        console.log(res);
        setListeDistrict(res.data);
      });
    setListeRegion([])
  }

  const GetIdDistrictSearch =  (event,district,nomDistrict) => {
    idDistrict = district
    setValeurInputDistrict(nomDistrict);
    const commune ={
      nomCommune:null,
      idDistrict:district
    } ;
    console.log(commune);
    
    Api
      .post("/search/commune",commune,  {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        console.log(res);
        setListeCommune(res.data);
      });
    setListeRegion([]);
    setListeDistrict([]);
  }

  const GetIdCommuneSearch =  (event,commune,nomCommune) => {
    idDistrict = commune
    setValeurInputCommune(nomCommune);
    const fokontany ={
      nomFokontany:null,
      idCommune:commune
    } ;
    console.log(commune);
    
    /* Api
      .post("/search/fokontany",fokontany,  {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        console.log(res);
        setListeFokontany(res.data);
      });
    setListeRegion([]);
    setListeDistrict([]);
    */setListeCommune([]); 
  }

  

  
  return (
    <>
      <Header></Header>
      
      <div className="container" style={{padding:20}}>
          <h1 style={{textAlign:'center'}}>Recherche Bureau</h1>
      <div className="row" style={{
        borderStyle:'solid',
        borderColor:'#011168',
        borderRadius:10,
        padding:20,
        marginTop:10,
        marginBottom:10

        
      }}>
        <div className="col-md-2">
          <label  className="form-label">Region :</label>
          <input type="text" className="form-control" 
          value={valeurInputRegion}
          onChange={(e) => FindRegion(e)} />
          <ListGroup>
              {listeregion.map(liste => (
              <a 
                href="#" 
                onClick={(e) => GetIdRegionSerach(e,liste.id,liste.nomRegion)}
              >
                <ListGroup.Item
                  key={liste.id}>
                  {liste.nomRegion}
                </ListGroup.Item>
              </a>
              ))}
            </ListGroup>
        </div>
        <div className="col-md-2">
          <label  className="form-label">District :</label>
          <input type="text" className="form-control" value={valeurInputDistrict}  onChange={(e) => FindDistrict(e)} />
          <ListGroup>
              {listedistrict.map(liste => (
              <a 
                href="#" 
                onClick={(e) => GetIdDistrictSearch(e,liste.id,liste.nomDistrict)}
              >
                <ListGroup.Item
                  key={liste.id}>
                  {liste.nomDistrict}
                </ListGroup.Item>
              </a>
              ))}
            </ListGroup>
        </div>
        <div className="col-md-2">
          <label  className="form-label">Commune :</label>
          <input type="text" className="form-control"  value={valeurInputCommune}  onChange={(e) => FindCommune(e)} />
          <ListGroup>
              {listecommune.map(liste => (
              <a 
                href="#" 
                onClick={(e) => GetIdCommuneSearch(e,liste.id,liste.nomCommune)}
              >
                <ListGroup.Item
                  key={liste.id}>
                  {liste.nomCommune}
                </ListGroup.Item>
              </a>
              ))}
            </ListGroup>
        </div>
        <div className="col-md-2">
          <label  className="form-label">Fokontany :</label>
          <input type="text" className="form-control"  onChange={(e) => FindRegion(e)} />
          <ListGroup>  
              {/* {listeregion.map((Liste, index) => (
              <ListGroup.Item key={index}>{Liste}</ListGroup.Item>
              ))} */}
            </ListGroup>
        </div>
        <div className="col-md-4">
          <div className="row">
          <label  className="form-label">Au choix :</label>
            <div className="col-md-4">
              <label>
                <input
                  type="radio"
                  value="bureau"
                  checked={ option === 'bureau'}
                  onChange={selectRadio}
                />
                Bureau 
            </label>
            </div>
            <div className="col-md-4">
            <label>
              <input
                type="radio"
                value="delegue"
                checked={ option === 'delegue'}
                onChange={selectRadio}
              />
              Déléguée
            </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>
                <input
                  type="radio"
                  value="vide"
                  checked={ optionVide === 'vide'}
                  onChange={selectVide}
                />
                Vide 
            </label>
            </div>
            <div className="col-md-4">
            <label>
              <input
                type="radio"
                value="nonVide"
                checked={ optionVide === 'nonVide'}
                onChange={selectVide}
              />Non vide
            </label>
            </div>
          </div>
       
        
        </div>
        
        
        
      </div>
      
    <div>
      <h2> Liste </h2>
      <table className="table table-bordered   table-hover" style={{borderStyle:'solid'}}>
        <thead>
          <tr>
            <th>Region</th>
            <th>District</th>
            <th>Commune</th>
            <th>Fokontany</th>
          </tr>
        </thead>
        <tbody>
        {reponseRecherche.map(liste => (   
          <tr key={liste.id}>
            <td>{liste.nomRegion}</td>
            <td>Ambohidratrimo</td>
            <td>Antehiroka</td>
            <td>Ambohibao</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </div>

      <Footer></Footer>
    </>
  );
}
