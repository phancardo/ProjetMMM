package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "province")
public class Province {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nom_province", length = 50, nullable = false, unique = true)
    private String nomProvince;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinColumn(name = "id_province")
    private List<Region> regionList = new ArrayList<>();

    public void Province() {

    }
}
