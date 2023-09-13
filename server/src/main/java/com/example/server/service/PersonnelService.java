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

            switch (newPersonnel.getPoste()) {
                case "coordonateur" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setCoordonateur(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "president" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setPresident(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "responsableCommunication" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setResponsableCommunication(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "vicePresident" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.getVicePresident().add(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "secretaireGeneral" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setSecretaireGeneral(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "tresorier" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setTresorier(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "CommissaireAauxComptes" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setCommissaireAuxCompte(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "secretaire" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.setSecretaire(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                case "conseillers" -> {
                    Personnel addPersonnel = personnelRepository.save(newPersonnel);
                    updateBureau.getConseillers().add(addPersonnel);
                    bureauService.updateBureau(updateBureau);
                }
                default -> throw new IllegalStateException("Unexpected value: " + newPersonnel.getPoste());
            }
            return newPersonnel;
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
