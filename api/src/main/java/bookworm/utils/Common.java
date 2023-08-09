package bookworm.utils;

import javax.inject.Singleton;

import com.fasterxml.jackson.databind.ObjectMapper;


@Singleton
public class Common {
    public static final ObjectMapper mapper = new ObjectMapper();
}
