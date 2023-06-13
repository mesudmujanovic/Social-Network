package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum CommentDtoMapper implements DtoMapper<CommentDto, Comment> {
    INSTANCE;

    @Override
    public CommentDto apply(Comment comment) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setCommentText(comment.getCommentText());
        return commentDto;
    }
}
