package com.socialnetwork.Infrastucture.Response;

import lombok.Data;

@Data
public class LikePostResponse {

    private Long id;

    private int postCountLike;

    private int postCountDislike;

    private Long postId;
}
