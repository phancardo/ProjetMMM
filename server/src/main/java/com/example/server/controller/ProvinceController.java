package com.example.server.controller;

import com.example.server.model.Province;
import com.example.server.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/province")
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    @GetMapping("/{id}")
    public Optional<Province> getProvinceById(@PathVariable int id) {
        return provinceService.getProvinceById(id);
    }

    @GetMapping("")
    public Iterable<Province> getAllProvince() {
        return provinceService.getAllProvince();
    }

    @PostMapping("")
    public Province saveProvince(@RequestBody Province newProvince){
        return provinceService.addProvince(newProvince);
    }

    @PostMapping("/list")
    public List<Province> saveListProvince(@RequestBody List<Province> provinceList) {
        return provinceService.addListProvince(provinceList);
    }

}
