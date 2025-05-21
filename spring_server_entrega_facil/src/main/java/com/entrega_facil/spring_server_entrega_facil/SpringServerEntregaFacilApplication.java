package com.entrega_facil.spring_server_entrega_facil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.entrega_facil.spring_server_entrega_facil")
@EnableAutoConfiguration
public class SpringServerEntregaFacilApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringServerEntregaFacilApplication.class, args);
	}

}
