package com.example.server.controller;

import com.example.server.model.Region;
import com.example.server.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/region")
public class RegionController {

    @Autowired
    private RegionService regionService;

    @GetMapping("/{id}")
    public Optional<Region> getRegionById(@PathVariable int id) {
        return regionService.getRegionById(id);
    }

    @GetMapping("")
    public Iterable<Region> getAllRegion() {
        return regionService.getAllRegion();
    }

    @PostMapping("/add")
    public Region addRegion(@RequestBody Region newRegion) {
        return regionService.addRegion(newRegion);
    }

    @PutMapping("/update")
    public Region updateRegion(@RequestBody Region  newRegion) {
        return regionService.updateRegion(newRegion);
    }

    @PostMapping("/list")
    public List<Region> addListRegion(@RequestBody List<Region> regionList) {
        return regionService.addListRegion(regionList);
    }
}
