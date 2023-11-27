package com.myapp.warmwave.domain.chat.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    // sockJS Fallback을 이용해 노출할 endpoint 설정
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 웹소켓이 handshake를 하기 위해 연결하는 endpoint
        registry.addEndpoint("/ws") //socket.js 클라이언트가 websocket handShake로 커넥션할 경루   /stomp/chat
                .setAllowedOriginPatterns("*") // or http://*:* 가능한 경로설정(전체오픈:기호에 따라 수정)
                .withSockJS();

    }
    //메세지 브로커에 관한 설정
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // 클라이언트->서버로 발행하는 메세지에 대한 endpoint 설정 : 구독에 대한 메세지 ... @Controller @MessageMapping 메서드로 라우팅
        registry.setApplicationDestinationPrefixes("/app"); // /pub

        // 서버 -> 클라이언트로 발행하는 메세지에 대한 endpoint 설정
        registry.enableSimpleBroker("/topic"); // /sub
    }
}
