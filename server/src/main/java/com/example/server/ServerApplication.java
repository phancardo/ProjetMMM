package com.example.server;

import com.example.server.model.*;
import com.example.server.repository.CommuneRepository;
import com.example.server.repository.DistrictRepository;
import com.example.server.repository.RegionRepository;
import com.example.server.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner {

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private RegionService regionService;

    @Autowired
    private DistrictService districtService;

    @Autowired
    private CommuneService communeService;

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private CommuneRepository communeRepository;

    @Autowired
    private CSVService csvService;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        List<String> provinces = new ArrayList<>();
        provinces.add("Antananarivo");
        provinces.add("Antalaha");
        provinces.add("Mahajanga");
        provinces.add("Toamasina");
        provinces.add("Fianaratsoa");
        provinces.add("Toliara");

        List<Province> provinceList = new ArrayList<>();
        for (Province province : provinceList) {
            for (String nomProvince : provinces) {
                province.setNomProvince(nomProvince);
                provinceService.addProvince(province);
            }
        }

        Resource resource = new ClassPathResource("RDC.csv");
        File file = resource.getFile();
        List<DonneesCSV> donneesCSVList = csvService.lireFichierCSV(file);
        for (DonneesCSV donneesCSV : donneesCSVList) {
            Optional<Region> isExistRegion = regionRepository.findByNomRegion(donneesCSV.getRegion());
            if (isExistRegion.isEmpty()) {
//              Ajout de nouvel region
                Region region = new Region();
                region.setNomRegion(donneesCSV.getRegion());
                Region savedRegion = regionRepository.save(region);

//              Ajout de nouvel district avec l'id du nouvel region
                Optional<District> isExistDistrict = districtRepository.findByNomDistrict(donneesCSV.getDistrict());
                if (isExistDistrict.isEmpty()) {
                    District district = new District();
                    district.setNomDistrict(donneesCSV.getDistrict());
                    districtService.addDistrict(district, savedRegion.getId());
                }
            } else {
                Region getRegion = isExistRegion.get();
                Optional<District> isExistDistrict = districtRepository.findByNomDistrict(donneesCSV.getDistrict());
                if (isExistDistrict.isEmpty()) {
                    District district = new District();
                    district.setNomDistrict(donneesCSV.getDistrict());
                    District savedDistrict = districtService.addDistrict(district, getRegion.getId());

                    Optional<Commune> isExistCommune = communeRepository.findByNomCommune(donneesCSV.getCommune());
                    if (isExistCommune.isEmpty()) {
                        Commune commune = new Commune();
                        commune.setNomCommune(donneesCSV.getCommune());
                        communeService. addCommune(commune, savedDistrict.getId());
                    }
                } else {
                    District getDistrict = isExistDistrict.get();
                    Optional<Commune> isExistCommune = communeRepository.findByNomCommune(donneesCSV.getCommune());
                    if (isExistCommune.isEmpty()) {
                        Commune commune = new Commune();
                        commune.setNomCommune(donneesCSV.getCommune());
                        communeService.addCommune(commune, getDistrict.getId());
                    }
                }
            }
        }

    }
}
