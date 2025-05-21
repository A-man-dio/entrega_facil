package com.entrega_facil.spring_server_entrega_facil.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entrega_facil.spring_server_entrega_facil.model.Entregador;

@Repository
public interface EntregadorRepository extends CrudRepository<Entregador, Integer> {

    public Entregador findByUsername(String userName);
    public Entregador findByUsernameAndSenha(String userName, String senha);

}
