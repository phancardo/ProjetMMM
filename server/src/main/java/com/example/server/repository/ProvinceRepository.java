package com.example.server.repository;

import com.example.server.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, Integer> {

    Optional<Province> findByNomProvince(String nom);
}
