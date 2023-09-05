package com.example.server.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class DonneesCSV {
    private String region;
    private String district;
    private String commune;
}
