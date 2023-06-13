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

    @PostMapping("/saveVerify")
    public ResponseEntity<VerifyResponse> createVerify (@RequestBody VerifyRequest verifyRequest){
        VerifyDto verifyDto = VerifyDto.fromRequest(verifyRequest);
        VerifyDto verifyDtoService = verifyService.createVerify(verifyDto);
        return ResponseEntity.ok(verifyDtoService.toResponse());
    }

    @GetMapping("/verifyById/{verId}")
    public ResponseEntity<VerifyResponse> gtById(@PathVariable Long verId){
        VerifyDto verifyDto = verifyService.getVerifyById(verId);
        return ResponseEntity.ok(verifyDto.toResponse());
    }
}
