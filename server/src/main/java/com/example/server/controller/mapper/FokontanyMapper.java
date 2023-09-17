package com.example.server.controller.mapper;

import com.example.server.controller.response.FokontanyResponse;
import com.example.server.model.Fokontany;
import org.springframework.stereotype.Component;

@Component
public class FokontanyMapper {
    public FokontanyResponse toRest(Fokontany domaine) {
        return FokontanyResponse.builder()
                .id(domaine.getId())
                .nomFokontany(domaine.getNomFokontany())
                .build();
    }
}
