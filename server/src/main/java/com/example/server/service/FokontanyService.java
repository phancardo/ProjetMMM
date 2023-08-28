package com.example.server.service;

import com.example.server.model.Fokontany;
import com.example.server.repository.FokontanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FokontanyService {

    @Autowired
    private FokontanyRepository fokontanyRepository;

    public Optional<Fokontany> getFokontanyById(int id) {
        return fokontanyRepository.findById(id);
    }

    public Iterable<Fokontany> getAllFokontany() {
        return fokontanyRepository.findAll();
    }

//    public Fokontany addFokontany (Fokontany newFokontany) {
//        return
//    }
}
