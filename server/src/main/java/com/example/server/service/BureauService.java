package com.example.server.service;

import com.example.server.model.*;
import com.example.server.repository.BureauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BureauService {

    @Autowired
    private BureauRepository bureauRepository;

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private RegionService regionService;

    @Autowired
    private DistrictService districtService;

    @Autowired
    private CommuneService communeService;

    public Optional<Bureau> getBureauById(int id) {
        return bureauRepository.findById(id);
    }

    public Iterable<Bureau> getAllBureau() {
        return bureauRepository.findAll();
    }

    public Bureau addBureau(Bureau newBureau, int id) {
        Optional<Province> existProvince = provinceService.getProvinceById(id);
        Optional<Region> existRegion = regionService.getRegionById(id);
        Optional<District> existDistrict = districtService.getDistrictById(id);
        Optional<Commune> existCommune = communeService.getCommuneById(id);
        if (existRegion.isPresent()) {
            Region region = existRegion.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            region.setBureau(savedBureau);
            regionService.addRegion(region);
            return savedBureau;
        } else if (existDistrict.isPresent()) {
            District district = existDistrict.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            district.setBureau(savedBureau);
            districtService.addDistrict(district);
            return savedBureau;
        } else if (existCommune.isPresent()) {
            Commune commune = existCommune.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            commune.setBureau(savedBureau);
            communeService.addCommune(commune);
            return savedBureau;
        }
        else {
            return null;
        }
    }

//    public Bureau addNewPersonnel(Personnel newPersonnel, int id) {
//        Optional<Bureau> isExistBureau = getBureauById(id);
//        if (isExistBureau.isPresent()) {
//            Bureau upToDateBureau = isExistBureau.get();
//            upToDateBureau.getPersonnel().add(newPersonnel);
//            return bureauRepository.save(upToDateBureau);
//        } else {
//            return null;
//        }
//    }

    public Bureau updateBureau(Bureau upBureau) {
        Optional<Bureau> isExistBureau = getBureauById(upBureau.getId());
        if (isExistBureau.isPresent()) {
            Bureau oldBureau = isExistBureau.get();
            if (upBureau.getLieuBureau() != null) {
                oldBureau.setLieuBureau(upBureau.getLieuBureau());
            }
            if (upBureau.getCoordonateur() != null) {
                oldBureau.setCoordonateur(upBureau.getCoordonateur());
            }
            if (upBureau.getCommissaireAuxCompte() != null) {
                oldBureau.setCommissaireAuxCompte(upBureau.getCommissaireAuxCompte());
            }
            if (upBureau.getPresident() != null) {
                oldBureau.setPresident(upBureau.getPresident());
            }
            if (upBureau.getSecretaire() != null) {
                oldBureau.setSecretaire(upBureau.getSecretaire());
            }
            if (upBureau.getTresorier() != null) {
                oldBureau.setTresorier(upBureau.getTresorier());
            }
            if (upBureau.getResponsableCommunication() != null) {
                oldBureau.setResponsableCommunication(upBureau.getResponsableCommunication());
            }
            if (upBureau.getSecretaireGeneral() != null) {
                oldBureau.setSecretaireGeneral(upBureau.getSecretaireGeneral());
            }
            if (!upBureau.getConseillers().isEmpty()) {
                oldBureau.getConseillers().addAll(upBureau.getConseillers());
            }
            if (!upBureau.getVicePresident().isEmpty()) {
                oldBureau.getVicePresident().addAll(upBureau.getVicePresident());
            }
            return bureauRepository.save(oldBureau);
        } else {
            return null;
        }
    }
}
