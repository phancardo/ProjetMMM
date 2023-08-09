package com.example.server.service;

import com.example.server.model.Region;
import com.example.server.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegionService {

    @Autowired
    private RegionRepository regionRepository;

    public Optional<Region> getRegionById(int id) {
        return regionRepository.findById(id);
    }

    public Iterable<Region> getAllRegion() {
        return regionRepository.findAll();
    }

    public Region addRegion(Region newRegion) {
        return regionRepository.save(newRegion);
    }

    public Region updateRegion(Region  newRegion) {
        Optional<Region> oldRegion = this.getRegionById(newRegion.getId());
        if (oldRegion.isPresent()) {
            Region updatedRegion = oldRegion.get();
            if (!updatedRegion.getNomRegion().equals(newRegion.getNomRegion())){
                updatedRegion.setNomRegion(newRegion.getNomRegion());
            }
            return updatedRegion;
        } else {
            return null;
        }
    }

    public Optional<Region> getRegionByNom(String nom) {
        return regionRepository.findByNomRegion(nom);
    }
}
