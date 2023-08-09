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
}
