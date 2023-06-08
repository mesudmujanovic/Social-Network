package com.socialnetwork.Service;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;

public interface PostService {

    public PostDto createPost( PostDto postDto, Long userId);

    public PostDto postId (Long id);
}
