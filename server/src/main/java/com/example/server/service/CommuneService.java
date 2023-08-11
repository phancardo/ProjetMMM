package com.example.server.service;

import com.example.server.model.Commune;
import com.example.server.repository.CommuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommuneService {

    @Autowired
    private CommuneRepository communeRepository;

    public Optional<Commune> getCommuneById(int id) {
        return communeRepository.findById(id);
    }

    public Iterable<Commune> getAllCommune() {
        return communeRepository.findAll();
    }

    public Commune addCommune(Commune newCommune) {
        return communeRepository.save(newCommune);
    }
}