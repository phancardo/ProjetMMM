package com.example.server.service;

import com.example.server.model.Region;
import com.example.server.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchSercvice {

    @Autowired
    private RegionRepository regionRepository;

    public List<String> searchByNomContaining(String keyword) {
        List<String> nomRegionList = new ArrayList<>();

        List<Region> regionList = regionRepository.findByNomRegionStartingWith(keyword);
        for (Region region : regionList) {
            nomRegionList.add(region.getNomRegion());
        }

        return nomRegionList;
    }
}
