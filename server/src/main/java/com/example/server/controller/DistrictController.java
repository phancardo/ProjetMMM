package com.example.server.controller;

import com.example.server.model.District;
import com.example.server.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public District addDistrict(District newDistrict) {
        return districtService.addDistrict(newDistrict);
    }
}
