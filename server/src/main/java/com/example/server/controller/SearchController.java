package com.example.server.controller;

import com.example.server.model.District;
import com.example.server.model.Region;
import com.example.server.service.SearchSercvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private SearchSercvice searchSercvice;

    @GetMapping("")
    public ResponseEntity<List<Map<String, Object>>> findByNomRegionContaining(@RequestBody Map<String, String> mapRegion) {
        List<Map<String, Object>> resonse = new ArrayList<>();
        List<Region> regionList = searchSercvice.searchByNomContaining(mapRegion.get("nomRegion"));

        for (Region region : regionList) {
            Map<String, Object> mapResponse = new HashMap<>();
            mapResponse.put("id", region.getId());
            mapResponse.put("nomRegion", region.getNomRegion());

            resonse.add(mapResponse);
        }

        return ResponseEntity.ok(resonse);
    }

    @GetMapping("/district")
    private ResponseEntity<List<Map<String, Object>>> findDistrict(@RequestBody Map<String, String> mapRegion) {
        List<Map<String, Object>> response = new ArrayList<>();

        if (mapRegion.get("idRegion" ) != null) {
            List<District> districtList = searchSercvice.searchByNomDistrictContaining(Integer.parseInt(mapRegion.get("idRegion")), mapRegion.get("nomDistrict"));

            for (District district : districtList) {
                Map<String, Object> mapResponse = new HashMap<>();
                mapResponse.put("id", district.getId());
                mapResponse.put("nomRegion", district.getNomDistrict());

                response.add(mapResponse);
            }

            return ResponseEntity.ok(response);
        } else {
            List<District> districtList = searchSercvice.searchByNomStartingWith(mapRegion.get("nomDistrict"));

            for (District district : districtList) {
                Map<String, Object> mapResponse = new HashMap<>();
                mapResponse.put("id", district.getId());
                mapResponse.put("nomRegion", district.getNomDistrict());

                response.add(mapResponse);
            }

            return ResponseEntity.ok(response);
        }
    }
}
