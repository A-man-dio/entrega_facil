package com.entrega_facil.spring_server_entrega_facil.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entrega_facil.spring_server_entrega_facil.model.Empresa;

@Repository
public interface EmpresaRepository extends CrudRepository<Empresa, Integer> {

     List<Empresa> findByNome(String nome);
}
