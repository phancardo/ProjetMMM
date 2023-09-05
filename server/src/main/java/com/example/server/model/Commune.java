package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "commune")
public class Commune {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, nullable = false, unique = true)
    private String nomCommune;

    @OneToOne(fetch = FetchType.EAGER)
    private Bureau bureau;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Fokontany> fokontany = new ArrayList<>();

    public void Commune() {

    }
}
