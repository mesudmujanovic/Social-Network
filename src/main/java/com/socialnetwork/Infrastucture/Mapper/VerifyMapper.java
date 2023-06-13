package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum VerifyMapper implements DtoMapper<VerifyAcc, VerifyDto> {
    INSTANCE;

    @Override
    public VerifyAcc apply(VerifyDto verifyDto) {
        VerifyAcc verifyAcc = new VerifyAcc();
        verifyAcc.setId(verifyDto.getId());
        verifyAcc.setJob(verifyDto.getJob());
        verifyAcc.setPhone(verifyDto.getPhone());
        verifyAcc.setAge(verifyDto.getAge());
        verifyAcc.setNameAccount(verifyDto.getNameAccount());
        verifyAcc.setLastNameAccount(verifyDto.getLastNameAccount());
        return verifyAcc;
    }
}
