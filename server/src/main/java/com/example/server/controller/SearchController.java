package com.example.server.controller;

import com.example.server.model.Commune;
import com.example.server.model.District;
import com.example.server.model.Fokontany;
import com.example.server.model.Region;
import com.example.server.service.SearchSercvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private SearchSercvice searchSercvice;

    @PostMapping("/region")
    public ResponseEntity<List<Map<String, Object>>> findByNomRegionContaining(@RequestBody Map<String, String> mapRegion) {
        List<Map<String, Object>> resonse = new ArrayList<>();
        List<Region> regionList = searchSercvice.searchByNomContaining(mapRegion.get("nomRegion"));

        for (Region region : regionList) {
            Map<String, Object> mapResponse = mapResponse(region.getId(), "nomRegion", region.getNomRegion());
            resonse.add(mapResponse);
        }
        return ResponseEntity.ok(resonse);
    }

    @PostMapping("/district")
    public ResponseEntity<List<Map<String, Object>>> findDistrict(@RequestBody Map<String, String> mapRegion) {
        List<Map<String, Object>> response = new ArrayList<>();
        if (mapRegion.get("idRegion" ) != null) {
            List<District> districtList = searchSercvice.searchByNomDistrictContaining(Integer.parseInt(mapRegion.get("idRegion")), mapRegion.get("nomDistrict"));

            for (District district : districtList) {
                Map<String, Object> mapResponse = mapResponse(district.getId(), "nomDistrict", district.getNomDistrict());
                response.add(mapResponse);
            }
            return ResponseEntity.ok(response);
        } else {
            List<District> districtList = searchSercvice.searchDistrictByNomStartingWith(mapRegion.get("nomDistrict"));

            for (District district : districtList) {
                Map<String, Object> mapResponse = mapResponse(district.getId(), "nomDistrict", district.getNomDistrict());
                response.add(mapResponse);
            }

            return ResponseEntity.ok(response);
        }
    }

    @PostMapping("/commune")
    public ResponseEntity<List<Map<String, Object>>> findCommune(@RequestBody Map<String, String> mapCommune) {
        List<Map<String, Object>> response = new ArrayList<>();
        if (mapCommune.get("idRegion" ) != null) {
            List<Commune> communeList = searchSercvice.searchCommuneByIdDistrictAndNomCommune(Integer.parseInt(mapCommune.get("idDistrict")), mapCommune.get("nomCommune"));

            for (Commune commune : communeList) {
                Map<String, Object> mapResponse = mapResponse(commune.getId(), "nomCommune", commune.getNomCommune());
                response.add(mapResponse);
            }
            return ResponseEntity.ok(response);
        } else {
            List<Commune> communes = searchSercvice.searchCommuneByNomStartingWith(mapCommune.get("nomCommune"));

            for (Commune commune : communes) {
                Map<String, Object> mapResponse = mapResponse(commune.getId(), "nomCommune", commune.getNomCommune());
                response.add(mapResponse);
            }

            return ResponseEntity.ok(response);
        }
    }

    @PostMapping("/fokontany")
    public ResponseEntity<List<Map<String, Object>>> findFokontany(@RequestBody Map<String, String> mapFokontany) {
        List<Map<String, Object>> response = new ArrayList<>();
        if (mapFokontany.get("idCommune" ) != null) {
            List<Fokontany> fokontanies = searchSercvice.searchFokontanyByIdCommuneAndNomFokontany(Integer.parseInt(mapFokontany.get("idCommune")), mapFokontany.get("nomFokontany"));

            for (Fokontany fokontany : fokontanies) {
                Map<String, Object> mapResponse = mapResponse(fokontany.getId(), "nomCommune", fokontany.getNomFokontany());
                response.add(mapResponse);
            }
            return ResponseEntity.ok(response);
        } else {
            List<Fokontany> fokontanyList = searchSercvice.searchFokontanyByNomStartingWith(mapFokontany.get("nomFokontany"));

            for (Fokontany fokontany : fokontanyList) {
                Map<String, Object> mapResponse = mapResponse(fokontany.getId(), "nomFokontany", fokontany.getNomFokontany());
                response.add(mapResponse);
            }

            return ResponseEntity.ok(response);
        }
    }

    private Map<String, Object> mapResponse(int id, String nomKey, String nomValue) {
        Map<String, Object> response = new HashMap<>();
        response.put("id", id);
        response.put(nomKey, nomValue);

        return response;
    }
}
