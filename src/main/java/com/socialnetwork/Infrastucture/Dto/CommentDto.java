package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Mapper.CommentDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.CommentMapper;
import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class CommentDto {

    private Long id;

    private String text;
    private List<Comment> comments;
    private String username;


    public static CommentDto fromRequestToDto(CommentRequest commentRequest){
        CommentDto commentDto = new CommentDto();
        commentDto.setText(commentRequest.getText());
        return commentDto;
    }

    public CommentResponse fromResponseToDto(){
        CommentResponse commentResponse = new CommentResponse();
        commentResponse.setId(this.getId());
        commentResponse.setText(this.getText());
        commentResponse.setUsername(this.getUsername());
        return  commentResponse;
    }
}
