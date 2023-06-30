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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "verifyacc_connections",
            joinColumns = @JoinColumn(name = "verifyacc_id"),
            inverseJoinColumns = @JoinColumn(name = "connected_verifyacc_id")
    )
    private List<VerifyAcc> connectedVerifyAccs;

    @OneToMany(mappedBy = "verifyAcc", fetch = FetchType.LAZY)
    private List<Post> posts;

    @OneToMany(mappedBy = "verifyAcc", fetch = FetchType.LAZY)
    private List<Comment> comments;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany( mappedBy = "verifyAcc", fetch = FetchType.LAZY)
    private List<LikePost> likePostList;

}
