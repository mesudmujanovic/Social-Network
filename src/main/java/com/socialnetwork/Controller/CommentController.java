package com.socialnetwork.Controller;

import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import com.socialnetwork.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/comment/post/{postId}/user/{userId}")
    public ResponseEntity<CommentResponse> createComment(@RequestBody CommentRequest commentRequest,
                                                         @PathVariable Long postId,
                                                         @PathVariable Long userId) {
        CommentDto commentDto = CommentDto.fromRequestToDto(commentRequest);
        CommentDto commentDtoSave = commentService.saveComment(commentDto,postId,userId);
        return ResponseEntity.ok(commentDtoSave.fromResponseToDto());
    }
}
