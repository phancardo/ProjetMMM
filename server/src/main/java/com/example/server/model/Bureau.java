package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "bureau")
public class Bureau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, nullable = false)
    private String lieuBureau;

    @OneToOne (fetch = FetchType.EAGER)
    private Personnel coordonateur;

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel president;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<Personnel> vicePresident = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel secretaireGeneral;

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel tresorier;

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel commissaireAuxCompte;

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel responsableCommunication;

    @OneToOne(fetch = FetchType.LAZY)
    private Personnel secretaire;

    @OneToMany(fetch = FetchType.LAZY)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<Personnel> conseillers = new ArrayList<>();

    public void Bureau() {
    }
}
