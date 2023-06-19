package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum VerifyDtoMapper implements DtoMapper<VerifyDto, VerifyAcc> {
    INSTANCE;

    @Override
    public VerifyDto apply(VerifyAcc verifyAcc) {
        VerifyDto verifyDto = new VerifyDto();
        verifyDto.setId(verifyAcc.getId());
        verifyDto.setPhone(verifyAcc.getPhone());
        verifyDto.setJob(verifyAcc.getJob());
        verifyDto.setNameAccount(verifyAcc.getNameAccount());
        verifyDto.setLastNameAccount(verifyAcc.getLastNameAccount());
        verifyDto.setAge(verifyAcc.getAge());
        verifyDto.setUserId(verifyAcc.getUser().getId());
        return verifyDto;
    }
}
