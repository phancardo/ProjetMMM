package com.example.server.repository;

import com.example.server.model.Fokontany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FokontanyRepository extends JpaRepository<Fokontany, Integer> {
    List<Fokontany> findByNomFokontanyStartingWith(String nom);

    @Query(value = "SELECT * FROM Fokontany where id_commune = :idCommune and nom_fokontany like :nomFokontany%", nativeQuery = true)
    List<Fokontany> getFokontanyByIdCommuneAndNomFokontany(@Param("idCommune") int idCommune, @Param("nomFokontany") String nomFokontany);

    @Query(value = "SELECT * FROM Fokontany where id_commune = :idCommune", nativeQuery = true)
    List<Fokontany> getFokontanyByIdCommune(@Param("idCommune") int idCommune);
}
