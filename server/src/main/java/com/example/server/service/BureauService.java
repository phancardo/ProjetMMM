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
        if (existProvince.isPresent()) {
            Province province = existProvince.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            province.setBureau(savedBureau);
            provinceService.addProvince(province);
            return savedBureau;
        } else if (existRegion.isPresent()) {
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
}
