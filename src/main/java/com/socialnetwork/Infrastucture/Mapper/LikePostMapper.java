package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.LikePost;
import com.socialnetwork.Entity.Post;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.LikePostDto;
import com.socialnetwork.Intergration.DtoMapper;
import org.springframework.security.core.parameters.P;

public enum LikePostMapper implements DtoMapper<LikePost, LikePostDto> {
    INSTANCE;

    @Override
    public LikePost apply(LikePostDto likePostDto) {
        LikePost likePost = new LikePost();
        likePost.setId(likePostDto.getId());
        likePost.setPostCountDislike(likePostDto.getPostCountDislike());
        likePost.setPostCountLike(likePostDto.getPostCountLike());
        Post post = new Post();
        post.setId(likePost.getId());
        likePost.setPost(post);
        return likePost;
    }
}
