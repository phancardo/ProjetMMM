package com.example.server.repository;

import com.example.server.model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {

    Optional<District> findByNomDistrict(String nomDistrict);

    List<District> findByNomDistrictStartingWith(String keyword);

    @Query(value = "SELECT * FROM District where id_region = :idRegion and nom_district like :nomDistrict%",
            nativeQuery = true)
    List<District> getDistrictByIdRegion(@Param("idRegion") Integer idRegion, @Param("nomDistrict") String nomDistrict);
}
