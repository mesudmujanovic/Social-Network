package com.socialnetwork.Infrastucture.Request;

import lombok.Data;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.persistence.Lob;

@Data
public class VerifyRequest {

    public String nameAccount;

    public String lastNameAccount;

    private String age;

    public String job;

    public String phone;

}
