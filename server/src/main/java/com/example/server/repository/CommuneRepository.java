package com.example.server.repository;

import com.example.server.model.Commune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommuneRepository extends JpaRepository<Commune, Integer> {

    Optional<Commune> findByNomCommune(String nomCommune);

}
