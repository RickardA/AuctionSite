package com.example.auction.Services;


import com.example.auction.Datamodels.User;
import com.example.auction.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.UUID;

@Configuration
public class MyUserDetailsService implements UserDetailsService {

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public BCryptPasswordEncoder getEncoder() { return encoder; }

    @Autowired
    private UserRepository repository;


    public boolean authenticateUser(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            return true;
        }else{
            return false;
        }
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        User user = repository.findDistinctFirstByMailIgnoreCase(mail);
        if (user == null) {
            throw new UsernameNotFoundException("User not found by name: " + mail);
        }
        return toUserDetails(user);
    }

    public boolean addUser(User user){
        if(repository.findDistinctFirstByMailIgnoreCase(user.getMail()) == null) {
            String userID = UUID.randomUUID().toString();
            User u = new User(userID, user.getFirstName(), user.getLastName(), user.getMail(), encoder.encode(user.getPassword()));
            try {
                repository.save(u);
            } catch (Exception ex) {
                ex.printStackTrace();
            }
            return true;
        }else{
            return false;
        }
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getMail())
                .password(user.getPassword())
                .roles("USER").build();
    }
}
