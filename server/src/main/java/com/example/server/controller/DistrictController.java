package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.model.District;
import com.example.server.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    @GetMapping("/{id}")
    public Optional<District> getDistrictById(@PathVariable int id) {
        return districtService.getDistrictById(id);
    }

    @GetMapping("")
    public Iterable<District> getAllDistrict() {
        return districtService.getAllDistrict();
    }

    @PostMapping("/add")
    public District addDistrict(District newDistrict) {
        return districtService.addDistrict(newDistrict);
    }

    @PostMapping("/add_bureau")
    public District addBureauDistrict(@RequestBody Map<String, String> mapBureau) {
        Bureau newBureau = new Bureau();
        newBureau.setLieuBureau(mapBureau.get("lieuBureau"));
        int idRegion = Integer.parseInt(mapBureau.get("idRegion"));
        District updatedRegion = districtService.addBureauDistrict(newBureau, idRegion);
        return updatedRegion;
    }
}
