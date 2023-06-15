package com.socialnetwork.Infrastucture.Response;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Entity.VerifyAcc;
import lombok.Data;

@Data
public class CommentResponse {

    private Long id;

    private String commentText;

    private String commentName;

    private Long postId;
    private Long verId;


}
