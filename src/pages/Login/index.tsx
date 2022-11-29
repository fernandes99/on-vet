import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

import { Button } from 'react-native';
import { Container } from "../../styles/global"
import { Text } from "./styles"

WebBrowser.maybeCompleteAuthSession();
const useProxy = false;
const redirectUri = AuthSession.makeRedirectUri({
    useProxy,
});

export const LoginPage = () => {
    const discovery = AuthSession.useAutoDiscovery(process.env.AUTH_URL || "");
    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
          clientId: 'native.code',
          redirectUri,
          scopes: ['openid', 'profile', 'email', 'offline_access'],
        },
        discovery
    );

    useEffect(() => {
        if (!result) return;
        console.log(result);
    }, [result]);

    return (
        <Container>
            <Button title="Login!" disabled={!request} onPress={() => promptAsync({ useProxy })} />
            <Text>Login Page</Text>
            <Text>Login Page</Text>
        </Container>
    )
}