package com.socialnetwork.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public String getVerName() {
        return verName;
    }


    public Image(String verName) {
        this.verName = verName;
    }

    private String verName;

    @Lob
    private byte[] content;




}
