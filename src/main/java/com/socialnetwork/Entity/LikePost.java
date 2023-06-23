package com.socialnetwork.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class LikePost {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    private int postCountLike;

    private int postCountDislike;

    @ManyToOne
    @JoinColumn( name = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn( name = "verify_id")
    private VerifyAcc verifyAcc;
}
