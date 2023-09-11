package com.example.server.service;

import com.example.server.model.*;
import com.example.server.repository.BureauRepository;
import com.example.server.repository.PersonnelRepository;
import com.example.server.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class RegionService {

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private BureauRepository bureauRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    @Autowired
    private ProvinceService provinceService;

    public Optional<Region> getRegionById(int id) {
        return regionRepository.findById(id);
    }

    public Iterable<Region> getAllRegion() {
        return regionRepository.findAll();
    }

    public Region addRegion(Region newRegion, int idProvince) {
        Optional<Province> isExistProvince = provinceService.getProvinceById(idProvince);
        if (isExistProvince.isPresent()) {
            Province province = isExistProvince.get();
            Region savedRegion = regionRepository.save(newRegion);
            province.getRegionList().add(savedRegion);
            provinceService.updateProvince(province);

            return savedRegion;
        } else {
            return null;
        }
    }

    public Region updateRegion(Region  upRegion) {
        Optional<Region> isExistRegion = this.getRegionById(upRegion.getId());
        if (isExistRegion.isPresent()) {
            Region oldRegion = isExistRegion.get();
            if (upRegion.getNomRegion() != null){
                oldRegion.setNomRegion(upRegion.getNomRegion());
            }
            if (upRegion.getBureau() != null) {
                oldRegion.setBureau(upRegion.getBureau());
            }
            if (upRegion.getCoach() != null) {
                oldRegion.setCoach(upRegion.getCoach());
            }
            return regionRepository.save(oldRegion);
        } else {
            return null;
        }
    }

    public Region addBureauRegion(Bureau newBureau, int idRegion) {
        Optional<Region> isExistRegion = this.getRegionById(idRegion);
        if (isExistRegion.isPresent()) {
            Region upRegion = isExistRegion.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            upRegion.setBureau(savedBureau);
            updateRegion(upRegion);
            return upRegion;
        } else {
            return null;
        }
    }
    
    public Region addCoach(Personnel newCoach, int idRegion) {
        Optional<Region> isExistRegion = this.getRegionById(idRegion);
        if (isExistRegion.isPresent()) {
            Region region = isExistRegion.get();
            if (newCoach.getPoste().equals("coach")) {
                personnelRepository.save(newCoach);
                region.setCoach(newCoach);
                return updateRegion(region);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public Optional<Region> getRegionByNom(String nom) {
        return regionRepository.findByNomRegion(nom);
    }

    public List<Region> addListRegion(List<Region> regionList) {
        return regionRepository.saveAll(regionList);
    }
}
