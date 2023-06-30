package com.socialnetwork.Entity;

import lombok.*;
import javax.persistence.*;


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