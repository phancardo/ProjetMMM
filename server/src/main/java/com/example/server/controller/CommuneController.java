package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.model.Commune;
import com.example.server.model.District;
import com.example.server.service.CommuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/commune")
public class CommuneController {

    @Autowired
    private CommuneService communeService;

    @GetMapping("/{id}")
    public Optional<Commune> getCommuneById(int id) {
        return communeService.getCommuneById(id);
    }

    @GetMapping("")
    public Iterable<Commune> getAllCommune() {
        return communeService.getAllCommune();
    }

    @PostMapping("/add")
    public Commune addCommune(@RequestBody Commune newCommune) {
        return communeService.addCommune(newCommune);
    }

    @PutMapping("/update")
    public Commune updateCommune(@RequestBody Commune upCommune) {
        return communeService.updateCommune(upCommune);
    }

    @PostMapping("/add_bureau")
    public Commune addBureauCommune(@RequestBody Map<String, String> mapBureau) {
        Bureau newBureau = new Bureau();
        newBureau.setLieuBureau(mapBureau.get("lieuBureau"));
        int idRegion = Integer.parseInt(mapBureau.get("idRegion"));
        Commune updatedCommune = communeService.addBureauCommune(newBureau, idRegion);
        return updatedCommune;
    }
}
