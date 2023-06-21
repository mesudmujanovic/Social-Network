package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.PostRequest;
import com.socialnetwork.Infrastucture.Response.PostResponse;
import lombok.Data;

@Data
public class PostDto {

    public Long id;
    public String postText;
    private String postName;

    public static PostDto fromRequest (PostRequest postRequest){
        PostDto postDto = new PostDto();
        postDto.setPostText(postRequest.getPostText());
        postDto.setPostName(postRequest.getPostName());
        return postDto;
    }

    public PostResponse toResponse(){
        PostResponse postResponse = new PostResponse();
        postResponse.setId(this.getId());
        postResponse.setPostText(this.getPostText());
        postResponse.setPostName(this.getPostName());
        return postResponse;
    }
}
