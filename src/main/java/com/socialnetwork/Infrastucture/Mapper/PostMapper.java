package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum PostMapper implements DtoMapper<Post, PostDto> {
    INSTANCE;

    @Override
    public Post apply(PostDto postDto) {
        Post post = new Post();
        post.setPostText(postDto.getPostText());
        post.setId(postDto.getId());
        post.setVerifyAccs(postDto.getVerifyAccs().stream().map( ver -> VerifyMapper.INSTANCE.apply(ver)).collect(Collectors.toList()));
        return post;
    }
}
