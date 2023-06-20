package com.socialnetwork.Infrastucture.Response;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class VerifyResponse {

    public Long id;

    public String nameAccount;

    public String lastNameAccount;

    public int age;

    public String job;

    public String phone;


}
