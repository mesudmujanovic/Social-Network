package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum PostMapper implements DtoMapper<Post, PostDto> {
    INSTANCE;

    @Override
    public Post apply(PostDto postDto) {
        Post post = new Post();
        post.setId(postDto.getId());
        post.setText(postDto.getText());
        User user = new User();
        user.setUsername(postDto.getUsername());
        post.setUser(user);
        return post;
    }
}
