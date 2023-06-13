package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.PostDto;

import java.util.List;

public interface PostService {

    PostDto createPost (PostDto postDto);

    List<PostDto> getAllPosts();

    PostDto postId (Long id);
}
