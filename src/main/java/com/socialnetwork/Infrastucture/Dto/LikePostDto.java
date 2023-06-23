package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.LikePostRequest;
import com.socialnetwork.Infrastucture.Response.LikePostResponse;
import lombok.Data;

@Data
public class LikePostDto {

    private Long id;

    private int postCountLike;

    private int postCountDislike;

    public static LikePostDto fromRequestToDto(LikePostRequest likePostRequest){
        LikePostDto likePostDto = new LikePostDto();
        likePostDto.setPostCountLike(likePostRequest.getPostCountLike());
        likePostDto.setPostCountDislike(likePostRequest.getPostCountDislike());
        return likePostDto;
    };

    public LikePostResponse fromDtoToResponse ( ){
        LikePostResponse likePostResponse = new LikePostResponse();
        likePostResponse.setId(this.getId());
        likePostResponse.setPostCountDislike(this.getPostCountDislike());
        likePostResponse.setPostCountLike(this.postCountLike);
        return likePostResponse;
    }
}
