package com.example.server.controller;

import com.example.server.model.Personnel;
import com.example.server.service.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/personnel")
public class PersonnelController {

    @Autowired
    private PersonnelService personnelService;

    @GetMapping("/{id}")
    public Optional<Personnel> getPersonnelById(@PathVariable int id) {
        return personnelService.getPersonnelById(id);
    }

    @GetMapping("")
    public Iterable<Personnel> getAllPersonnel() {
        return personnelService.getAllPersonnel();
    }

    @PostMapping("")
    public Personnel addPersonnel(@RequestBody Personnel newPersonnel) {
        return personnelService.addPersonnel(newPersonnel);
    }
}
