package com.socialnetwork.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String postText;

    @OneToMany( mappedBy = "post", fetch = FetchType.LAZY)
    private List<VerifyAcc> verifyAccs;
}
