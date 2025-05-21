package com.entrega_facil.spring_server_entrega_facil.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.entrega_facil.spring_server_entrega_facil.model.Entregador;
import com.entrega_facil.spring_server_entrega_facil.services.EntregadorService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/Entregador")
public class EntregadorController {

    @Autowired
    private EntregadorService entregadorService;

    @GetMapping("/get-all")
    public List<Entregador> getAllEntregadores() {
        return entregadorService.getAllEntregadores();
    }

    @GetMapping("/getEntregadorByUsername")
    public ResponseEntity<Entregador> getEntregadorByUsername(@RequestParam String username) {
        Entregador entregador = entregadorService.findByUserName(username);
        if (entregador == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(entregador);
    }

    @GetMapping("/getEntregadorByUsernameAndSenha")
    public ResponseEntity<Entregador> getEntregadorByUsernameAndSenha(@RequestParam String username,
            @RequestParam String senha) {
        Entregador entregador = entregadorService.findByUserNameAndSenha(username, senha);
        if (entregador == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(entregador);
    }

    @PostMapping("/save")
    public Entregador saveEntregador(@RequestBody Entregador entregador) {
        return entregadorService.save(entregador);
    }

    @DeleteMapping("/delete")
    public void deleteEntregador(@RequestBody Entregador entregador) {
        entregadorService.delete(entregador);
    }

}
