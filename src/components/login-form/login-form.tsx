import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const formSchema = z.object({
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
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
        className="space-y-8 register-form">
        <div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="password-input-container">
                    <div className="flex gap-2  w-full">
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
                    <div className="flex gap-2  w-full">
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
          </div>

          <div className="forgot-password mt-4">
            <Link to="/forgotpassword" className="text-[black]">
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="bg-primary text-white my-5 w-[350px] h-[50px] b-r-10 text-lg transition-transform duration-200  hover:scale-105 hover:bg-primary">
          Entrar
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
