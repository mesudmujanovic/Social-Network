package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Mapper.*;
import com.socialnetwork.Repository.CommentRepository;
import com.socialnetwork.Service.CommentService;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    PostService postService;

    @Autowired
    VerifyService verifyService;

    @Override
    public CommentDto createComment(CommentDto commentDto, Long postId, Long verId) {
        Comment comment = CommentMapper.INSTANCE.apply(commentDto);
        comment.setPost(PostMapper.INSTANCE.apply(postService.postId(postId)));
        comment.setVerifyAcc(VerifyMapper.INSTANCE.apply(verifyService.getVerifyById(verId)));
        Comment saveComment = commentRepository.save(comment);
        return CommentDtoMapper.INSTANCE.apply(saveComment);
    }

    @Override
    public List<CommentDto> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map( CommentDtoMapper.INSTANCE::apply ).collect(Collectors.toList());
    }
}
