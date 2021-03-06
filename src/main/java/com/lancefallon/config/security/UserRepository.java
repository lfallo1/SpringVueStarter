package com.lancefallon.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.List;

@Service
public class UserRepository extends JdbcDaoSupport {

    RowMapper<GrantedAuthority> USER_AUTHORITIES_ROW_MAPPER = (rs, rownum) -> {
        return new SimpleGrantedAuthority(rs.getString("role"));
    };

    RowMapper<CustomUserDetails> USER_ROW_MAPPER = (rs, rownum) -> {
        CustomUserDetails user = new CustomUserDetails();
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCredentialsNonExpired(true);
//		user.setAuthenticated(true);
        user.setEnabled(rs.getBoolean("enabled"));

        return user;
    };

    public UserRepository(@Autowired DataSource dataSource) {
        setDataSource(dataSource);
    }


    public CustomUserDetails findByUsername(String username) {
        try {
            CustomUserDetails user = getJdbcTemplate().queryForObject("select username,password, enabled from users where username=?", new Object[]{username}, USER_ROW_MAPPER);
            if (user != null) {
                List<GrantedAuthority> authorities = getJdbcTemplate().query("select username, role from user_roles where username=?", new Object[]{username}, USER_AUTHORITIES_ROW_MAPPER);
                user.setAuthorities(authorities);
                return user;
            }
            return null;
        } catch (DataAccessException e) {
            return null;
        }
    }
}