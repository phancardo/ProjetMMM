package com.example.server.repository;

import com.example.server.model.District;
import com.example.server.model.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RegionRepository extends JpaRepository<Region, Integer> {

    Optional<Region> findByNomRegion(String nom);

    List<Region> findByNomRegionStartingWith(String keyWords);
//
//    List<Region> findAllByBureauEmpty();
//
//    List<Region> findByNomRegionAndDistrictsNomDistrict(String nomRegion, String nomDistrict);


}
