package com.example.server.repository;

import com.example.server.model.Fokontany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FokontanyRepository extends JpaRepository<Fokontany, Integer> {
}
