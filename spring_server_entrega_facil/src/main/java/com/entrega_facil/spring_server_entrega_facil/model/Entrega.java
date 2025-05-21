package com.entrega_facil.spring_server_entrega_facil.model;

import jakarta.persistence.*;

@Entity
@Table(name = "entrega")
public class Entrega {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nome;

    private String localizacao;

    private String destino;

    private int preco;

    private String estado;

    private int idEmpresa;

    private int idUtilizador;

    public Entrega() {}

    public Entrega(String nome, String localizacao, String destino, int preco, String estado, int idEmpresa, int idUtilizador) {
        this.nome=nome;
        this.localizacao = localizacao;
        this.destino = destino;
        this.preco = preco;
        this.estado = estado;
        this.idEmpresa = idEmpresa;
        this.idUtilizador = idUtilizador;
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getIdEmpresa() {
        return idEmpresa;
    }

    public void setIdEmpresa(int idEmpresa) {
        this.idEmpresa = idEmpresa;
    }

    public int getIdUtilizador() {
        return idUtilizador;
    }

    public void setIdUtilizador(int idUtilizador) {
        this.idUtilizador = idUtilizador;
    }
}