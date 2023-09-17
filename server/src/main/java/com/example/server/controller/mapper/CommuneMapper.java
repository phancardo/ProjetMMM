package com.example.server.controller.mapper;

import com.example.server.controller.response.CommuneResponse;
import com.example.server.model.Commune;
import org.springframework.stereotype.Component;

@Component
public class CommuneMapper {
    public CommuneResponse toRest(Commune domaine) {
        return CommuneResponse.builder()
                .id(domaine.getId())
                .nomCommune(domaine.getNomCommune())
                .build();
    }
}
