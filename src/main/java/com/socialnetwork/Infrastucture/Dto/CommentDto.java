package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import lombok.Data;

@Data
public class CommentDto {

    private Long id;

    private String text;

    public static CommentDto fromRequestToDto(CommentRequest commentRequest){
        CommentDto commentDto = new CommentDto();
        commentDto.setText(commentRequest.getText());
        return commentDto;
    }

    public CommentResponse fromResponseToDto(){
        CommentResponse commentResponse = new CommentResponse();
        commentResponse.setId(this.getId());
        commentResponse.setText(this.getText());
        return  commentResponse;
    }
}
