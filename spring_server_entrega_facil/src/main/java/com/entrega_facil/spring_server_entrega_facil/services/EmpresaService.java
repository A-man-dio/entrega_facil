package com.entrega_facil.spring_server_entrega_facil.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega_facil.spring_server_entrega_facil.model.Empresa;
import com.entrega_facil.spring_server_entrega_facil.repositories.EmpresaRepository;

@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository repository;

    public Empresa save(Empresa empresa) {
        return repository.save(empresa);
    }

    public List<Empresa> getAllEmpresas() {
        return (List<Empresa>) repository.findAll();
    }

    public void delete(Empresa empresa) {
        repository.delete(empresa);
    }

    public Empresa findByID(int id) {
        return repository.findById(id).orElse(null); // Retorna null se não for encontrado
    }

    public List<Empresa> findByNome(String nome) {
        return repository.findByNome(nome); // Retorna null se não for encontrado
    }

}
