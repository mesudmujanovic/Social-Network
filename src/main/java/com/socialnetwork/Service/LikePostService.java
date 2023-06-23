package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.LikePostDto;

public interface LikePostService {

    LikePostDto createLikePost (LikePostDto likePostDto, Long postId, Long verifyId);
}
