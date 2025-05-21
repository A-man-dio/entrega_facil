package com.entrega_facil.spring_server_entrega_facil.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entrega_facil.spring_server_entrega_facil.model.AdminEmpresa;

@Repository
public interface AdminEmpresaRepository extends CrudRepository<AdminEmpresa, Integer> {

    public AdminEmpresa findByUsername(String userName);
    public AdminEmpresa findByUsernameAndSenha(String userName, String senha);

}
