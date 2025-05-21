package com.entrega_facil.spring_server_entrega_facil.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega_facil.spring_server_entrega_facil.model.Entregador;
import com.entrega_facil.spring_server_entrega_facil.repositories.EntregadorRepository;

@Service
public class EntregadorService {

    @Autowired
    private EntregadorRepository repository;

    public Entregador save(Entregador entregador) {
        return repository.save(entregador);
    }

    public List<Entregador> getAllEntregadores() {
        return (List<Entregador>) repository.findAll();
    }

    public void delete(Entregador entregador) {
        repository.delete(entregador);
    }

    public Entregador findByUserName(String username) {
        return repository.findByUsername(username);
    }

    public Entregador findByUserNameAndSenha(String username, String senha) {
        return repository.findByUsernameAndSenha(username, senha);
    }

}
