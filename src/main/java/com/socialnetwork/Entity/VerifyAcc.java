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

public class VerifyAcc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nameAccount;

    private String lastNameAccount;

    private int age;

    private String job;

    private String phone;

    @ManyToOne()
    @JoinColumn(name = "post_id")
    private Post post;

}
