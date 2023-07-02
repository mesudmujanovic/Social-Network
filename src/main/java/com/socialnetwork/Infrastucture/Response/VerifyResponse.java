package com.socialnetwork.Infrastucture.Response;

import lombok.Data;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.persistence.Lob;

@Data
public class VerifyResponse {

    public Long id;

    public String nameAccount;

    public String lastNameAccount;

    private String age;

    public String job;

    public String phone;

}
