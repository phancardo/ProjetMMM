package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "region")
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nom_region", length = 50, nullable = false, unique = true)
    private String nomRegion;

    @OneToOne(fetch = FetchType.EAGER)
    private Bureau bureau;

    @OneToOne(fetch = FetchType.EAGER)
    private Personnel coach;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinColumn(name = "id_region")
    private List<District> districts = new ArrayList<>();
}
