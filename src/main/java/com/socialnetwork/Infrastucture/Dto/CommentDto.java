package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import lombok.Data;

@Data
public class CommentDto {

    private Long id;

    private String commentText;


    public CommentDto fromReqToDto (CommentRequest commentRequest){
        CommentDto commentDto = new CommentDto();
        commentDto.setCommentText(commentRequest.getCommentText());
        return commentDto;
    }

    public CommentResponse fromDtoToRes (CommentDto commentDto){
        CommentResponse commentResponse = new CommentResponse();
        commentResponse.setId(commentDto.getId());
        commentResponse.setCommentText(commentDto.getCommentText());
        return commentResponse;
    }
}
