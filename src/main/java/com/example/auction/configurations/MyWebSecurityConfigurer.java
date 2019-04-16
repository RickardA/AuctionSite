package com.example.auction.configurations;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class MyWebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Autowired
    MyUserDetailsService myUserDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/api/**").hasRole("USER")
                .and().formLogin().permitAll().defaultSuccessUrl("/", true)
                .and().logout().permitAll().logoutSuccessUrl("/")
                .and().csrf().disable()
        ;

//        http.authorizeRequests().antMatchers("/api/**").hasRole("USER").and().formLogin();

//        http.authorizeRequests()
//                .antMatchers(HttpMethod.GET,"/api/users/*").hasRole("USER")
//                .antMatchers(HttpMethod.GET,"/api/**").permitAll()
//                .antMatchers("/api/**").hasRole("USER")
//                .and().formLogin();

        // Anything that does not start with /api
//                .regexMatchers("^(?!\/api\/).+").hasRole("USER")
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/assets/**");
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(myUserDetailsService)
                .passwordEncoder(myUserDetailsService.getEncoder());
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user")
                .password(myUserDetailsService.getEncoder().encode("password"))
                .roles("USER");

    }
}
