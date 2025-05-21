package com.entrega_facil.spring_server_entrega_facil.repositories;



import com.entrega_facil.spring_server_entrega_facil.model.Entrega;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntregaRepository extends CrudRepository<Entrega, Integer> {
    List<Entrega> findByIdEmpresa(int idEmpresa);
    List<Entrega> findByIdUtilizador(int idUtilizador);
}