package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Mapper.CommentDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.CommentMapper;
import com.socialnetwork.Infrastucture.Mapper.PostMapper;
import com.socialnetwork.Infrastucture.Mapper.UserMapper;
import com.socialnetwork.Repository.CommentRepository;
import com.socialnetwork.Service.CommentService;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
     PostService postService;

    @Autowired
    UserService userService;

    @Autowired
     CommentRepository commentRepository;


    @Override
    public CommentDto saveComment(CommentDto commentDto, Long postId, Long userId) {
        Comment comment = CommentMapper.INSTANCE.apply(commentDto);
        comment.setPost(PostMapper.INSTANCE.apply(postService.postId(postId)));
        comment.setUser(UserMapper.INSTANCE.apply(userService.userId(userId)));
        Comment commentSave = commentRepository.save(comment);
        return CommentDtoMapper.INSTANCE.apply(commentSave);
    }
}
