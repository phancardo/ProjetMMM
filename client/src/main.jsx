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
import DetailCommune from './composants/DetailCommune.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/listeRegion" element={<ListeRegion/>}></Route>
        <Route path="/listeProvince" element={<ListeProvince/>}></Route>   
        <Route path="/" element={<ListeRegion/>}></Route>
        <Route path="/ListeBureau" element={<ListeBureau/>}></Route>
        <Route path="/DistrictRegion/:id_region" element={<District_Region/>}></Route>
        <Route path="/CommuneDistrict/:id_district" element={<Commune/>}></Route>
        <Route path="/CommuneDistrict" element={<Commune/>}></Route>
        <Route path="/DetailCommune" element={<DetailCommune/>}></Route>
        <Route path="/exel" element={<ImportExel/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
