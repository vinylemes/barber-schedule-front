import React from "react";
import "./index.css";
import { useState } from "react";

import { CircleX, Eye, EyeClosed } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    shopName: z.string().min(1, { message: "Shop name is required." }),
    cep: z.string().min(1, { message: "CEP is required." }),
    streetName: z.string().min(1, { message: "Street name is required." }),
    number: z.string().min(1, { message: "Number is required." }),
    complement: z.string().optional(),
    city: z.string().min(1, { message: "City is required." }),
    uf: z.string().min(1, { message: "UF is required." }),
    cpfCnpj: z.string().min(1, { message: "CPF/CNPJ is required." }),
    whatsapp: z.string().min(1, { message: "WhatsApp is required." }),
    logo: z.any().optional(),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

const RegisterBarberShopForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shopName: "",
      cep: "",
      streetName: "",
      number: "",
      complement: "",
      city: "",
      uf: "",
      cpfCnpj: "",
      whatsapp: "",
      logo: null,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 register-form w-full max-w-md">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="shopName"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Digite Nome da sua Empresa"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Digite o CEP"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="streetName"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Nome da Rua"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Número"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complement"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Complemento"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Cidade"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uf"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="UF"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpfCnpj"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="CPF / CNPJ"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Digite o WhatsApp da Empresa"
                      type="text"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Faça upload da Logo"
                      type="file"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Digite seu Email"
                      type="email"
                      {...field}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => field.onChange("")}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      <CircleX size={20} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Digite sua Senha"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      {showPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl className="password-input-container">
                  <div className="flex gap-2 w-full">
                    <Input
                      placeholder="Confirmar Senha"
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      className="border-none h-[55px] text-lg py-4"
                    />
                    <div
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="right-3 top-1/2 absolute cursor-pointer transform -translate-y-1/2">
                      {showConfirmPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-primary text-white my-5 w-full h-[50px] b-r-10 text-lg transition-transform duration-200 hover:scale-105 hover:bg-primary">
          Entrar
        </Button>
      </form>
    </Form>
  );
};

export default RegisterBarberShopForm;
