package com.example.server.controller;

import com.example.server.model.Region;
import com.example.server.service.RegionService;
import com.example.server.service.SearchSercvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private SearchSercvice searchSercvice;

    @GetMapping("")
    public List<String> findByNomRegionContaining(@RequestBody Map<String, String> mapRegion) {
        return searchSercvice.searchByNomContaining(mapRegion.get("nomRegion"));
    }
}
