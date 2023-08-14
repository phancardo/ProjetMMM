package com.example.server.service;

import com.example.server.model.District;
import com.example.server.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    public Optional<District> getDistrictById(int id) {
        return districtRepository.findById(id);
    }

    public Iterable<District> getAllDistrict() {
        return districtRepository.findAll();
    }

    public District addDistrict(District newDistrict) {
        return districtRepository.save(newDistrict);
    }

    public District updateDistrict(District upDistrict) {
        Optional<District> isExistDistrict = districtRepository.findById(upDistrict.getId());
        if (isExistDistrict.isPresent()) {
            District oldDistrict = isExistDistrict.get();
            if (upDistrict.getNomDistrict() != null) {
                oldDistrict.setNomDistrict(upDistrict.getNomDistrict());
            }
            if (upDistrict.getBureau() != null) {
                oldDistrict.setBureau(upDistrict.getBureau());
            }
            return districtRepository.save(oldDistrict);
        } else {
            return null;
        }
    }
}
