package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Mapper.VerifyDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyMapper;
import com.socialnetwork.Infrastucture.Request.PostRequest;
import com.socialnetwork.Infrastucture.Response.PostResponse;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class PostDto {

    public Long id;
    public String postText;


    public static PostDto fromRequest (PostRequest postRequest){
        PostDto postDto = new PostDto();
        postDto.setPostText(postRequest.getPostText());
        return postDto;
    }

    public PostResponse toResponse(){
        PostResponse postResponse = new PostResponse();
        postResponse.setId(this.getId());
        postResponse.setPostText(this.getPostText());
        return postResponse;
    }
}
