package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.PostDto;

import java.util.List;

public interface PostService {

    PostDto createPost (PostDto postDto, Long id);

    List<PostDto> getAllPosts();

    PostDto postId (Long id);
}
