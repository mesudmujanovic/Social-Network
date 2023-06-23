package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.LikePost;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.LikePostDto;
import com.socialnetwork.Infrastucture.Mapper.LikePostDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.LikePostMapper;
import com.socialnetwork.Infrastucture.Mapper.PostMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyMapper;
import com.socialnetwork.Repository.LikePostRepository;
import com.socialnetwork.Service.LikePostService;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikePostServiceImpl implements LikePostService {

    @Autowired
    LikePostRepository likePostRepository;

    @Autowired
    PostService postService;

    @Autowired
    VerifyService verifyService;

    @Override
    public LikePostDto createLikePost(LikePostDto likePostDto, Long postId, Long verifyId) {
        LikePost likePost = LikePostMapper.INSTANCE.apply(likePostDto);
        likePost.setPost(PostMapper.INSTANCE.apply( postService.postId(postId)));
        likePost.setVerifyAcc(VerifyMapper.INSTANCE.apply( verifyService.getVerifyById(verifyId) ));
        LikePost savePost = likePostRepository.save(likePost);
        return LikePostDtoMapper.INSTANCE.apply(savePost);
    }
}
