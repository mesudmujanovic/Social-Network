package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Mapper.CommentDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.CommentMapper;
import com.socialnetwork.Repository.CommentRepository;
import com.socialnetwork.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Override
    public CommentDto createComment(CommentDto commentDto) {
        Comment comment = CommentMapper.INSTANCE.apply(commentDto);
        Comment saveComment = commentRepository.save(comment);
        return CommentDtoMapper.INSTANCE.apply(saveComment);
    }
}
