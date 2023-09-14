package com.example.server.service;

import com.example.server.model.Commune;
import com.example.server.model.District;
import com.example.server.model.Fokontany;
import com.example.server.model.Region;
import com.example.server.repository.CommuneRepository;
import com.example.server.repository.DistrictRepository;
import com.example.server.repository.FokontanyRepository;
import com.example.server.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchSercvice {

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private CommuneRepository communeRepository;

    @Autowired
    private FokontanyRepository fokontanyRepository;

    public List<Region> searchByNomContaining(String keyword) {
        return regionRepository.findByNomRegionStartingWith(keyword);
    }

    public List<District> searchByNomDistrictContaining(int idRegion, String nomDistrict) {
        return districtRepository.getDistrictByIdRegion(idRegion, nomDistrict);
    }

    public List<District> searchDistrictByNomStartingWith(String nomDistrict) {
        return districtRepository.findByNomDistrictStartingWith(nomDistrict);
    }

    public List<Commune> searchCommuneByNomStartingWith(String nomCommune) {
        return communeRepository.findByNomCommuneStartingWith(nomCommune);
    }

    public List<Commune> searchCommuneByIdDistrictAndNomCommune(int idDistrict, String nomCommune) {
        return communeRepository.getCommunesByIdDistrictAndNomCommune(idDistrict, nomCommune);
    }

    public List<Fokontany> searchFokontanyByNomStartingWith(String nom) {
        return fokontanyRepository.findByNomFokontanyStartingWith(nom);
    }
    public List<Fokontany> searchFokontanyByIdCommuneAndNomFokontany(int idCommune, String nomFokontany) {
        return fokontanyRepository.getFokontanyByIdCommuneAndNomFokontany(idCommune,nomFokontany);
    }
}
