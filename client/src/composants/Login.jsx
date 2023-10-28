import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMMM from '../assets/images/Logo-MMM-officiel.jpg'
import Api from './Api';
import '../css/Login.css';

 export default function Login(){

    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [mdp,setMdp] = useState("")
    const [error,setError] = useState("")

    function saveproduit(produit){
        localStorage.setItem("token",JSON.stringify(produit));
    }

    const connect = async (event) => {
        event.preventDefault();
        const employer = {email,mdp}
        console.log('email ='+email);
        console.log('passwd ='+mdp);
        console.log();
       
        await Api.post('/login', employer
        ,{headers:{'Content-Type': 'application/json'}}).then(
            res => {
                if(res.data === ""){
                    setError("Echec de la connexion.Verifier vos informations de connexion.");

                }
                else{
                    console.log(res);
                    saveproduit(res.data);
                    const role = res.data.role;
                    if(role === 2){
                        navigate('/homeAdmin')
                    }
                    else if(role === 1){
                        navigate('/home');
                } 
                } 
                
                
            }
        ).catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status===403){
                    setError("Echec de la connexion.Verifier vos informations de connexion.");
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            console.log("Not connected!");
        });
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className='col-md-12 center-div'>
                    
                    <h2 className='titre-login'>Login</h2>
                    <p style={{}}>Vous n'aves pas de compte ? <strong>S'inscrire</strong></p>
                    <label className='form-group titre-input'> Email :</label>
                    <div className="input-group flex-nowrap"> 
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Votre email" aria-label="Votre email" aria-describedby="addon-wrapping"/>
                    </div>
                    <label className='form-group titre-input'> Mot de passe :</label>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="Mot de passe" aria-label="Votre mot de passe" aria-describedby="addon-wrapping"/>
                    </div>

                    <div className="input-group flex-nowrap">
                        <button className='form-control boutton-login'>Se connecter</button>
                    </div>
                </div>
            </div>
        </div>


    );

 
}