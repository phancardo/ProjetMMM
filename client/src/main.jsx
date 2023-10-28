import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListeProvince from './composants/ListeProvince.jsx'
import ListeRegion from './composants/ListeRegion.jsx'
import ListeBureau from './composants/ListeBureau.jsx'
import District_Region from './composants/District_Region.jsx'
import Commune from './composants/Commune.jsx'
import ImportExel from './composants/importExel.jsx'
import DetailCommune from './composants/FokotanyParCommune.jsx'
import Modal_Coach from './composants/Modal_Coach.jsx'
import AjoutBureauRegion from './composants/AjoutBureauRegion.jsx'
import DetailRegion from './composants/DetailRegion.jsx'
import DetailDistrirct from './composants/DetailDistrict.jsx'
import AddCommune from './composants/AddCommune.jsx'
import FokotanyParCommune from './composants/FokotanyParCommune.jsx'
import RechercheAvancer from './composants/RechercheAvancer.jsx'
import Region_crud from './composants/Region_crud.jsx'
import Login from './composants/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/listeRegion" element={<ListeRegion/>}></Route>
        <Route path="/listeProvince" element={<ListeProvince/>}></Route>   
        <Route path="/" element={<ListeRegion/>}></Route>
        <Route path="/ListeBureau" element={<ListeBureau/>}></Route>
        <Route path="/DistrictRegion/:id_region" element={<District_Region/>}></Route>
        <Route path="/Commune/:id_district" element={<Commune/>}></Route>
        <Route path="/DetailRegion/:id_region" element={<DetailRegion/>}></Route>
        <Route path="/DetailDistrict/:id_district" element={<DetailDistrirct/>}></Route>
        <Route path="/FokotanyParCommune/:id_commune" element={<FokotanyParCommune/>}></Route>
        <Route path="/AddCommune/:id_commune" element={<AddCommune/>}></Route>
        <Route path="/RechercheAvancer" element={<RechercheAvancer/>}></Route>
        <Route path="/test" element={<Region_crud/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        

        
        <Route path="/CommuneDistrict" element={<Commune/>}></Route>
        <Route path="/DetailCommune" element={<DetailCommune/>}></Route>
        <Route path="/exel" element={<ImportExel/>}></Route>
        <Route path="/essai" element={<Modal_Coach/>}></Route>
        <Route path="/AjoutBureauRegion" element={<AjoutBureauRegion/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
