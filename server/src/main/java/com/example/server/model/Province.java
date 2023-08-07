package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "province")
public class Province {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nom_province", length = 50)
    private String nomProvince;

    @OneToOne(fetch = FetchType.EAGER)
    private Bureau bureau;

    public void Province() {

    }
}
