package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "fokontany")
public class Fokontany {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nom_fokontany", length = 50, nullable = false, unique = true)
    private String nomFokontany;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Personnel> delegue = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private List<Personnel> contact = new ArrayList<>();

    public Fokontany() {
    }
}
