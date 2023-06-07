package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Infrastucture.Mapper.PostDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.PostMapper;
import com.socialnetwork.Infrastucture.Mapper.UserDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.UserMapper;
import com.socialnetwork.Repository.PostRepository;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserService userService;

    @Override
    public PostDto createPost(PostDto postDto, Long id) {
        Post post = PostMapper.INSTANCE.apply(postDto);
        post.setUser(UserMapper.INSTANCE.apply(userService.userId(id)));
        Post postSave = postRepository.save(post);
        return PostDtoMapper.INSTANCE.apply(postSave);
    }

    @Override
    public PostDto postId(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new RuntimeException("not found id"));
        return PostDtoMapper.INSTANCE.apply(post);
    }
}
