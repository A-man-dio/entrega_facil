package com.entrega_facil.spring_server_entrega_facil.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.entrega_facil.spring_server_entrega_facil.model.AdminEmpresa;
import com.entrega_facil.spring_server_entrega_facil.services.AdminEmpresaService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/AdminEmpresa")
public class AdminEmpresaController {

    @Autowired
    private AdminEmpresaService adminEmpresaService;

    @GetMapping("/get-all")
    public List<AdminEmpresa> getAllAdminEmpresas() {
        return adminEmpresaService.getAllAdminEmpresas();
    }

    @GetMapping("/getAdminEmpresaByUsername")
    public ResponseEntity<AdminEmpresa> getAdminEmpresaByUsername(@RequestParam String username) {
        AdminEmpresa adminEmpresa = adminEmpresaService.findByUserName(username);
        if (adminEmpresa == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(adminEmpresa);
    }

    @GetMapping("/getAdminEmpresaByUsernameAndSenha")
    public ResponseEntity<AdminEmpresa> getAdminEmpresaByUsernameAndSenha(@RequestParam String username,
            @RequestParam String senha) {
        AdminEmpresa adminEmpresa = adminEmpresaService.findByUserNameAndSenha(username, senha);
        if (adminEmpresa == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(adminEmpresa);
    }

    @PostMapping("/save")
    public AdminEmpresa saveAdminEmpresa(@RequestBody AdminEmpresa adminEmpresa) {
        return adminEmpresaService.save(adminEmpresa);
    }

    @DeleteMapping("/delete")
    public void deleteAdminEmpresa(@RequestBody AdminEmpresa adminEmpresa) {
        adminEmpresaService.delete(adminEmpresa);
    }

}
