package com.example.server.model.poste;

import com.example.server.model.Personnel;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "poste")
public class Poste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(fetch = FetchType.EAGER)
    private Personnel cordonateur;

    @OneToOne(fetch = FetchType.EAGER)
    private Personnel president;
}
