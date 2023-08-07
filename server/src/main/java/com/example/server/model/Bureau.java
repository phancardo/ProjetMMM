package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "bureau")
public class Bureau {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(length = 50)
    private String lieuBureau;

    @Column(length = 10)
    private int recep_numero;

    private String recep_image;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_bureau")
    private List<Personnel> personnel = new ArrayList<>();

    public void Bureau() {

    }
}
