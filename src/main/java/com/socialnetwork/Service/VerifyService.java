package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.VerifyDto;

import java.util.List;

public interface VerifyService {

     VerifyDto createVerify (VerifyDto verifyDto, Long id);

     VerifyDto getVerifyById (Long id);

     List<VerifyDto> getAllVerify ();

     VerifyDto findBynameAccount (String nameAccount);

     VerifyDto addConnectedVerifyAcc(Long verifyAccId, Long connectedVerifyAccId);

     List<VerifyDto> getConnectedVerifyAccsById(Long verifyAccId);


}
