package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Mapper.PostDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.PostMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyMapper;
import com.socialnetwork.Repository.PostRepository;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class PostServiceImpl  implements PostService {

    @Autowired
    PostRepository postRepository;
    @Autowired
    VerifyService verifyService;

    @Override
    public PostDto createPost(PostDto postDto, Long id) {
        Post post = PostMapper.INSTANCE.apply(postDto);
        post.setVerifyAcc(VerifyMapper.INSTANCE.apply(verifyService.getVerifyById(id)));
        Post savePost = postRepository.save(post);
        return PostDtoMapper.INSTANCE.apply(post);
    }

    @Override
    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map( allPosts -> PostDtoMapper.INSTANCE.apply(allPosts)).collect(Collectors.toList());
    }

    @Override
    public PostDto postId(Long id) {
        Post post = postRepository.findById(id).orElseThrow(()->new RuntimeException("not found byId"));
        return PostDtoMapper.INSTANCE.apply(post);
    }

    @Override
    public List<PostDto> getPostByName(String postName) {
        List<Post> posts = postRepository.findByPostName(postName);
        return  posts.stream().map( allPosts -> PostDtoMapper.INSTANCE.apply(allPosts)).collect(Collectors.toList());
    }
}
