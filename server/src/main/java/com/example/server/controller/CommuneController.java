package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.model.Commune;
import com.example.server.service.CommuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
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
    public Commune addCommune(@RequestBody Map<String, String> mapCommune) {
        Commune newCommune = new Commune();
        newCommune.setNomCommune(mapCommune.get("nomCommune"));

        int idDistrict = Integer.parseInt(mapCommune.get("idDistrict"));
        return communeService.addCommune(newCommune, idDistrict);
    }

    @PutMapping("/update")
    public Commune updateCommune(@RequestBody Commune upCommune) {
        return communeService.updateCommune(upCommune);
    }

    @PostMapping("/add_bureau")
    public Commune addBureauCommune(@RequestBody Map<String, String> mapBureau) {
        Bureau newBureau = new Bureau();
        newBureau.setLieuBureau(mapBureau.get("lieuBureau"));
        int idCommune = Integer.parseInt(mapBureau.get("idCommune"));
        Commune updatedCommune = communeService.addBureauCommune(newBureau, idCommune);
        return updatedCommune;
    }
}
