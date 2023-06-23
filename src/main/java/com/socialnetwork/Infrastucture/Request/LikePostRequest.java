package com.socialnetwork.Infrastucture.Request;

import lombok.Data;

@Data
public class LikePostRequest {

    private int postCountLike;

    private int postCountDislike;
}
