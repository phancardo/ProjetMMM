package com.example.server.controller;

import com.example.server.controller.mapper.CommuneMapper;
import com.example.server.controller.mapper.DistrictMapper;
import com.example.server.controller.mapper.FokontanyMapper;
import com.example.server.controller.mapper.RegionMapper;
import com.example.server.controller.response.CommuneResponse;
import com.example.server.controller.response.DistrictResponse;
import com.example.server.controller.response.FokontanyResponse;
import com.example.server.controller.response.RegionResponse;
import com.example.server.service.SearchSercvice;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchSercvice searchSercvice;
    private final RegionMapper regionMapper;
    private final DistrictMapper districtMapper;
    private final CommuneMapper communeMapper;
    private final FokontanyMapper fokontanyMapper;

    @PostMapping("/region")
    public ResponseEntity<List<RegionResponse>> findByNomRegionContaining(@RequestBody Map<String, String> mapRegion) {
        return ResponseEntity.
                ok(searchSercvice.searchByNomContaining(mapRegion.get("nomRegion"))
                        .stream().map(regionMapper::toRest).toList());
    }

    @PostMapping("/district")
    public ResponseEntity<List<DistrictResponse>> findDistrict(@RequestBody Map<String, String> mapRegion) {
        if (mapRegion.get("idRegion" ) != null) {
            return ResponseEntity.
                    ok(searchSercvice
                            .searchByNomDistrictContaining(Integer.parseInt(mapRegion.get("idRegion")), mapRegion.get("nomDistrict"))
                            .stream().map(districtMapper::toRest).toList());
        } else {
            return ResponseEntity.ok(searchSercvice.searchDistrictByNomStartingWith(mapRegion.get("nomDistrict"))
                    .stream().map(districtMapper::toRest).toList());
        }
    }

    @PostMapping("/commune")
    public ResponseEntity<List<CommuneResponse>> findCommune(@RequestBody Map<String, String> mapCommune) {
        if (mapCommune.get("idDistrict" ) != null) {
            return ResponseEntity.ok(searchSercvice.searchCommuneByIdDistrictAndNomCommune(Integer.parseInt(mapCommune.get("idDistrict")), mapCommune.get("nomCommune"))
                    .stream().map(communeMapper::toRest).toList());
        } else {
            return ResponseEntity.ok(searchSercvice.searchCommuneByNomStartingWith(mapCommune.get("nomCommune"))
                    .stream().map(communeMapper::toRest).toList());
        }
    }

    @PostMapping("/fokontany")
    public ResponseEntity<List<FokontanyResponse>> findFokontany(@RequestBody Map<String, String> mapFokontany) {
        List<Map<String, Object>> response = new ArrayList<>();
        if (mapFokontany.get("idCommune" ) != null) {
            return ResponseEntity.ok(searchSercvice.searchFokontanyByIdCommuneAndNomFokontany(Integer.parseInt(mapFokontany.get("idCommune")), mapFokontany.get("nomFokontany"))
                    .stream().map(fokontanyMapper::toRest).toList());
        } else {
            return ResponseEntity.ok(searchSercvice.searchFokontanyByNomStartingWith(mapFokontany.get("nomFokontany"))
                    .stream().map(fokontanyMapper::toRest).toList());
        }
    }
}
