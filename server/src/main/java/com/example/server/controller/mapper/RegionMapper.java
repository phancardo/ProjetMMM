package com.example.server.controller.mapper;

import com.example.server.controller.response.RegionResponse;
import com.example.server.model.Region;
import org.springframework.stereotype.Component;

@Component
public class RegionMapper {
    public RegionResponse toRest(Region domain) {
        return RegionResponse.builder()
                .id(domain.getId())
                .nomRegion(domain.getNomRegion())
                .build();
    }
}
