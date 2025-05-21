package com.entrega_facil.spring_server_entrega_facil.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entrega_facil.spring_server_entrega_facil.model.Empresa;
import com.entrega_facil.spring_server_entrega_facil.services.EmpresaService;

@RestController
@RequestMapping("/Empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    @GetMapping("/get-all")
    public List<Empresa> getAllEmpresas() {
        return empresaService.getAllEmpresas();
    }

    @GetMapping("/getEmpresaByNome")
    public List<Empresa> getEmpresaByNome(@RequestParam String nome) {
        return empresaService.findByNome(nome);
    }

    @PostMapping("/save")
    public Empresa saveEmpresa(@RequestBody Empresa empresa) {
        return empresaService.save(empresa);
    }

    @DeleteMapping("/delete")
    public void deleteEmpresa(@RequestBody Empresa empresa) {
        empresaService.delete(empresa);
    }

    @GetMapping("/getEmpresaByID")
    public ResponseEntity<Empresa> getEmpresaByID(@RequestParam int id) {
        Empresa empresa = empresaService.findByID(id);
        if (empresa == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(empresa);
    }

}
