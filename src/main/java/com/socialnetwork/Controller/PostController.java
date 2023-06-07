package com.socialnetwork.Controller;

import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Request.PostRequest;
import com.socialnetwork.Infrastucture.Response.PostResponse;
import com.socialnetwork.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/post")
    public  ResponseEntity<PostResponse> createPost (@RequestBody PostRequest postRequest){
        PostDto postDto = PostDto.fromRequestToDto(postRequest);
        PostDto savePost = postService.createPost(postDto);
        return ResponseEntity.ok(savePost.fromDtoToResponse());
    }
}
