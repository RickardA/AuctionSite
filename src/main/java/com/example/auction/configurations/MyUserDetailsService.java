package com.example.auction.configurations;


import com.example.auction.Datamodels.User;
import com.example.auction.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.PostConstruct;

@Configuration
public class MyUserDetailsService implements UserDetailsService {

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public BCryptPasswordEncoder getEncoder() { return encoder; }

    @Autowired
    private UserRepository repository;


    @PostConstruct
    private void createDefaultUsers(){
        if (repository.findDistinctFirstByMailIgnoreCase("user") == null) {
            addUser("user","user","mail@mail.com", "password");
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

    public void addUser(String firstName,String lastName,String mail, String password){
        User u = new User(231,firstName,lastName,mail, encoder.encode(password));
        try {
            repository.save(u);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getMail())
                .password(user.getPassword())
                .roles("USER").build();
    }
}
