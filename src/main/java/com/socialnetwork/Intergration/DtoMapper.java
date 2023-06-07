package com.socialnetwork.Intergration;

public interface DtoMapper <T, C>{
    public <T> T apply(C c);
}
