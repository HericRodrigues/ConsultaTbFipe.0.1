package com.heric.tabelafipe.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ConsumoApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String obterDados(String url) {
        return restTemplate.getForObject(url, String.class);
    }
}