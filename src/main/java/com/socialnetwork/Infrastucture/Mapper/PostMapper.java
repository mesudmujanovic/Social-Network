package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum PostMapper implements DtoMapper<Post, PostDto> {
    INSTANCE;

    @Override
    public Post apply(PostDto postDto) {
        Post post = new Post();
        post.setId(postDto.getId());
        post.setText(postDto.getText());
        return post;
    }
}
