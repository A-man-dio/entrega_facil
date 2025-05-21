package com.entrega_facil.spring_server_entrega_facil.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega_facil.spring_server_entrega_facil.model.Utilizador;
import com.entrega_facil.spring_server_entrega_facil.repositories.UtilizadorRepository;


@Service
public class UtilizadorService {

    @Autowired
    private UtilizadorRepository repository;

    public Utilizador save(Utilizador utilizador) {
        return repository.save(utilizador);
    }

    public List<Utilizador> getAllUtilizadores() {
        return (List<Utilizador>) repository.findAll();
    }

    public void delete(Utilizador utilizador) {
        repository.delete(utilizador);
    }

    public Utilizador findByUserName(String username) {
        return repository.findByUsername(username);
    }

    public Utilizador findByUserNameAndSenha(String username, String senha) {
        return repository.findByUsernameAndSenha(username , senha);
    }

}
