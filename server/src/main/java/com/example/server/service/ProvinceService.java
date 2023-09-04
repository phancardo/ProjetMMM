package com.example.server.service;

import com.example.server.model.Province;
import com.example.server.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    public Optional<Province> getProvinceById(int id) {
        return provinceRepository.findById(id);
    }

    public Iterable<Province> getAllProvince() {
        return provinceRepository.findAll();
    }

    public Province addProvince(Province newProvince){
        return provinceRepository.save(newProvince);
    }

    public List<Province> addListProvince(List<Province> provinceList) {
        return provinceRepository.saveAll(provinceList);
    }

    public Province updateProvince(Province upProvince) {
        Optional<Province> isExistProvince = this.getProvinceById(upProvince.getId());
        if (isExistProvince.isPresent()) {
            Province oldProvince = isExistProvince.get();
            if (upProvince.getNomProvince() != null) {
                oldProvince.setNomProvince(upProvince.getNomProvince());
            }
            if (!upProvince.getRegionList().isEmpty()) {
                oldProvince.getRegionList().addAll(upProvince.getRegionList());
            }
            return provinceRepository.save(oldProvince);
        } else {
            return null;
        }
    }

    public Optional<Province> getProvinceByNom(String nom) {
        return provinceRepository.findByNomProvince(nom);
    }
}
