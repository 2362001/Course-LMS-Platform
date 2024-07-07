"use client";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.string().min(1, {
  message: "Title is required",
}) as any;

const CreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your courses</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course????
        </p>
        <Form>
          <form onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => {
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                </FormItem>;
              }}
            ></FormField>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
