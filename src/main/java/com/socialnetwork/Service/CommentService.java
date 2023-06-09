package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.CommentDto;

import java.util.List;

public interface CommentService {


     CommentDto saveComment(CommentDto commentDto, Long postId, Long userId);
     List<CommentDto> getCommentsByPostId(Long postId);

}
