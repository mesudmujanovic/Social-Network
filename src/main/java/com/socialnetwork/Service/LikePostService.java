package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.LikePostDto;

import java.util.List;

public interface LikePostService {

    LikePostDto createLikePost (LikePostDto likePostDto, Long postId, Long verifyId);

    List<LikePostDto> getAll();
}
