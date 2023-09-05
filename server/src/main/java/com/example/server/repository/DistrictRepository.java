package com.example.server.repository;

import com.example.server.model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {

    Optional<District> findByNomDistrict(String nomDistrict);
}
