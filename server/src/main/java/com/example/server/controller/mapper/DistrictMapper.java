package com.example.server.controller.mapper;

import com.example.server.controller.response.DistrictResponse;
import com.example.server.model.District;
import org.springframework.stereotype.Component;

@Component
public class DistrictMapper {
    public DistrictResponse toRest(District domain) {
        return DistrictResponse.builder()
                .id(domain.getId())
                .nomDistrict(domain.getNomDistrict())
                .build();
    }
}
