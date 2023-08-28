package com.example.server.controller;

import com.example.server.model.Bureau;
import com.example.server.service.BureauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
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

//    @PostMapping("/add")
//    public Bureau addBureau(@RequestBody Map<String, String> bureauMap) {
//        Bureau newBureau = new Bureau();
//        newBureau.setLieuBureau(bureauMap.get("lieuBureau"));
//        int id = Integer.parseInt(bureauMap.get("idPlace"));
//        return bureauService.addBureau(newBureau, id);
//    }

    @PutMapping("/update")
    public Bureau updateBureau(@RequestBody Bureau upBureau) {
        return bureauService.updateBureau(upBureau);
    }
}
