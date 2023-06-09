package com.socialnetwork.Service;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;

import java.util.List;

public interface PostService {

    public PostDto createPost( PostDto postDto, Long userId);

    public List<PostDto> getAllPosts();

    public PostDto postId (Long id);
}
