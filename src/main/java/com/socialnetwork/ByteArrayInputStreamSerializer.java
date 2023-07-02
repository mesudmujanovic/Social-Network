package com.socialnetwork;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.ByteArrayInputStream;
import java.io.IOException;

public class ByteArrayInputStreamSerializer extends JsonSerializer<ByteArrayInputStream> {

    @Override
    public void serialize(ByteArrayInputStream value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        // Konvertujte ByteArrayInputStream u byte[] radi serijalizacije
        byte[] bytes = value.readAllBytes();
        gen.writeBinary(bytes);
    }
}
