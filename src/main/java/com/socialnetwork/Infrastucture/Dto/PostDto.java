package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Mapper.CommentDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.CommentMapper;
import com.socialnetwork.Infrastucture.Request.PostRequest;
import com.socialnetwork.Infrastucture.Response.PostResponse;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class PostDto {

    private Long id;
    private String text;


    public static PostDto fromRequestToDto (PostRequest postRequest){
        PostDto postDto = new PostDto();
        postDto.setText(postRequest.getText());
        return postDto;
    };

    public PostResponse fromDtoToResponse (){
        PostResponse postResponse = new PostResponse();
        postResponse.setId(this.getId());
        postResponse.setText(this.getText());
        return postResponse;
    }
}
