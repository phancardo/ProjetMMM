package com.example.server.service;

import com.example.server.model.Bureau;
import com.example.server.model.Province;
import com.example.server.model.Region;
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

    public Optional<Bureau> getBureauById(int id) {
        return bureauRepository.findById(id);
    }

    public Iterable<Bureau> getAllBureau() {
        return bureauRepository.findAll();
    }

    public Bureau addBureau(Bureau newBureau) {
        String province = "province";
        String region = "region";
        String district = "district";
        String commune = "commune";
        if (newBureau.getTypeBureau().equals(province)){
            String typeLieu = newBureau.getTypeLieu();
            Optional<Province> getBureauProvince = provinceService.getProvinceByNom(typeLieu);
            if (getBureauProvince.isPresent()) {
                Province setBureauProvince = getBureauProvince.get();
                setBureauProvince.setBureau(newBureau);
                Bureau addedBureau = bureauRepository.save(newBureau);
                provinceService.addProvince(setBureauProvince);
                return addedBureau;
            } else {
                return null;
            }
        } else if (newBureau.getTypeBureau().equals(region)) {
            String typeLieu = newBureau.getTypeLieu();
            Optional<Region> getBureauRegion = regionService.getRegionByNom(typeLieu);
            if (getBureauRegion.isPresent()) {
                Region setBureauRegion = getBureauRegion.get();
                setBureauRegion.setBureau(newBureau);
                Bureau addedBureau = bureauRepository.save(newBureau);
                regionService.addRegion(setBureauRegion);
                return addedBureau;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}
