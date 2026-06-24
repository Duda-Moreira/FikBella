import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

export default function Index() {
  return (
    <LinearGradient
      colors={["#fce7f3", "#fdf2f8", "#ffffff"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* título */}
      <View className="items-center mb-10">
        <Image
          source={require("../assets/LOGOFIKBELLA.jpg")}
          style={{
            width: 200,
            height: 200,
            marginBottom: 30,
          }}
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-pink-600">FikBella</Text>
        <Text className="text-gray-500 text-sm mt-1">
          Realçando sua beleza natural
        </Text>
      </View>
      <View className="w-full px-4">
        {/* email */}
        <View className="w-full">
          <Text className="text-gray-700 font-medium mb-2">E-mail</Text>
          <View className="flex-row items-center bg-pink-50 rounded-2xl px-4 py-3.5 mb-5">
            <Mail size={18} color="#ec4899" />
            <TextInput
              placeholder="nome@exemplo.com"
              placeholderTextColor="#d1a3bd"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              className="flex-1 ml-3 text-gray-800"
            />
          </View>
        </View>

        {/* senha */}
        <View className="w-full">
          <Text className="text-gray-700 font-medium mb-2">Senha</Text>
          <View className="flex-row items-center bg-pink-50 rounded-2xl px-4 py-3.5">
            <Lock size={18} color="#ec4899" />
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#d1a3bd"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              className="flex-1 ml-3 text-gray-800"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={18} color="#9ca3af" />
              ) : (
                <Eye size={18} color="#9ca3af" />
              )}
            </Pressable>
          </View>
        </View>
        {/* esqueci minha senha */}
        <Pressable className="items-end mt-3">
          <Text className="text-pink-600 text-sm font-medium">
            Esqueci minha senha
          </Text>
        </Pressable>
      </View>

      <View className="w-full px-4">
        {/* botão entrar */}
        <Pressable className="bg-pink-600 rounded-2xl py-4 mt-8 flex-row items-center justify-center">
          <Text className="text-white font-semibold text-base mr-2">
            Entrar
          </Text>
          <ArrowRight size={18} color="#fff" />
        </Pressable>

        {/* criar conta */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-500 text-sm">Novo por aqui? </Text>
          <Pressable>
            <Text className="text-pink-600 text-sm font-semibold">
              Crie sua conta
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
