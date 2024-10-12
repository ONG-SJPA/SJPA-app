import { View, Text, Image } from 'react-native';
import { Box } from '@/components/ui/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack } from '@/components/ui/vstack';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Heading } from '@/components/ui/heading';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast';
import { useState } from 'react';

export default function Login() {
  const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email(),
    password: z.string().min(1, 'Password is required'),
    rememberme: z.boolean().optional(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({});
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  return (
    <SafeAreaView>
      <View className="bg-green-400 h-full">
        <Box className="bg-green-400 w-full h-20vh absolute top-0">
          <VStack className="w-full p-5">
            <Image
              className="w-14 h-12"
              source={require('@/assets/images/logo ong.png')}
              resizeMethod="scale"
            />

            <Heading size="3xl">Bem Vindo!</Heading>
            <Text>Faça login para usar o app</Text>
          </VStack>
        </Box>
        <Box className="bg-gray-200 w-full h-80vh absolute bottom-0 rounded-t-50px">
          <VStack className="w-full p-5 pt-10">
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Controller
                defaultValue=""
                name="email"
                control={control}
                rules={{
                  required: true,

                  validate: async (value) => {
                    try {
                      await loginSchema.parseAsync({ email: value });
                      return true;
                    } catch (error: any) {
                      return error.message;
                    }
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input isRequired={true}>
                    <InputField
                      placeholder="Enter email"
                      value={value}
                      onChangeText={onChange}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
            </FormControl>
          </VStack>
        </Box>
      </View>
    </SafeAreaView>
  );
}
