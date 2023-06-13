package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.VerifyRequest;
import com.socialnetwork.Infrastucture.Response.VerifyResponse;
import lombok.Data;

@Data
public class VerifyDto {

    public Long id;

    public String nameAccount;

    public String lastNameAccount;

    public int age;

    public String job;

    public String phone;

    public static VerifyDto fromRequest(VerifyRequest verifyRequest){
        VerifyDto verifyDto = new VerifyDto();
        verifyDto.setAge(verifyRequest.getAge());
        verifyDto.setJob(verifyRequest.getJob());
        verifyDto.setNameAccount(verifyRequest.getNameAccount());
        verifyDto.setLastNameAccount(verifyRequest.getLastNameAccount());
        verifyDto.setPhone(verifyRequest.getPhone());
        return verifyDto;
    }

    public VerifyResponse toResponse(){
        VerifyResponse verifyResponse = new VerifyResponse();
        verifyResponse.setId(this.getId());
        verifyResponse.setAge(this.getAge());
        verifyResponse.setJob(this.getJob());
        verifyResponse.setNameAccount(this.getNameAccount());
        verifyResponse.setLastNameAccount(this.lastNameAccount);
        verifyResponse.setPhone(this.getPhone());
        return  verifyResponse;
    }
}
