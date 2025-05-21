package com.entrega_facil.spring_server_entrega_facil.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entrega_facil.spring_server_entrega_facil.model.Utilizador;

@Repository
public interface UtilizadorRepository extends CrudRepository<Utilizador, Integer> {

    public Utilizador findByUsername(String userName);
    public Utilizador findByUsernameAndSenha(String userName, String senha);

}
