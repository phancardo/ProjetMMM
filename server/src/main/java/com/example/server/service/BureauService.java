package com.example.server.service;

import com.example.server.model.*;
import com.example.server.repository.BureauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BureauService {

    @Autowired
    private BureauRepository bureauRepository;

    public Optional<Bureau> getBureauById(int id) {
        return bureauRepository.findById(id);
    }

    public Iterable<Bureau> getAllBureau() {
        return bureauRepository.findAll();
    }

    public Bureau updateBureau(Bureau upBureau) {
        Optional<Bureau> isExistBureau = getBureauById(upBureau.getId());
        if (isExistBureau.isPresent()) {
            Bureau oldBureau = isExistBureau.get();
            if (upBureau.getLieuBureau() != null) {
                oldBureau.setLieuBureau(upBureau.getLieuBureau());
            }
            if (upBureau.getCoordonateur() != null) {
                oldBureau.setCoordonateur(upBureau.getCoordonateur());
            }
            if (upBureau.getCommissaireAuxCompte() != null) {
                oldBureau.setCommissaireAuxCompte(upBureau.getCommissaireAuxCompte());
            }
            if (upBureau.getPresident() != null) {
                oldBureau.setPresident(upBureau.getPresident());
            }
            if (upBureau.getSecretaire() != null) {
                oldBureau.setSecretaire(upBureau.getSecretaire());
            }
            if (upBureau.getTresorier() != null) {
                oldBureau.setTresorier(upBureau.getTresorier());
            }
            if (upBureau.getResponsableCommunication() != null) {
                oldBureau.setResponsableCommunication(upBureau.getResponsableCommunication());
            }
            if (upBureau.getSecretaireGeneral() != null) {
                oldBureau.setSecretaireGeneral(upBureau.getSecretaireGeneral());
            }
            if (!upBureau.getConseillers().isEmpty()) {
                oldBureau.getConseillers().addAll(upBureau.getConseillers());
            }
            if (!upBureau.getVicePresident().isEmpty()) {
                oldBureau.getVicePresident().addAll(upBureau.getVicePresident());
            }
            return bureauRepository.save(oldBureau);
        } else {
            return null;
        }
    }
}
