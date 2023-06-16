package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import lombok.Data;

@Data
public class CommentDto {

    private Long id;

    private String commentText;

    private String commentName;

    private Long postId;

    private Long verId;


    public CommentDto fromReqToDto (CommentRequest commentRequest){
        CommentDto commentDto = new CommentDto();
        commentDto.setCommentText(commentRequest.getCommentText());
        commentDto.setCommentName(commentRequest.getCommentName());
        return commentDto;
    }

    public CommentResponse toResponse() {
        CommentResponse commentResponse = new CommentResponse();
        commentResponse.setId(this.id);
        commentResponse.setCommentText(this.commentText);
        commentResponse.setCommentName(this.commentName);
        //PostId, VerId from comment database;
        commentResponse.setPostId(this.postId);
        commentResponse.setVerId(this.verId);
        return commentResponse;
    }
}
