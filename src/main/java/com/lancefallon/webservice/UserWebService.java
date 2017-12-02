package com.lancefallon.webservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserWebService {

    @RequestMapping("/api/user")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Authentication> getUser(Authentication auth) {
        return new ResponseEntity<>(auth, HttpStatus.OK);
    }

}
