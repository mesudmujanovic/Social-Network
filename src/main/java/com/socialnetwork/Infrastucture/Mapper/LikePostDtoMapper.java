package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.LikePost;
import com.socialnetwork.Infrastucture.Dto.LikePostDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum LikePostDtoMapper implements DtoMapper<LikePostDto, LikePost> {
    INSTANCE;

    @Override
    public LikePostDto apply(LikePost likePost) {
        LikePostDto likePostDto = new LikePostDto();
        likePostDto.setId(likePost.getId());
        likePostDto.setPostCountDislike(likePost.getPostCountDislike());
        likePostDto.setPostCountLike(likePost.getPostCountLike());
        return likePostDto;
    }
}
