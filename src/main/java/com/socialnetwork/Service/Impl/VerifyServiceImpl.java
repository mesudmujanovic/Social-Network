package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Post;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import com.socialnetwork.Infrastucture.Mapper.PostMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyMapper;
import com.socialnetwork.Repository.VerifyRepository;
import com.socialnetwork.Service.PostService;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VerifyServiceImpl implements VerifyService {

    @Autowired
    VerifyRepository verifyRepository;

    @Autowired
    PostService postService;

    @Override
    public VerifyDto createVerify(VerifyDto verifyDto) {
        VerifyAcc verifyAcc = VerifyMapper.INSTANCE.apply(verifyDto);
//        verifyAcc.setPost( PostMapper.INSTANCE.apply(postService.postId(postId)));
        VerifyAcc verifyAccSave = verifyRepository.save(verifyAcc);
        return VerifyDtoMapper.INSTANCE.apply(verifyAcc);
    }

    @Override
    public VerifyDto getVerifyById(Long id) {
        VerifyAcc verifyAcc = verifyRepository.findById(id).orElseThrow(()->new RuntimeException("no such"));
        return VerifyDtoMapper.INSTANCE.apply(verifyAcc);
    }
}
