package com.entrega_facil.spring_server_entrega_facil.services;


import com.entrega_facil.spring_server_entrega_facil.model.Entrega;
import com.entrega_facil.spring_server_entrega_facil.repositories.EntregaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EntregaService {

    @Autowired
    private EntregaRepository repository;

    public Entrega save(Entrega entrega) {
        return repository.save(entrega);
    }

    public List<Entrega> getAllEntregas() {
        List<Entrega> lista = new ArrayList<>();
        repository.findAll().forEach(lista::add);
        return lista;
    }

    public void delete(Entrega entrega) {
        repository.delete(entrega);
    }

    public Entrega findById(int id) {
        return repository.findById(id).orElse(null);
    }

    public List<Entrega> findByIdEmpresa(int idEmpresa) {
        return repository.findByIdEmpresa(idEmpresa);
    }

    public List<Entrega> findByIdUtilizador(int idUtilizador) {
        return repository.findByIdUtilizador(idUtilizador);
    }
}