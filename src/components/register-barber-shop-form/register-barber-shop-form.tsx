import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Scissors from "@/assets/scissors.svg";
import "./index.css";

const formSchema = z.object({
  companyName: z.string().min(1, { message: "Company name is required." }),
  cep: z.string().min(8, { message: "CEP must be at least 8 characters." }),
  streetName: z.string().min(1, { message: "Street name is required." }),
  neighborhood: z.string().min(1, { message: "Neighborhood is required." }),
  number: z.string().min(1, { message: "Number is required." }),
  complement: z.string().optional(),
  city: z.string().min(1, { message: "City is required." }),
  uf: z
    .string()
    .min(2, { message: "UF is required." })
    .max(2, { message: "UF must be 2 characters." }),
  cpf: z.string().min(11, { message: "CPF must be at least 11 characters." }),
  whatsapp: z
    .string()
    .min(10, { message: "WhatsApp must be at least 10 characters." }),
  logo: z.any().optional(),
});

const RegisterBarberShopForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      cep: "",
      streetName: "",
      neighborhood: "",
      number: "",
      complement: "",
      city: "",
      uf: "",
      cpf: "",
      whatsapp: "",
      logo: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h1 className="tituloA">
        Faça o cadastro<br></br>da sua barbearia
      </h1>
      <img className="scissors" src={Scissors} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 register-form">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Digite Nome da sua Empresa"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
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
                  <FormControl>
                    <Input
                      placeholder="Digite o CEP"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
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
                  <FormControl>
                    <Input
                      placeholder="Nome da Rua"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Número"
                        {...field}
                        className="border-none h-[60px] text-lg py-4 w-[195px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Bairro"
                        {...field}
                        className="border-none h-[60px] text-lg py-4 w-[195px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Complemento"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Cidade"
                        {...field}
                        className="border-none h-[60px] text-lg py-4 w-[195px]"
                      />
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
                    <FormControl>
                      <Input
                        placeholder="UF"
                        {...field}
                        className="border-none h-[60px] text-lg py-4 w-[195px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="CPF"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
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
                  <FormControl>
                    <Input
                      placeholder="Digite o WhatsApp da sua Empresa"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
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
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      className="border-none h-[60px] text-lg py-4 w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="bg-primary text-white my-5 w-[350px] h-[50px] b-r-10 text-lg transition-transform duration-200  hover:scale-105 hover:bg-primary">
            Registrar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterBarberShopForm;
