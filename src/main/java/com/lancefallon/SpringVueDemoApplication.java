package com.lancefallon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.lancefallon")
public class SpringVueDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringVueDemoApplication.class, args);
    }
}
