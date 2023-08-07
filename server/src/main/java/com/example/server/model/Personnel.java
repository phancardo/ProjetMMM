package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "personnel")
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(length = 50)
    private String nomPersonnel;

    @Column(length = 50)
    private String prenomPersonnel;

    @Column(length = 60)
    private String adresse;

    @Column(length = 60)
    private String email;

    @Column(length = 50)
    private int tel;

    @Column(length = 50)
    private String poste;

    public void Personnel() {

    }

}
