import 'bootstrap/dist/css/bootstrap.min.css'
import diego from '../assets/images/diego.jpg';
import majunga from'../assets/images/majunga.jpg';
import fianara from '../assets/images/fianarantsoa.jpg';
import toamasina from'../assets/images/toamasina.jpg';
import tulera from'../assets/images/tulear.jpg';
import Footer from './Footer';
import Header from './Header';
import Api from './Api';
import { useEffect, useState } from 'react';

function ListeProvince() {
    
    const [province,SetProvince] =useState([]);
    console.log(diego);
    useEffect(() => {
        getProvinces();
     }, []);
     
     const getProvinces = () => {
        Api
        .get("/liste_province", {
        headers: {
            "Content-Type": "application/json"
        },
        })
        .then((res) => {
        
            SetProvince(res.data);
        
        });
    }


  return (
    <>
    <Header></Header>
    <div className='row'>  
    {
        province.map(
            liste => 
            <div key={liste.id} className="card" style={{width: 250
                ,marginTop:20,marginBottom:20,marginLeft:30
                }}>
                    
                <img src="/src/assets/images/tana.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{liste.nomProvince}</h5>
                    <a href="#" className="btn btn-primary" style={{
                        textAlign:'center'
                    }}>Voir</a>
                </div>
            </div>
        )
        
    }
    </div>
    <Footer></Footer>
    </>
  )
}

export default ListeProvince
