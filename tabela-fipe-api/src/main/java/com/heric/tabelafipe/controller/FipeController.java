package com.heric.tabelafipe.controller;

import com.heric.tabelafipe.service.ConsumoApiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fipe")
public class FipeController {

    private final ConsumoApiService consumoApiService;

    public FipeController(ConsumoApiService consumoApiService) {
        this.consumoApiService = consumoApiService;
    }

    @GetMapping("/marcas")
    public String getMarcas() {
        String url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        return consumoApiService.obterDados(url);
    }

    @GetMapping("/modelos/{codigoMarca}")
    public String getModelos(@PathVariable String codigoMarca) {
        String url = "https://parallelum.com.br/fipe/api/v1/carros/marcas/" + codigoMarca + "/modelos";
        return consumoApiService.obterDados(url);
    }

    @GetMapping("/anos/{codigoMarca}/{codigoModelo}")
    public String getAnos(@PathVariable String codigoMarca, @PathVariable String codigoModelo) {
        String url = "https://parallelum.com.br/fipe/api/v1/carros/marcas/" + codigoMarca + "/modelos/" + codigoModelo + "/anos";
        return consumoApiService.obterDados(url);
    }

    @GetMapping("/valor/{codigoMarca}/{codigoModelo}/{ano}")
    public String getValor(@PathVariable String codigoMarca,
                           @PathVariable String codigoModelo,
                           @PathVariable String ano) {
        String url = "https://parallelum.com.br/fipe/api/v1/carros/marcas/" + codigoMarca + "/modelos/" + codigoModelo + "/anos/" + ano;
        return consumoApiService.obterDados(url);
    }
}