package com.socialnetwork.Controller;

import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Request.PostRequest;
import com.socialnetwork.Infrastucture.Response.PostResponse;
import com.socialnetwork.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/savePost/verifyId/{id}")
    public ResponseEntity<PostResponse> createPost( @RequestBody PostRequest postRequest,
                                                    @PathVariable Long id){
        PostDto postDto = PostDto.fromRequest(postRequest);
        PostDto postSave = postService.createPost(postDto,id);
        return  ResponseEntity.ok(postSave.toResponse());
    }

    @GetMapping("/allPosts")
    public ResponseEntity<List<PostResponse>> getAllPosts(){
        List<PostDto> postDtoList = postService.getAllPosts();
        return ResponseEntity.ok(postDtoList.stream().map( PostDto::toResponse).collect(Collectors.toList()));
     }

     @GetMapping("/postId/{postId}")
        public ResponseEntity<PostResponse> getPostById(@PathVariable Long postId){
            PostDto postDto = postService.postId(postId);
            return ResponseEntity.ok(postDto.toResponse());
         }

}
