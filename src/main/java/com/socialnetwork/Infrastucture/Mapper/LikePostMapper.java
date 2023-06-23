package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.LikePost;
import com.socialnetwork.Infrastucture.Dto.LikePostDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum LikePostMapper implements DtoMapper<LikePost, LikePostDto> {
    INSTANCE;

    @Override
    public LikePost apply(LikePostDto likePostDto) {
        LikePost likePost = new LikePost();
        likePost.setId(likePostDto.getId());
        likePost.setPostCountDislike(likePostDto.getPostCountDislike());
        likePost.setPostCountLike(likePostDto.getPostCountLike());
        return likePost;
    }
}
