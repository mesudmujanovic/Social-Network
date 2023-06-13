package com.socialnetwork.Controller;


import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import com.socialnetwork.Infrastucture.Request.VerifyRequest;
import com.socialnetwork.Infrastucture.Response.VerifyResponse;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin("*")

public class VerifyController {

    @Autowired
    VerifyService verifyService;

    @PostMapping("/saveVerify/postId/{postId}")
    public ResponseEntity<VerifyResponse> createVerify (@RequestBody VerifyRequest verifyRequest,
                                                        @PathVariable Long postId){
        VerifyDto verifyDto = VerifyDto.fromRequest(verifyRequest);
        VerifyDto verifyDtoService = verifyService.createVerify(verifyDto,postId);
        return ResponseEntity.ok(verifyDtoService.toResponse());
    }
}
