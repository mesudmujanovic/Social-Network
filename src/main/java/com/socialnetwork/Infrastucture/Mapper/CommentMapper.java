package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum CommentMapper implements DtoMapper<Comment, CommentDto> {
    INSTANCE;

    @Override
    public Comment apply(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setCommentText(commentDto.getCommentText());
        return comment;
    }
}
