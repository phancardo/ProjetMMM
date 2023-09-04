package com.example.server.service;

import com.example.server.model.Bureau;
import com.example.server.model.Commune;
import com.example.server.model.District;
import com.example.server.repository.BureauRepository;
import com.example.server.repository.CommuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommuneService {

    @Autowired
    private CommuneRepository communeRepository;

    @Autowired
    private BureauRepository bureauRepository;

    private DistrictService districtService;

    public Optional<Commune> getCommuneById(int id) {
        return communeRepository.findById(id);
    }

    public Iterable<Commune> getAllCommune() {
        return communeRepository.findAll();
    }

    public Commune addCommune(Commune newCommune, int idDistrict) {
        Optional<District> isExistDistrict = districtService.getDistrictById(idDistrict);
        if (isExistDistrict.isPresent()) {
            District checkedDistrict = isExistDistrict.get();
            Commune savedCommune = communeRepository.save(newCommune);
            checkedDistrict.getCommunes().add(savedCommune);
            districtService.updateDistrict(checkedDistrict);
            return savedCommune;
        } else {
            return null;
        }
    }

    public Commune updateCommune(Commune upCommune) {
        Optional<Commune> isExistCommune = communeRepository.findById(upCommune.getId());
        if (isExistCommune.isPresent()) {
            Commune oldCommune = isExistCommune.get();
            if (upCommune.getNomCommune() != null) {
                oldCommune.setNomCommune(upCommune.getNomCommune());
            }
            if (upCommune.getBureau() != null) {
                oldCommune.setBureau(upCommune.getBureau());
            }
            return communeRepository.save(oldCommune);
        } else {
            return null;
        }
    }

    public Commune addBureauCommune(Bureau newBureau, int idRegion) {
        Optional<Commune> isExistCommune = this.getCommuneById(idRegion);
        if (isExistCommune.isPresent()) {
            Commune upCommune = isExistCommune.get();
            Bureau savedBureau = bureauRepository.save(newBureau);
            upCommune.setBureau(savedBureau);
            this.updateCommune(upCommune);
            return upCommune;
        } else {
            return null;
        }
    }
}
