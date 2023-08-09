package com.example.server.service;

import com.example.server.model.Personnel;
import com.example.server.repository.PersonnelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonnelService {

    @Autowired
    private PersonnelRepository personnelRepository;

    public Optional<Personnel> getPersonnelById(int id) {
        return personnelRepository.findById(id);
    }

    public Iterable<Personnel> getAllPersonnel() {
        return personnelRepository.findAll();
    }

    public Personnel addPersonnel(Personnel newPersonnel) {
        return personnelRepository.save(newPersonnel);
    }
}
