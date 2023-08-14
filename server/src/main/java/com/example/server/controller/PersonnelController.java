package com.example.server.controller;

import com.example.server.model.Personnel;
import com.example.server.service.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
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

    @PostMapping("/add")
    public Personnel addPersonnel(@RequestBody Map<String, String> mapPersonnel) {
        int idBureau = Integer.parseInt(mapPersonnel.get("idBureau"));

        Personnel newPersonnel = new Personnel();
        newPersonnel.setNomPersonnel(mapPersonnel.get("nomPersonnel"));
        newPersonnel.setPrenomPersonnel(mapPersonnel.get("prenomPersonnel"));
        newPersonnel.setAdresse(mapPersonnel.get("addresse"));
        newPersonnel.setEmail(mapPersonnel.get("email"));
        newPersonnel.setPoste(mapPersonnel.get("poste"));
        newPersonnel.setTel(Integer.parseInt(mapPersonnel.get("tel")));

        return personnelService.addPersonnel(newPersonnel, idBureau);
    }

    @PutMapping("/update")
    public Personnel updatePersonnel(@RequestBody Personnel upPersonnel) {
        return personnelService.updatePersonnel(upPersonnel);
    }
}
