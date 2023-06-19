package com.socialnetwork.Controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import com.socialnetwork.Infrastucture.Request.VerifyRequest;
import com.socialnetwork.Infrastucture.Response.VerifyResponse;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class VerifyController {

    @Autowired
    VerifyService verifyService;

    @PostMapping("/saveVerify/user/{userId}")
    public ResponseEntity<VerifyResponse> createVerify (@RequestBody VerifyRequest verifyRequest,
                                                        @PathVariable Long userId){
        VerifyDto verifyDto = VerifyDto.fromRequest(verifyRequest);
        VerifyDto verifyDtoService = verifyService.createVerify(verifyDto, userId);
        return ResponseEntity.ok(verifyDtoService.toResponse());
    }

    @GetMapping("/verifyById/{verId}")
    public ResponseEntity<VerifyResponse> gtById(@PathVariable Long verId){
        VerifyDto verifyDto = verifyService.getVerifyById(verId);
        return ResponseEntity.ok(verifyDto.toResponse());
    }

    @GetMapping("/allVerify")
    public ResponseEntity<List<VerifyResponse>> getAll (){
        List<VerifyDto> verifyDtos = verifyService.getAllVerify();
        return ResponseEntity.ok(verifyDtos.stream().map( all -> all.toResponse()).collect(Collectors.toList()));
    }
 }
