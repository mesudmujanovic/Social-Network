package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum CommentMapper implements DtoMapper<Comment, CommentDto> {

    INSTANCE;

    @Override
    public Comment apply(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setText(commentDto.getText());
        User user = new User();
        user.setUsername(commentDto.getUsername());
        comment.setUser(user);
        return comment;
    }
}
