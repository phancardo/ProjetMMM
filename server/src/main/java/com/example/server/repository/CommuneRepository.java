package com.example.server.repository;

import com.example.server.model.Commune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommuneRepository extends JpaRepository<Commune, Integer> {
    List<Commune> findByNomCommuneStartingWith(String key);

    @Query(value = "SELECT * FROM Commune where id_district = :idDistrict and nom_commune like :nomCommune%", nativeQuery = true)
    List<Commune> getCommunesByIdDistrictAndNomCommune(@Param("idDistrict") int idDistrict, @Param("nomCommune") String nomCommune);

    @Query(value = "SELECT * FROM Commune where id_district = :idDistrict", nativeQuery = true)
    List<Commune> getCommunesByIdDistrict(@Param("idDistrict") Integer idDistrict);
}
