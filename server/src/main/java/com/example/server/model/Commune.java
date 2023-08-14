package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "commune")
public class Commune {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, nullable = false)
    private String nomCommune;

    @OneToOne(fetch = FetchType.EAGER)
    private Bureau bureau;

    public void Commune() {

    }
}
