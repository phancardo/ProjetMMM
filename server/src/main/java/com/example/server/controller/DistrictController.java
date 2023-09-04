package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.model.District;
import com.example.server.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
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
    public District addDistrict(@RequestBody Map<String, String> mapDistrict) {
        District newDistrict = new District();
        newDistrict.setNomDistrict(mapDistrict.get("nomDistrict"));
        int idRegion = Integer.parseInt(mapDistrict.get("idRegion"));

        return districtService.addDistrict(newDistrict, idRegion);
    }

    @PostMapping("/add_bureau")
    public District addBureauDistrict(@RequestBody Map<String, String> mapBureau) {
        Bureau newBureau = new Bureau();
        newBureau.setLieuBureau(mapBureau.get("lieuBureau"));
        int idDistrict = Integer.parseInt(mapBureau.get("idDistrict"));
        District updatedRegion = districtService.addBureauDistrict(newBureau, idDistrict);
        return updatedRegion;
    }
}
