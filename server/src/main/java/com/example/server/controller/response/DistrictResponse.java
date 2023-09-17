package com.example.server.controller.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DistrictResponse {
    private int id;
    private String nomDistrict;
}
