package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.service.BureauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/bureau")
public class BureauController {

    @Autowired
    private BureauService bureauService;

    @GetMapping("/{id}")
    public Optional<Bureau> getBureauById(@PathVariable int id) {
        return bureauService.getBureauById(id);
    }

    @GetMapping("")
    public Iterable<Bureau> getAllBureau() {
        return bureauService.getAllBureau();
    }

    @PostMapping("")
    public Bureau addBureau(@RequestBody Map<String, String> bureauMap) {
        Bureau newBureau = new Bureau();
        newBureau.setLieuBureau(bureauMap.get("lieuBureau"));
        int id = Integer.parseInt(bureauMap.get("idPlace"));
        return bureauService.addBureau(newBureau, id);
    }
}
