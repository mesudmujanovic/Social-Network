package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.CommentDto;

import java.util.List;

public interface CommentService {

    public CommentDto createComment ( CommentDto commentDto, Long postId, Long VerId );

    public List<CommentDto> getAllComments ();
}
