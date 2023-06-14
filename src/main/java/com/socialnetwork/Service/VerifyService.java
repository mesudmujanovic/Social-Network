package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.VerifyDto;

import java.util.List;

public interface VerifyService {

     VerifyDto createVerify (VerifyDto verifyDto, Long id);

     VerifyDto getVerifyById (Long id);

     List<VerifyDto> getAllVerify ();

}
