package com.example.server.controller;

import com.example.server.model.Province;
import com.example.server.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(name = "/province")
public class ProvinceController {

    @Autowired
    private ProvinceRepository provinceRepository;

    @GetMapping(name = "/{id}")
    public Optional<Province> getProvinceById(@PathVariable int id) {
        return provinceRepository.findById(id);
    }

    @GetMapping(name = "")
    public Iterable<Province> getAllProvince() {
        return provinceRepository.findAll();
    }

    @PostMapping(name = "")
    public Province saveProvince(@RequestBody Province newProvince){
        return provinceRepository.save(newProvince);
    }


}
