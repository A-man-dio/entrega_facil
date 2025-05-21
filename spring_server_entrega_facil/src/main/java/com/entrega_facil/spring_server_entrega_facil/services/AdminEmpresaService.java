package com.entrega_facil.spring_server_entrega_facil.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega_facil.spring_server_entrega_facil.model.AdminEmpresa;
import com.entrega_facil.spring_server_entrega_facil.repositories.AdminEmpresaRepository;


@Service
public class AdminEmpresaService {

    @Autowired
    private AdminEmpresaRepository repository;

    public AdminEmpresa save(AdminEmpresa adminEmpresa) {
        return repository.save(adminEmpresa);
    }

    public List<AdminEmpresa> getAllAdminEmpresas() {
        return (List<AdminEmpresa>) repository.findAll();
    }

    public void delete(AdminEmpresa adminEmpresa) {
        repository.delete(adminEmpresa);
    }

    public AdminEmpresa findByUserName(String username) {
        return repository.findByUsername(username);
    }

    public AdminEmpresa findByUserNameAndSenha(String username, String senha) {
        return repository.findByUsernameAndSenha(username, senha);
    }

}
