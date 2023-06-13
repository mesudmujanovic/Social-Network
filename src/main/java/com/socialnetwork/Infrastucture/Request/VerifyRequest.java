package com.socialnetwork.Infrastucture.Request;

import lombok.Data;

@Data
public class VerifyRequest {

    public String nameAccount;

    public String lastNameAccount;

    public int age;

    public String job;

    public String phone;
}
