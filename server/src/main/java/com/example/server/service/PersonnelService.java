package com.example.server.service;

import com.example.server.model.Bureau;
import com.example.server.model.Personnel;
import com.example.server.repository.PersonnelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonnelService {

    @Autowired
    private PersonnelRepository personnelRepository;

    @Autowired
    private BureauService bureauService;

    public Optional<Personnel> getPersonnelById(int id) {
        return personnelRepository.findById(id);
    }

    public Iterable<Personnel> getAllPersonnel() {
        return personnelRepository.findAll();
    }

    public Personnel addPersonnel(Personnel newPersonnel, int id) {
        Optional<Bureau> isExistBureau = bureauService.getBureauById(id);
        if (isExistBureau.isPresent()) {
            Bureau updateBureau = isExistBureau.get();
            Personnel addPersonnel = personnelRepository.save(newPersonnel);
            switch (addPersonnel.getPoste()) {
                case "coordonateur" -> updateBureau.setCoordonateur(newPersonnel);
                case "president" -> updateBureau.setPresident(newPersonnel);
                case "vice president" -> updateBureau.getVicePresident().add(newPersonnel);
                case "tresorier" -> updateBureau.setTresorier(newPersonnel);
                case "commissaire au compte" -> updateBureau.setCommissaireAuxCompte(newPersonnel);
            }
            return addPersonnel;
        } else {
            return null;
        }
    }

    public Personnel updatePersonnel(Personnel upPersonnel) {
        Optional<Personnel> isExistPersonnel = personnelRepository.findById(upPersonnel.getId());
        if (isExistPersonnel.isPresent()) {
            Personnel personnel = isExistPersonnel.get();
            if (upPersonnel.getNomPersonnel() != null) {
                personnel.setNomPersonnel(upPersonnel.getNomPersonnel());
            }
            if (upPersonnel.getPrenomPersonnel() != null) {
                personnel.setPrenomPersonnel(upPersonnel.getPrenomPersonnel());
            }
            if (upPersonnel.getAdresse() != null) {
                personnel.setAdresse(upPersonnel.getAdresse());
            }
            if (upPersonnel.getEmail() != null) {
                personnel.setEmail(upPersonnel.getEmail());
            }
            if (upPersonnel.getTel() != null) {
                personnel.setTel(upPersonnel.getTel());
            }
            return personnelRepository.save(personnel);
        } else {
            return null;
        }
    }
}
