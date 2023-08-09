package com.example.server;

import com.example.server.model.Province;
import com.example.server.service.ProvinceService;
import com.example.server.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner {

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private RegionService regionService;

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

        List<Province> listProvince = new ArrayList<>();



    }
}
