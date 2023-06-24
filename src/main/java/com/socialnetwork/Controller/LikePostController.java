package com.socialnetwork.Controller;

import com.socialnetwork.Infrastucture.Dto.LikePostDto;
import com.socialnetwork.Infrastucture.Request.LikePostRequest;
import com.socialnetwork.Infrastucture.Response.LikePostResponse;
import com.socialnetwork.Service.LikePostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class LikePostController {

    @Autowired
    LikePostService likePostService;

    @PostMapping("/likePost/{postId}/verify/{verifyId}")
    public ResponseEntity<LikePostResponse> createLike (@RequestBody LikePostRequest likePostRequest,
                                                        @PathVariable Long postId,
                                                        @PathVariable Long verifyId){
        LikePostDto likePostDto = LikePostDto.fromRequestToDto(likePostRequest);
        LikePostDto serviceLike = likePostService.createLikePost(likePostDto,postId, verifyId);
        return ResponseEntity.ok( serviceLike.fromDtoToResponse() );
    }

    @GetMapping("/allLike")
    public ResponseEntity<List<LikePostResponse>> getAllLike(){
        List<LikePostDto> listPostDto = likePostService.getAll();
        return ResponseEntity.ok( listPostDto.stream().map( likes -> likes.fromDtoToResponse() ).collect(Collectors.toList()));
    }

    @GetMapping("/byLikePostId/{likeId}")
    public ResponseEntity<LikePostResponse> getById ( @PathVariable Long likeId ){
        LikePostDto likePostDto = likePostService.getLikePostById(likeId);
        return ResponseEntity.ok( likePostDto.fromDtoToResponse() );
    }
}
