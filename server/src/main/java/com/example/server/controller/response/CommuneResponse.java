package com.example.server.controller.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CommuneResponse {
    private int id;
    private String nomCommune;
}
