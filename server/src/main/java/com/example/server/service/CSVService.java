package com.example.server.service;

import com.example.server.model.DonneesCSV;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CSVService {

    public List<DonneesCSV> lireFichierCSV(File cheminFichier) throws IOException, CsvException {
        List<DonneesCSV> donneesCSVList = new ArrayList<>();

        CSVReader reader = new CSVReader(new FileReader(cheminFichier));
        donneesCSVList = reader.readAll().stream()
                .map(data -> {
                    DonneesCSV donneesCSV = new DonneesCSV();
                    donneesCSV.setRegion(data[0]);
                    donneesCSV.setDistrict(data[1]);
                    donneesCSV.setCommune(data[2]);
                    return donneesCSV;
                })
                .collect(Collectors.toList());
        return donneesCSVList;
    }
}
