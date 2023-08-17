package com.example.server.model;

import com.example.server.model.poste.Poste;
import jakarta.persistence.*;
import lombok.Data;

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

    @OneToOne(fetch = FetchType.EAGER)
    private Poste poste;

    public void Bureau() {

    }
}
