package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.CommentDto;

public interface CommentService {


     CommentDto saveComment(CommentDto commentDto, Long postId, Long userId);
}
