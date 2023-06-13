package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.VerifyDto;

public interface VerifyService {

     VerifyDto createVerify (VerifyDto verifyDto, Long postId);

}
