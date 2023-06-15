package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Entity.Post;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum CommentMapper implements DtoMapper<Comment, CommentDto> {
    INSTANCE;

    @Override
    public Comment apply(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setCommentText(commentDto.getCommentText());
        comment.setCommentName(commentDto.getCommentName());
        Post post = new Post();
        post.setId(comment.getId());
        comment.setPost(post);
        VerifyAcc verifyAcc = new VerifyAcc();
        verifyAcc.setId(comment.getId());
        comment.setVerifyAcc(verifyAcc);
        return comment;
    }
}
