package com.entrega_facil.spring_server_entrega_facil.controllers;


import com.entrega_facil.spring_server_entrega_facil.model.Entrega;
import com.entrega_facil.spring_server_entrega_facil.services.EntregaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/entregas")
public class EntregaController {

    @Autowired
    private EntregaService entregaService;

    @GetMapping
    public List<Entrega> getAllEntregas() {
        return entregaService.getAllEntregas();
    }

    @PostMapping
    public Entrega createEntrega(@RequestBody Entrega entrega) {
        return entregaService.save(entrega);
    }

    @GetMapping("/empresa/{idEmpresa}")
    public List<Entrega> getEntregasByIdEmpresa(@PathVariable int idEmpresa) {
        return entregaService.findByIdEmpresa(idEmpresa);
    }

    @GetMapping("/utilizador/{idUtilizador}")
    public List<Entrega> getEntregasByIdUtilizador(@PathVariable int idUtilizador) {
        return entregaService.findByIdUtilizador(idUtilizador);
    }

    @PutMapping("/{id}")
    public Entrega updateEntrega(@PathVariable int id, @RequestBody Entrega updatedEntrega) {
        Entrega entregaExistente = entregaService.findById(id);
        if (entregaExistente != null) {
            entregaExistente.setEstado(updatedEntrega.getEstado());
            entregaExistente.setIdEmpresa(updatedEntrega.getIdEmpresa());
            return entregaService.save(entregaExistente);
        }
        return null;
    }
    //empresa aceita uma entrega
    @PutMapping("/{id}/estado")
    public ResponseEntity<Entrega> atualizarEstadoEEmpresa(
            @PathVariable int id,
            @RequestBody Map<String, String> body) {

        String novoEstado = body.get("estado");
        String idEmpresaStr = body.get("idEmpresa");
        String preco = body.get("preco");


        Entrega entrega = entregaService.findById(id);

        if (entrega == null) {
            return ResponseEntity.notFound().build();
        }

        entrega.setEstado(novoEstado);

        try {
            int novoIdEmpresa = Integer.parseInt(idEmpresaStr);
            int novoPreco = Integer.parseInt(preco);
            entrega.setIdEmpresa(novoIdEmpresa);
            entrega.setPreco(novoPreco);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body(null);
        }

        entregaService.save(entrega);
        return ResponseEntity.ok(entrega);
    }

}