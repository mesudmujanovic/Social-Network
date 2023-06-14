package com.socialnetwork.Entity;

import lombok.*;
import org.springframework.security.core.parameters.P;

import javax.persistence.*;
import java.util.List;
import java.util.stream.DoubleStream;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = false)
    private String password;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private VerifyAcc verifyAcc;

}
