package com.example.server.service;

import com.example.server.model.District;
import com.example.server.model.Region;
import com.example.server.repository.DistrictRepository;
import com.example.server.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SearchSercvice {

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private DistrictRepository districtRepository;

    public List<Region> searchByNomContaining(String keyword) {
        return regionRepository.findByNomRegionStartingWith(keyword);
    }

    public List<District> searchByNomDistrictContaining(int idRegion, String nomDistrict) {
        return districtRepository.getDistrictByIdRegion(idRegion, nomDistrict);
    }

    public List<District> searchByNomStartingWith(String nomDistrict) {
        return districtRepository.findByNomDistrictStartingWith(nomDistrict);
    }
}
